interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  [x: string]: any;
}

export function FilterReset({ onClick, children, ...restProps }: Props) {
  return (
    <button {...restProps} className="filter__reset" onClick={onClick}>
      {children ? children : "Reset"}
    </button>
  );
}
