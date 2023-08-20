interface MarkupComponentProps {
  children: React.ReactNode;
}

export function MarkupComponent({ children }: MarkupComponentProps) {
  return <span className="markup-component">{children}</span>;
}
