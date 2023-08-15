import { useId } from "react";
import { Option } from "../filter.types";

interface Props {
  label: string;
  options: Option[];
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

export function Checkboxgroup({
  label,
  options,
  onUpdate,
  ...restProps
}: Props) {
  const htmlId = useId();
  return (
    <div {...restProps}>
      <h3>{label}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <input
              id={`${htmlId}_${option.id}`}
              name={option.id}
              type="checkbox"
              value={option.id}
              checked={option.value}
              onChange={onUpdate}
            />
            <label htmlFor={`${htmlId}_${option.id}`}>{option.id}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
