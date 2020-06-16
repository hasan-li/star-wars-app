import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchSingleItem,
  clearSingleItem,
} from 'src/actions';

import 'src/components/People/style.scss';

const People = ({ match: { params: { id, resource } } }) => {
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
            <p className="details__block__label">Name</p>
            <p className="details__block__value">{item.name}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Birth Year</p>
            <p className="details__block__value">{item.birth_year}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Gender</p>
            <p className="details__block__value">{item.gender}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Hair Color</p>
            <p className="details__block__value">{item.hair_color}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Height</p>
            <p className="details__block__value">{item.height}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Mass</p>
            <p className="details__block__value">{item.mass}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Skin Color</p>
            <p className="details__block__value">{item.mass}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default People;
