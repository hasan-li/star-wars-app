import { all } from 'redux-saga/effects';

import { swDataSagas } from 'src/sagas/swData';
import { searchSagas } from 'src/sagas/search';

export default function* rootSaga() {
	yield all([
		...swDataSagas,
		...searchSagas,
	]);
}