interface QuickSettingsProps {
  filters: string[];
  active: string;
  onChange: (value: string) => void;
}

export function QuickSettings({ filters, active, onChange }: QuickSettingsProps) {
  return (
    <md-chip-set>
      {filters.map((f) => (
        <md-filter-chip
          key={f}
          label={f}
          selected={active === f}
          onClick={() => onChange(f)}
        />
      ))}
    </md-chip-set>
  );
}