import React from "react"
import { GoSettings } from "react-icons/go"
import { ToggleContainer, Switch } from "./style"

export const ToggleFilter = ({ state: { isToggle, setIsToggle } }) => {
  return (
    <ToggleContainer onClick={() => setIsToggle(!isToggle)} active={isToggle}>
      <GoSettings /> Filters
      {/* <Switch filterState={filterState.toggle}>
        <input
          type="checkbox"
          onChange={() =>
            setFilterState(state => ({ ...state, toggle: !state.toggle }))
          }
        />
        <span className="slider round"></span>
      </Switch> */}
    </ToggleContainer>
  )
}
