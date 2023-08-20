// A react component returns a tree of JSX elements
// this is very similar to HTML with some exceptions.
// For example:
// - a `class` attribute becomes `className`
// - the `for` attribute becomes `htmlFor`
// - the `style` attribute expects an object instead of a string

// But JSX also offers many benefits.
// For Example:
// - components can be reused
// - it can be enhanced with inline javascript to make it dynamic
// - arrays can be iterated over to generate a list of elements

// next steps:
// split up the JSX into components
// add interactivity

export function ExampleJSX() {
  return (
    <>
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
      <div className="filter">
        <div className="filter__settings">
          <div className="filter__settings-header-container">
            <h2>Filter</h2>
            <div>
              <button className="filter__reset">Reset</button>
            </div>
          </div>
          <input
            aria-label="Search"
            type="search"
            placeholder="Type something"
            value=""
          />
          <ul>
            <li>
              <h3>type</h3>
              <ul>
                <li>
                  <input
                    id=":r1:_fruit"
                    name="fruit"
                    type="checkbox"
                    value="fruit"
                  />
                  <label htmlFor=":r1:_fruit">fruit</label>
                </li>
                <li>
                  <input
                    id=":r1:_vegetable"
                    name="vegetable"
                    type="checkbox"
                    value="vegetable"
                  />
                  <label htmlFor=":r1:_vegetable">vegetable</label>
                </li>
                <li>
                  <input
                    id=":r1:_root"
                    name="root"
                    type="checkbox"
                    value="root"
                  />
                  <label htmlFor=":r1:_root">root</label>
                </li>
              </ul>
            </li>
            <li>
              <h3>taste</h3>
              <ul>
                <li>
                  <input
                    id=":r3:_sweet"
                    name="sweet"
                    type="checkbox"
                    value="sweet"
                  />
                  <label htmlFor=":r3:_sweet">sweet</label>
                </li>
                <li>
                  <input
                    id=":r3:_sour"
                    name="sour"
                    type="checkbox"
                    value="sour"
                  />
                  <label htmlFor=":r3:_sour">sour</label>
                </li>
                <li>
                  <input
                    id=":r3:_umami"
                    name="umami"
                    type="checkbox"
                    value="umami"
                  />
                  <label htmlFor=":r3:_umami">umami</label>
                </li>
                <li>
                  <input
                    id=":r3:_spicy"
                    name="spicy"
                    type="checkbox"
                    value="spicy"
                  />
                  <label htmlFor=":r3:_spicy">spicy</label>
                </li>
              </ul>
            </li>
            <li>
              <h3>price</h3>
              <label>
                <input type="range" min="0" max="5" value="5" />
                <br />5
              </label>
            </li>
          </ul>
        </div>
        <div className="filter__results">
          <h1>7 Items</h1>
          <div>
            <ul>
              <li className="filter__result-item">🍎 Apple</li>
              <li className="filter__result-item">🍌 Banana</li>
              <li className="filter__result-item">🍋 Lemon</li>
              <li className="filter__result-item">🍅 Tomato</li>
              <li className="filter__result-item">🍓 Strawberry</li>
              <li className="filter__result-item">🍒 Cherry</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
