import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeResourceName } from 'src/actions';

import 'src/components/Nav/style.scss';

const Nav = () => {
  const dispatch = useDispatch();
  const selectedResource = useSelector(state => state.swData.selectedResource);

  const setResource = (resource) => {
    dispatch(changeResourceName(resource));
  }

  return (
    <ul className="nav">
      <li
        onClick={() => setResource('people')}
        className={
          selectedResource === 'people' ?
            'nav__item--selected' :
            'nav__item'
          }
      >
        People
      </li>
      <li
        onClick={() => setResource('films')}
        className={
          selectedResource === 'films' ?
            'nav__item--selected' :
            'nav__item'
        }
      >
        Films
      </li>
      <li
        onClick={() => setResource('planets')}
        className={
          selectedResource === 'planets' ?
            'nav__item--selected' :
            'nav__item'
        }
      >
        Planets
      </li>
      <li
        onClick={() => setResource('species')}
        className={
          selectedResource === 'species' ?
            'nav__item--selected' :
            'nav__item'
        }
      >
        Species
      </li>
      <li
        onClick={() => setResource('starships')}
        className={
          selectedResource === 'starships' ?
            'nav__item--selected' :
            'nav__item'
        }
      >
        Starships
      </li>
      <li
        className={
          selectedResource === 'search' ?
            'nav__item--selected' :
            'nav__item'
        }
      >
        <Link className="nav__item__search" to="/search">Search </Link>
      </li>
    </ul>
  );
};

export default Nav;
