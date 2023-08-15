import { useId } from "react";

export type Option = {
  id: string;
  value: boolean;
};

interface Props {
  label: string;
  options: Option[];
  setOptions: (options: Option[]) => void;
}

export function Checkboxgroup({ label, options, setOptions }: Props) {
  const htmlId = useId();

  return (
    <>
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
              onChange={(e) => {
                const newOptions = options.map((element) => {
                  if (element.id === option.id) {
                    return {
                      ...element,
                      value: e.target.checked,
                    };
                  } else {
                    return element;
                  }
                });

                setOptions(newOptions);
              }}
            />
            <label htmlFor={`${htmlId}_${option.id}`}>{option.id}</label>
          </li>
        ))}
      </ul>
    </>
  );
}
