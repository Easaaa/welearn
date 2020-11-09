import React, { useState } from 'react';
import {
  FiltersContainer,
  GeneralFilters,
  Filter,
  CloseBtn,
  ResetBtn,
} from './style';
import { ToggleFilter } from './toggle-filter';
import { OutsideAlerter } from 'hooks/useClickOutside';

export const Filters = ({ filter, data }) => {
  const { filterState, setFilterState, filterDefaultState } = filter;
  const [isToggle, setIsToggle] = useState(false);

  const handleFilter = (value, filterFor) => {
    if (value.length === 0) {
      setFilterState(filterDefaultState);
    } else {
      setFilterState((currentState) => ({
        ...currentState,
        toggle: true,
        filterFor: filterFor,
        filterVal: value,
      }));
      setIsToggle(false);
    }
  };

  const authorList = (arr) => {
    let authorArray = [];
    data &&
      data.map((item) => {
        if (
          authorArray.findIndex((x) => x === item.node.madeByFullName) === -1
        ) {
          authorArray.push(item.node.madeByFullName);
        } else {
          return;
        }
      });
    return authorArray;
  };

  const handleReset = (e) => {
    e.preventDefault();
    setIsToggle(false);
    setFilterState(filterDefaultState);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setIsToggle(false);
  };

  return (
    <FiltersContainer>
      <ToggleFilter state={{ isToggle, setIsToggle }} />
      <GeneralFilters isToggle={isToggle} id='form'>
        <CloseBtn onClick={handleClose}>Close</CloseBtn>
        <Filter>
          <label>Type</label>
          <select
            name='type'
            id='type'
            onChange={(e) => handleFilter(e.target.value, 'type')}>
            <option value=''>Choose One</option>
            <option value='productivity'>Productivity</option>
            <option value='cooking'>Cooking</option>
          </select>
        </Filter>
        <Filter>
          <label>Level</label>
          <select
            name='role'
            id='role'
            onChange={(e) => handleFilter(e.target.value, 'role')}>
            <option value=''>Choose One</option>
            <option value='level_1'>Bronze</option>
            <option value='level_2'>Silver</option>
            <option value='level_3'>Gold</option>
          </select>
        </Filter>
        <Filter>
          <label>Author</label>
          <select
            name='author'
            id='author'
            onChange={(e) => handleFilter(e.target.value, 'madeByFullName')}>
            <option value=''>Choose One</option>
            {authorList(data).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </Filter>
        <ResetBtn onClick={handleReset}>Reset</ResetBtn>
      </GeneralFilters>
    </FiltersContainer>
  );
};
