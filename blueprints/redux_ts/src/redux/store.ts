/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
import { createStore } from 'redux';
import actions from './actions';

const initialState = 0;

function defaultReducer(state = initialState, action: { type: string; payload?: any }) {
	switch (action.type) {
		case actions.increment().type:
			return state + 1;
		default:
			return state;
	}
}

export const store = createStore(
	defaultReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
