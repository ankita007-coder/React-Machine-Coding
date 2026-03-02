import { useEffect } from "react";

export const useFocusTrap = (ref, isOpen) => {
  if (!isOpen || !ref.current) {
    return;
  }
  useEffect(() => {
    const focusableSelectors =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const findAllSelectors = ref.current.querySelectorAll(focusableSelectors);
    const firstSelector = findAllSelectors[0];
    const lastSelector = findAllSelectors[findAllSelectors.length - 1];
    function handleKeyDown(e) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // SHIFT + TAB
        if (document.activeElement === firstSelector) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // TAB
        if (document.activeElement === lastSelector) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
    ref.current.addEventListener("keydown",handleKeyDown)
      return ()=> {
        ref.current?.removeEventListener("keydown",handleKeyDown)
      }
  }, [ref, isOpen]);
};
