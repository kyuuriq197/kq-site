import { useState } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <div className="avatar-wrap">
      <img
        className="avatar"
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc(fallback)}
      />
    </div>
  );
}
