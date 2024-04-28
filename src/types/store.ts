import { ApiProduct } from './products';
import { ApiFavorites } from './favorites';

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	products: ApiProduct[];
	favorites: ApiFavorites[];
};

export enum ProductsActions {
	'GET' = 'GET',
}

export interface GetProductsAction {
	action: ProductsActions.GET;
	payload: ApiProduct[];
}

export enum FavoritesActions {
	'GET2' = 'GET2',
}

export interface GetFavoritesAction {
	action: FavoritesActions.GET2;
	payload: ApiFavorites;
}

export type Actions = GetFavoritesAction | GetProductsAction;
