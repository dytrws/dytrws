interface Item {
  id: number;
  name: string;
  categories: {
    [id: string]: string | string[];
  };
  ranges: {
    [id: string]: number;
  };
}

interface Props {
  items: Item[];
}

export function FilterResults({ items }: Props) {
  return (
    <div className="filter__results">
      <h1>{items.length} Items</h1>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="filter__result-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
