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
            <p className="details__block__label">Climate</p>
            <p className="details__block__value">{item.climate}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Diameter</p>
            <p className="details__block__value">{item.diameter}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Gravity</p>
            <p className="details__block__value">{item.gravity}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Orbital Period</p>
            <p className="details__block__value">{item.orbital_period}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Population</p>
            <p className="details__block__value">{item.population}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Rotation Period</p>
            <p className="details__block__value">{item.rotation_period}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Surface Water</p>
            <p className="details__block__value">{item.surface_water}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Terrain</p>
            <p className="details__block__value">{item.terrain}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default People;
