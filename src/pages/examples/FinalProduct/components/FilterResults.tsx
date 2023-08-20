import { FilterReset } from "./FilterReset";
import { useFilterContext } from "../hooks/useFilterContext";

function formatSearchString(string: string, search: string) {
  if (string && search) {
    return string.replace(
      new RegExp(search, "gi"),
      (match) => `<span class="filter__highlights">${match}</span>`
    );
  }

  return string;
}

export function FilterResults() {
  const { reset } = useFilterContext();
  const { filters, filterResults: items } = useFilterContext();
  const search = filters.search.value;

  return (
    <div className="filter__results">
      {!items.length && (
        <>
          <h2>No Results</h2>
          <p>
            Reset filters and try again? <FilterReset onClick={reset} />
          </p>
        </>
      )}
      {items.length > 0 && (
        <>
          <h1>{items.length} Items</h1>
          <div>
            <ul>
              {items.map((item) => {
                return (
                  // insert string as html into a div with dangerouslySetInnerHTML
                  // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml

                  <li
                    className="filter__result-item"
                    key={item.id}
                    dangerouslySetInnerHTML={{
                      __html: formatSearchString(item.name, search),
                    }}
                  ></li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
