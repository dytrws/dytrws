interface TabsProps {
  tabs: string[];
  selectedId: string;
}

export function Tabs({ tabs, selectedId }: TabsProps) {
  return (
    <div className="filter-navigation" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={tab === selectedId}
          className={`filter-navigation__button${
            tab === selectedId ? " active" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
