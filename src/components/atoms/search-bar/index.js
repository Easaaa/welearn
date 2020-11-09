import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarWrap } from './style';

export const SearchBar = ({ search: { setSearchFilter } }) => {
  const handleSearch = (value) => {
    if (value.length === 0) {
      setSearchFilter({ toggle: false, value: '' });
    } else {
      setSearchFilter((state) => ({
        toggle: true,
        value: value,
      }));
    }
  };

  return (
    <SearchBarWrap>
      <input
        type='text'
        placeholder='Search a title'
        onChange={(e) => handleSearch(e.target.value)}></input>
      <button>
        <FiSearch />
      </button>
    </SearchBarWrap>
  );
};
