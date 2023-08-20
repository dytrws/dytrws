import { useEffect } from "react";

interface UseKeyboardNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
  wheelListenerNode?: HTMLElement;
}

export function useUserInteraction({
  onNext,
  onPrevious,
  wheelListenerNode,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    function handleKeyListener(event: KeyboardEvent) {
      if (
        event.key === "ArrowRight" ||
        event.key === " " ||
        event.key === "ArrowDown"
      ) {
        onNext();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        onPrevious();
      }
    }

    function handleWheelListener(event: WheelEvent) {
      const delta = Math.sign(event.deltaY);
      if (delta > 0) {
        onNext();
      } else if (delta < 0) {
        onPrevious();
      }
    }

    wheelListenerNode?.addEventListener("wheel", handleWheelListener);

    window.addEventListener("keyup", handleKeyListener);

    return () => {
      wheelListenerNode?.removeEventListener("wheel", handleWheelListener);
      window.removeEventListener("keyup", handleKeyListener);
    };
  }, [onNext, onPrevious, wheelListenerNode]);
}
