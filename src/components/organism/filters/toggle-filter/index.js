import React from "react"
import { GoSettings } from "react-icons/go"
import { ToggleContainer, Switch } from "./style"

export const ToggleFilter = ({ filterState, setFilterState }) => {
  return (
    <ToggleContainer
      onClick={() =>
        setFilterState(state => ({ ...state, toggle: !state.toggle }))
      }
      active={filterState.toggle ? true : false}
    >
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
