import { useRef, useState, useEffect } from 'react';

interface MusicPlayerProps {
  src: string;
  title: string;
  enabled: boolean;
}

function fmt(t: number) {
  if (!isFinite(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return m + ':' + (s < 10 ? '0' : '') + s;
}

export function MusicPlayer({ src, title, enabled }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const seekRef = useRef<HTMLInputElement>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState('0:00');
  const [dur, setDur] = useState('0:00');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onMeta = () => setDur(fmt(audio.duration));
    const onTime = () => {
      setCur(fmt(audio.currentTime));
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  if (!enabled) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      audio.currentTime = (Number(e.target.value) / 100) * audio.duration;
    }
  };

  return (
    <div className="music">
      <audio ref={audioRef} src={src} preload="none" />
      <div className="player">
        <button
          className={'player-btn' + (playing ? ' playing' : '')}
          onClick={toggle}
          aria-pressed={playing}
          aria-label="Воспроизвести"
          type="button"
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <div className="player-info">
          <div className="player-title">{title}</div>
          <div className="player-bar">
            <input
              ref={seekRef}
              type="range"
              min="0"
              max="100"
              value={progress}
              step="0.1"
              aria-label="Прогресс"
              onChange={onSeek}
            />
          </div>
          <div className="player-time">
            <span>{cur}</span>
            <span>{dur}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
