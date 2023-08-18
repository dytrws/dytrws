interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  value: number;
  onUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
}

export function RangeSlider({
  label,
  min,
  max,
  value,
  onUpdate,
  ...restProps
}: RangeSliderProps) {
  return (
    <>
      <h3>{label}</h3>
      <label>
        <input
          {...restProps}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onUpdate}
        />
        <br />
        {value}
      </label>
    </>
  );
}
