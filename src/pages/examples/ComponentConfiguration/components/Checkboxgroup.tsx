interface CheckboxgroupProps {
  label: string;
  options: string[];
}

export function Checkboxgroup({ label, options }: CheckboxgroupProps) {
  return (
    <>
      <h3>{label}</h3>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <input
              id={`${label}_${option}`}
              name={`${label}_checkboxgroup`}
              type="checkbox"
              value={option}
            />
            <label htmlFor={`${label}_${option}`}>{option}</label>
          </li>
        ))}
      </ul>
    </>
  );
}
