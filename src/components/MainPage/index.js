import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPaginatedData } from 'src/actions';

import Nav from 'src/components/Nav';

import 'src/components/MainPage/style.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const swData = useSelector(state => state.swData.data);
  const nextPage = useSelector(state => state.swData.nextPage);
  const selectedResource = useSelector(state => state.swData.selectedResource);

  useEffect(() => {
    if (nextPage === '') {
      dispatch(fetchPaginatedData());
    }
  }, []);

  const getId = (url) => url.match(/\d/g).join("");

  return (
    <div className="main">
      <Nav />
      {swData.length !== 0 &&
        swData.map(item => {
          const id = getId(item.url);
          return (
            <Link
              to={{ pathname: `${selectedResource}/${selectedResource}/${id}`, item, id, }}
              key={item.name || item.title}
              className="main__item"
            >
              <p key={item.name || item.title} className="main__item__name">
                {item.name || item.title}
              </p>
						</Link>
        );
      })}

      {nextPage &&
        <button
          type="button"
          onClick={() => dispatch(fetchPaginatedData())}
          className="main__btn--neutral"
        >
          Load More
        </button>
      }
    </div>
  );
};

export default MainPage;
