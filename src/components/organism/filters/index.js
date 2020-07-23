import React from "react"
import { FiltersContainer, GeneralFilters, Filter } from "./style"
import { ToggleFilter } from "./toggle-filter"
import { OutsideAlerter } from "hooks/useClickOutside"

export const Filters = ({ filter, data }) => {
  const { filterState, setFilterState, filterDefaultState } = filter

  const handleFilter = (value, filterFor) => {
    if (value.length === 0) {
      setFilterState(filterDefaultState)
    } else {
      setFilterState(currentState => ({
        ...currentState,
        filterFor: filterFor,
        filterVal: value,
      }))
    }
  }

  const authorList = arr => {
    let authorArray = []
    data &&
      data.map(item => {
        if (authorArray.findIndex(x => x === item.madeByFullName) === -1) {
          authorArray.push(item.madeByFullName)
        } else {
          return
        }
      })
    return authorArray
  }

  return (
    <FiltersContainer>
      <ToggleFilter filterState={filterState} setFilterState={setFilterState} />
      {filterState.toggle ? (
        <OutsideAlerter
          toggle={() => setFilterState(state => ({ ...state, toggle: false }))}
        >
          <GeneralFilters id="form">
            <Filter>
              <label>Tipo</label>
              <select
                name="type"
                id="type"
                onChange={e => handleFilter(e.target.value, "type")}
              >
                <option value="">Qualsiasi</option>
                <option value="mtt">MTT</option>
                <option value="cash_game">CASH GAME</option>
                <option value="sng">SNG</option>
              </select>
            </Filter>
            <Filter>
              <label>Ruolo</label>
              <select
                name="position"
                id="position"
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
            <button onClick={() => setFilterState(filterDefaultState)}>
              Azzera
            </button>
          </GeneralFilters>
        </OutsideAlerter>
      ) : null}
    </FiltersContainer>
  )
}
