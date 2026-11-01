interface FilterChipsProps {
  filters: string[];
  active: string;
  onChange: (value: string) => void;
}

/** Material 3 filter chips used to filter the project list by language. */
export function FilterChips({ filters, active, onChange }: FilterChipsProps) {
  return (
    <md-chip-set role="group" aria-label="Filter projects by language">
      {filters.map((f) => (
        <md-filter-chip
          key={f}
          label={f === 'All' ? 'All languages' : f}
          selected={active === f}
          onClick={() => onChange(f)}
        />
      ))}
    </md-chip-set>
  );
}
