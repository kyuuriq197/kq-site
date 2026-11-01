interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

/** Material 3 search field: native input with token-based styling. */
export function SearchField({ value, onChange, placeholder }: SearchFieldProps) {
  return (
    <div className="search">
      <span className="material-symbols-outlined" aria-hidden="true">search</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="off"
        spellCheck={false}
      />
      {value.length > 0 ? (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <span className="material-symbols-outlined" aria-hidden="true">close</span>
        </button>
      ) : null}
    </div>
  );
}
