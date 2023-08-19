import { useEffect, useRef } from "react";

export function Details({
  children,
  summary,
}: {
  children: React.ReactNode;
  summary: string;
}) {
  const detailRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (detailRef.current) {
        const isOutside =
          !(event.target instanceof Element) ||
          !detailRef.current.contains(event.target) ||
          event.target === detailRef.current;

        if (isOutside) {
          detailRef.current.open = false;
        }
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <details ref={detailRef} className="chapters">
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
