import 'skatejs-web-components';
import { Component, h, prop, props, emit } from 'skatejs';
import DATA from './DATA';

class LeftNavItem extends Component {
    static get is() { return 's-left-nav-item' }

    static get props() {
        return {
            item: prop.object({ attribute: false }),
            selected: prop.boolean({ attribute: true }),
        }
    }

    renderCallback() {
        return <li>{this.item.name}</li>
    }
}

customElements.define(LeftNavItem.is, LeftNavItem);

class LeftNav extends Component {
    static get is() { return 's-left-nav' }

    static get props() {
        return {
            selectedIndex: { attribute: true, initial: 0 }
        }
    }

    handleClick(index) {
        // this.setAttribute('selected-index', index);
        emit(this, 'event::left-nav-change', { payload: index });
    }

    renderCallback() {
        return <ul>
            {
                DATA.map((item, index) =>
                    <s-left-nav-item
                        item={item}
                        onclick={this.handleClick.bind(this, index)}>
                    </s-left-nav-item>)
            }
        </ul>
    }
}

customElements.define(LeftNav.is, LeftNav);

