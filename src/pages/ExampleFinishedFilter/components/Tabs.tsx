interface TabsProps {
  tabs: string[];
  activeId: string;
  onChange: (option: string) => void;
}

export function Tabs({ tabs, activeId, onChange }: TabsProps) {
  return (
    <div className="filter-navigation" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeId === tab}
          className={`filter-navigation__button${
            activeId === tab ? " active" : ""
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
