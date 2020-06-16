import { combineReducers } from 'redux';

import { REDUCER_KEY as SW_REDUCER_KEY } from 'src/const/swData';

import swDataReducer from './swData';

const reducers = combineReducers({
	[SW_REDUCER_KEY]: swDataReducer,
});

export default reducers;