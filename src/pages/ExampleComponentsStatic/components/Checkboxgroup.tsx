export function Checkboxgroup() {
  return (
    <>
      <h3>type</h3>
      <ul>
        <li>
          <input id=":r1:_fruit" name="fruit" type="checkbox" value="fruit" />
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
          <input id=":r1:_root" name="root" type="checkbox" value="root" />
          <label htmlFor=":r1:_root">root</label>
        </li>
      </ul>
    </>
  );
}
