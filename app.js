import 'skatejs-web-components';
import { Component, h, prop } from 'skatejs';
import store from './store';

class App extends Component {
  static get is() { return 's-app' }

  constructor() {
    super();
    this.addEventListener('event::left-nav-change', (payload) => {
      console.log('event::left-nav-change');
      this.selectedIndex = payload.index;
    })
  }

  renderCallback() {
    return <div>
      <s-left-nav selected-index={this.selectedIndex}></s-left-nav>
      <s-content selected-index={this.selectedIndex}></s-content>
    </div>
  }
}

customElements.define(App.is, App);