import styles from './Product.css';
import { AttributeItem } from '../ShoppingCartItems/ShoppingCartItems';
import '../ShoppingCartItems/ShoppingCartItems';
import { dispatch } from '../../store/index';
import { SaveShoppingCartItem } from '../../store/actions';

export enum AttributeProduct {
	'uid' = 'uid',
	'image' = 'image',
	'utitle' = 'utitle',
	'description' = 'description',
	'category' = 'category',
	'price' = 'price',
	'rating' = 'rating',
}

export default class Product extends HTMLElement {
	uid?: string;
	image?: string;
	utitle?: string;
	description?: string;
	category?: string;
	price?: string;
	rating?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeProduct, null> = {
			uid: null,
			image: null,
			utitle: null,
			description: null,
			category: null,
			price: null,
			rating: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeProduct, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeProduct.uid:
			default:
				this[propName] = newValue;
				break;
		}
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<section>
			<div class="imgContainer">
			<img class= "img" src='${this.image}'></img>
			</div>

			<div class="infoContent">
			<h1>${this.utitle}</h1>
		<h2>price: $ ${this.price}</h2>
		<h3>rating: ${this.rating}</h3>
		<h3>category: ${this.category}</h3>
		<p>${this.description}</p>
		<button class='button'>Add to Shopping Cart</button>
		</div>

  </section>
`;

			const shoppingButton = this.shadowRoot.querySelector('.button');
			if (shoppingButton) {
				shoppingButton.addEventListener('click', () => {
					dispatch(SaveShoppingCartItem({ utitle: this.utitle, image: this.image, price: this.price }));
				});
			}
		}
		const cssProduct = this.ownerDocument.createElement('style');
		cssProduct.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProduct);
	}
}

customElements.define('my-product', Product);
