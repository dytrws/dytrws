interface FilterResetProps {
  onClick: () => void;
  children?: React.ReactNode;
  [x: string]: any;
}

export function FilterReset({
  onClick,
  children,
  ...restProps
}: FilterResetProps) {
  return (
    <button {...restProps} className="filter__reset" onClick={onClick}>
      {children ? children : "Reset"}
    </button>
  );
}
