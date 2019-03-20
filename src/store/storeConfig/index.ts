import { rootReducer } from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";
import { loadState, saveState } from "./localStorageHandler";
import { throttle } from "lodash";

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const persistedState = loadState();
const store = createStore(
	rootReducer,
	// persistedState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// store.subscribe(
// 	throttle(
// 		() => {
// 			saveState({
// 				          authentication: {store.getState().authentication.},
// 			          });
// 		},
// 		1000,
// 	),
// );

sagaMiddleware.run(rootSaga);

export { store };
