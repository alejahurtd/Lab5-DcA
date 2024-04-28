import { Actions, AppState, FavoritesActions, ProductsActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;
	console.log(currentState.favorites);

	switch (action) {
		case ProductsActions.GET:
			return {
				...currentState,
				products: payload,
			};

		case FavoritesActions.GET2:
			return {
				...currentState,
				favorites: [...currentState.favorites, payload],
			};

		default:
			return currentState;
	}
};
