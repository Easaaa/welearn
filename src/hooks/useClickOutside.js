import React, { useRef, useEffect } from "react"

const useOutsideAlerter = (ref, toggle) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}

export const OutsideAlerter = ({ children, toggle }) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, toggle)

  return <div ref={wrapperRef}>{children}</div>
}
