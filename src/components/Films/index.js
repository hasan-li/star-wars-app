import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchSingleItem,
  clearSingleItem,
} from 'src/actions';

import 'src/components/People/style.scss';

const Films = ({ match: { params: { id, resource } } }) => {
  const [loading, setLoading] = useState(true);
  const item = useSelector(state => state.swData.singleItem);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!item) {
      dispatch(fetchSingleItem(resource, id));
    } else {
      setLoading(false);
    }
  }, [item]);
  return (
    <>
      <Link to="/" onClick={() => dispatch(clearSingleItem())}>Home</Link>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="details">
        <div className="details__block">
          <p className="details__block__label">Title</p>
          <p className="details__block__value">{item.title}</p>
        </div>
        <div className="details__block">
          <p className="details__block__label">Director</p>
          <p className="details__block__value">{item.director}</p>
        </div>
        <div className="details__block">
          <p className="details__block__label">Episode #</p>
          <p className="details__block__value">{item.episode_id}</p>
        </div>
        <div className="details__block">
          <p className="details__block__label">Opening Crawl</p>
          <p className="details__block__value">{item.opening_crawl}</p>
        </div>
        <div className="details__block">
          <p className="details__block__label">Producer</p>
          <p className="details__block__value">{item.producer}</p>
        </div>
        <div className="details__block">
          <p className="details__block__label">Release Date</p>
          <p className="details__block__value">{item.release_date}</p>
        </div>
      </div>
      )}
    </>
  );
};

export default Films;
