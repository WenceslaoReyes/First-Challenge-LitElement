import { LitElement, html, css } from 'lit-element';

class ChildComponent extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            message: { type: String },
            color: { type: String }
        }
    }

    render() {
        return html `
            <h1>CHILD COMPONENT</h1>
            <p>${this.message}</p>
            <input class="message-input" type="text" .value="${this.message}" @input="${this.changeMessage}">
            <div class="btn-wrapper">
                <button class="btn btn-red" data-color="red" @click="${this.changeColor}">Red</button>
                <button class="btn btn-blue" data-color="blue" @click="${this.changeColor}">blue</button>
                <button class="btn btn-green" data-color="green" @click="${this.changeColor}">Green</button>
            </div>
        
            `;
    }

    static get styles() {
        return css `
        :host{
            text-align:center;
            background-color:#59ce5b;
            display:block;
            margin:1rem;
            padding-bottom:1px;
        }

        h1{
            text-transform:uppercase;
        }

        .message-input{
            width:90%;
            margin:auto;
            border:none;
            outline-color:#6f9fc3;
            height:1.5rem;
            text-align:center;
        }

        .btn-wrapper{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }

        .btn{
            color:white;
            outline-color:#6f9fc3;
            border:none;
            font-size:1.5rem;
            min-width:150px;
            padding:0.5rem;
            margin: 0.5rem 0;
        }

        .btn-red{
            background-color:red;
        }

        .btn-blue{
            background-color:blue;
        }

        .btn-green{
            background-color:green;
        }

        `;
    }

    changeMessage(e) {
        this.message = e.target.value;
    }

    changeColor(e) {
        this.color = e.target.dataset.color;
        this.dispatchEvent(new CustomEvent('change-background-color', {
            detail: {
                bubbles: true,
                el: this
            }
        }));
    }
}

customElements.define('child-component', ChildComponent);