import React, { RefObject } from "react";

function useDropdownPosition(
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;

    let left = rect.left + window.scrollX;
    // const top = rect.top + window.scrollY + rect.x;
    const top = rect.bottom + window.screenY + 15;

    console.log(rect, window.screenY, window.scrollY);

    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.screenX - dropdownWidth;

      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }

      if (left > 0) {
        left = 16;
      }
    }
    return { top, left };
  };

  return { getDropdownPosition };
}

export default useDropdownPosition;
