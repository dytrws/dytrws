export function Tabs() {
  return (
    <div className="filter-navigation" role="tablist">
      <button
        role="tab"
        aria-selected="true"
        className="filter-navigation__button active"
      >
        food
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="filter-navigation__button"
      >
        animals
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="filter-navigation__button"
      >
        sports
      </button>
    </div>
  );
}
