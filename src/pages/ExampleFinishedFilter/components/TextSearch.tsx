interface Props {
  value: string;
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

export function TextSearch({ value, onUpdate, restProps }: Props) {
  return (
    <input
      {...restProps}
      value={value}
      onChange={onUpdate}
      aria-label="Search"
      type="search"
      placeholder="Type something"
    />
  );
}
