import { createStore } from 'redux';
import actions from './actions';

const initialState = 0;

function defaultReducer(state = initialState, action) {
	switch (action.type) {
		case actions.increment().type:
			return state + 1;
		default:
			return state;
	}
}

export const store = createStore(
	defaultReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
