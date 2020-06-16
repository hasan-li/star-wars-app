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
            <p className="details__block__label">Average Height</p>
            <p className="details__block__value">{item.average_height}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Average Lifespan</p>
            <p className="details__block__value">{item.average_lifespan}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Classification</p>
            <p className="details__block__value">{item.classification}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Designation</p>
            <p className="details__block__value">{item.designation}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Eye Colors</p>
            <p className="details__block__value">{item.eye_colors}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Hair Colors</p>
            <p className="details__block__value">{item.hair_colors}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Language</p>
            <p className="details__block__value">{item.language}</p>
          </div>
          <div className="details__block">
            <p className="details__block__label">Skin Colors</p>
            <p className="details__block__value">{item.skin_colors}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default People;
