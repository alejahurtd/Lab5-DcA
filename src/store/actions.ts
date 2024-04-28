import { getProducts } from '../services/getProducts';
import { GetFavoritesAction, GetProductsAction, ProductsActions, FavoritesActions } from '../types/store';
import { Observer, AppState, Actions } from '../types/store';

export const GetProducts = async (): Promise<GetProductsAction> => {
	const dataProducts = await getProducts();
	return {
		action: ProductsActions.GET,
		payload: dataProducts,
	};
};

export const GetShoppingCartItems = (payload: any) => {
	return {
		action: 'GetProductsFavorite',
		payload: payload,
	};
};

export const SaveShoppingCartItem = (payload: any) => {
	return {
		action: FavoritesActions.GET2,
		payload,
	};
};
