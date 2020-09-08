import { LitElement, html, css } from 'lit-element';
import './child-component';

class ParentComponent extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            childMessage: { type: String }
        }
    }

    render() {
        return html `
        <div class="container">
            <h1>Parent Component</h1>
            <slot class="slot-title"></slot>
            <child-component message="${this.childMessage}" @change-background-color="${this.changeBackgroundColor}" ></child-component>
        </div>
        `;
    }

    static get styles() {
        return css `
            :host{
                display:block;
                width:100%;                
                text-align:center;
                
            }

            .container{
                background-color:green;
                padding-bottom:0.5rem;
            }

            .slot-title{
                color:white;
            }

        `;
    }

    changeBackgroundColor(e) {
        this.shadowRoot.querySelector('.container').style.backgroundColor = e.detail.el.color;
    }
}

customElements.define('parent-component', ParentComponent);