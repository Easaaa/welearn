import React, { useState } from "react"
import { FiltersContainer, GeneralFilters, Filter } from "./style"
import { ToggleFilter } from "./toggle-filter"
import { OutsideAlerter } from "hooks/useClickOutside"

export const Filters = ({ filter, data }) => {
  const { filterState, setFilterState, filterDefaultState } = filter
  const [isToggle, setIsToggle] = useState(false)

  const handleFilter = (value, filterFor) => {
    if (value.length === 0) {
      setFilterState(filterDefaultState)
    } else {
      setFilterState(currentState => ({
        ...currentState,
        toggle: true,
        filterFor: filterFor,
        filterVal: value,
      }))
      setIsToggle(false)
    }
  }

  const authorList = arr => {
    let authorArray = []
    data &&
      data.map(item => {
        if (authorArray.findIndex(x => x === item.node.madeByFullName) === -1) {
          authorArray.push(item.node.madeByFullName)
        } else {
          return
        }
      })
    return authorArray
  }

  const handleReset = e => {
    e.preventDefault()
    setIsToggle(false)
    setFilterState(filterDefaultState)
  }

  return (
    <FiltersContainer>
      <ToggleFilter state={{ isToggle, setIsToggle }} />
      {isToggle ? (
        <OutsideAlerter toggle={() => setIsToggle(false)}>
          <GeneralFilters id="form">
            <Filter>
              <label>Tipo</label>
              <select
                name="type"
                id="type"
                onChange={e => handleFilter(e.target.value, "type")}
              >
                <option value="">Qualsiasi</option>
                <option value="mtt">Mtt</option>
                <option value="cash_game">Cash Game</option>
                <option value="sng">Sng</option>
              </select>
            </Filter>
            <Filter>
              <label>Ruolo</label>
              <select
                name="role"
                id="role"
                onChange={e => handleFilter(e.target.value, "role")}
              >
                <option value="">Qualsiasi</option>
                <option value="level_1">Principiante</option>
                <option value="level_2">Intermedio</option>
                <option value="level_3">Avanzato</option>
              </select>
            </Filter>
            <Filter>
              <label>Autore</label>
              <select
                name="author"
                id="author"
                onChange={e => handleFilter(e.target.value, "madeByFullName")}
              >
                <option value="">Qualsiasi</option>
                {authorList(data).map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Filter>
            <button onClick={handleReset}>Azzera</button>
          </GeneralFilters>
        </OutsideAlerter>
      ) : null}
    </FiltersContainer>
  )
}
