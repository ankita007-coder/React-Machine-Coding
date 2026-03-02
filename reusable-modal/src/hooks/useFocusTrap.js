import { useEffect } from "react";

export const useFocusTrap = (ref, isOpen) => {
  useEffect(() => {
    if (!isOpen || !ref.current) {
      return;
    }
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
          lastSelector.focus();
        }
      } else {
        // TAB
        if (document.activeElement === lastSelector) {
          e.preventDefault();
          firstSelector.focus();
        }
      }
    }
    ref.current.addEventListener("keydown", handleKeyDown);
    firstSelector?.focus();
    return () => {
      ref.current?.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, isOpen]);
};
