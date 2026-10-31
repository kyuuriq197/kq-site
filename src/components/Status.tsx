interface StatusProps {
  enabled: boolean;
  type: string;
  text: string;
}

const COLORS: Record<string, string> = {
  online: '#2ecc71',
  idle: '#f1c40f',
  offline: '#95a5a6',
  custom: '#3498db'
};

export function Status({ enabled, type, text }: StatusProps) {
  if (!enabled) return null;
  const color = COLORS[type] || COLORS.custom;
  return (
    <span className="status" title={text} style={{ background: color }} />
  );
}
