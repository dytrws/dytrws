interface RangeSliderProps {
  min: number;
  max: number;
  label: string;
}

export function RangeSlider({ min, max, label }: RangeSliderProps) {
  return (
    <>
      <h3>{label}</h3>
      <label>
        <input type="range" min={min} max={max} value={max} />
        <br />5
      </label>
    </>
  );
}
