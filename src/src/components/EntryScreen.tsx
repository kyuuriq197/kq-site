interface EntryScreenProps {
  onEnter: () => void;
  visible: boolean;
}

export function EntryScreen({ onEnter, visible }: EntryScreenProps) {
  if (!visible) return null;
  return (
    <div className="enter">
      <button className="enter-btn" onClick={onEnter} type="button">
        click to enter
      </button>
    </div>
  );
}
