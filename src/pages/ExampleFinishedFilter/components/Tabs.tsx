interface TabsProps {
  options: string[];
  active: string;
  onUpdate: (option: string) => void;
}

export function Tabs({ options, active, onUpdate }: TabsProps) {
  return (
    <div className="filter-navigation" role="tablist">
      {options.map((option) => (
        <button
          key={option}
          role="tab"
          aria-selected={active === option}
          className={`filter-navigation__button${
            active === option ? " active" : ""
          }`}
          onClick={() => onUpdate(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
