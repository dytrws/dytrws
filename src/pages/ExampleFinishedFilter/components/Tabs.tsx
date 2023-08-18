interface TabsProps {
  options: string[];
  activeId: string;
  onChange: (option: string) => void;
}

export function Tabs({ options, activeId, onChange }: TabsProps) {
  return (
    <div className="filter-navigation" role="tablist">
      {options.map((option) => (
        <button
          key={option}
          role="tab"
          aria-selected={activeId === option}
          className={`filter-navigation__button${
            activeId === option ? " active" : ""
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
