import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import reducers from 'src/reducers';
import App from 'src/App';
import rootSaga from 'src/sagas';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
	swData: undefined,
};

const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? 
	window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ }) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(
	reducers,
	defaultState,
	enhancer,
);

sagaMiddleware.run(rootSaga);

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
