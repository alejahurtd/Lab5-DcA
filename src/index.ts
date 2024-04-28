import './components/export';
import './screens/dashboard';
import './screens/ShoppingCart';
import { AppState } from './types/store';
import { appState } from './store/index';
import { addObserver } from './store/index';
import styles from './index.css';
import { Dashboard } from './screens/dashboard';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += `
            <style>${styles}</style>`;
		}
		//renderiza el dashboard
		const dashboard = this.ownerDocument.createElement('app-dashboard') as Dashboard;
		this.shadowRoot?.appendChild(dashboard);
	}
}
customElements.define('app-container', AppContainer);
