import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  search,
  clearSingleItem,
} from 'src/actions';

import 'src/components/Search/style.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.swData.searchResults);

  const onSearch = () => {
    dispatch(search(value));
  }

  return (
    <div className="search">
      <Link to="/" onClick={() => dispatch(clearSingleItem())}>Home</Link>
      <div className="search__block">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          className="search__block__input"
        />

        <input
          type="button"
          className="search__block__btn"
          onClick={() => onSearch()}
          value="Search"
        />
      </div>

      {searchResults && searchResults.length !== 0 ? (
        searchResults.map(r => (
          <p>{r.name || r.title}</p>
        ))
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default Search;
