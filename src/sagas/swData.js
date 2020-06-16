import { put, select, call, takeLeading } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_PAGINATED,
	SET_PAGINATED,
	SET_NEXT_PAGE,
	SET_COUNT,
	CHANGE_RESOURCE_NAME,
	SET_RESOURCE_NAME,
	FETCH_SINGLE_ITEM,
	SET_SINGLE_ITEM,
} from 'src/const/swData';

import { baseUrl } from 'src/const/api';

function* fetchPaginatedSwData() {
	const { swData: { nextPage, selectedResource } } = yield select();
	
	const url = nextPage === '' ? `${baseUrl}${selectedResource}` : nextPage;
	const { data: { results, count, next } } = yield axios(url);

	yield put({ type: SET_PAGINATED, data: results });
	yield put({ type: SET_NEXT_PAGE, nextPage: next });
	yield put({ type: SET_COUNT, count });
}

function* setResource({ selectedResource }) {
	yield put({ type: SET_RESOURCE_NAME, selectedResource });
	yield call(fetchPaginatedSwData);
}

function* fetchItem({ resource, id }) {
	const url = `${baseUrl}${resource}/${id}`
	const { data } = yield axios(url);
	
	yield put({ type: SET_SINGLE_ITEM, data });
}

export const swDataSagas = [
	takeLeading(FETCH_PAGINATED, fetchPaginatedSwData),
	takeLeading(CHANGE_RESOURCE_NAME, setResource),
	takeLeading(FETCH_SINGLE_ITEM, fetchItem),
];
