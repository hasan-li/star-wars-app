import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchSingleItem,
  clearSingleItem,
} from 'src/actions';

import 'src/components/People/style.scss';

const Starships = ({ match: { params: { id, resource } } }) => {
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
            <p className="details__block__label">MGLT</p>
            <p className="details__block__value">{item.MGLT}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Cargo Capacity</p>
            <p className="details__block__value">{item.cargo_capacity}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Consumables</p>
            <p className="details__block__value">{item.consumables}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Cost in credits</p>
            <p className="details__block__value">{item.cost_in_credits}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Crew</p>
            <p className="details__block__value">{item.crew}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Hyperdrive rating</p>
            <p className="details__block__value">{item.hyperdrive_rating}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Length</p>
            <p className="details__block__value">{item.length}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Manufacturer</p>
            <p className="details__block__value">{item.manufacturer}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Max Atmosphering Speed</p>
            <p className="details__block__value">{item.max_atmosphering_speed}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Model</p>
            <p className="details__block__value">{item.model}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Passengers</p>
            <p className="details__block__value">{item.passengers}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Starship Class</p>
            <p className="details__block__value">{item.starship_class}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Starships;
