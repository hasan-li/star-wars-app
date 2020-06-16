import { put, select, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';

import {
  SEARCH,
  SET_SEARCH_RESULTS,
} from 'src/const/swData';

import { baseUrl } from 'src/const/api';


function* search({ value }) {
	const { swData: { selectedResource } } = yield select();
	const url = `${baseUrl}${selectedResource}/?search=${value}`
	const { data: { results } } = yield axios(url);
  
	yield put({ type: SET_SEARCH_RESULTS, results });
}

export const searchSagas = [
	takeLeading(SEARCH, search),
];
