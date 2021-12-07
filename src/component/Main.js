import { BaseElement, html, css } from "../BaseElement.js"

class Main extends BaseElement {
    static get properties() {
        return {}
    }

    static get styles() {
        return css`
            :host {
                display: block;
                margin: 2rem;
            }
        `
    }

    sum(a, b) {
        return a + b
    }

    render() {
        return html`<p>Hello world!</p>`
    }
}

customElements.define("ui-main", Main)
