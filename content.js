import 'skatejs-web-components';
import { Component, h, prop, } from 'skatejs';

class Content extends Component {
  static get is() { return 's-content' }

  static get props() {
    return {
      selectedIndex: { attribute: true, initial: 0 }
    }
  }

  constructor() {
    super();
  }

  renderCallback() {
    return <div>
      Content
    </div>
  }
}

customElements.define(Content.is, Content);