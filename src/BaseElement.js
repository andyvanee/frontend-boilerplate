import { LitElement, html, css } from "lit"

export { LitElement, html, css }

/**
 * Global element extensions
 */
export const $Global = el => {
    return class extends el {}
}

export const $Event = el => {
    return class extends el {
        /** @type {HTMLElement} */
        get root() {
            return this.renderRoot || this
        }

        /**
         * Alias for addEventListener
         * @param {string} type event type
         * @param {EventListener | EventListenerObject} handler
         * @param {boolean | EventListenerOptions} options
         */
        on(type, handler, options = {}) {
            this.root.addEventListener(type, handler, options)
        }

        /**
         * Alias for removeEventListener
         * @param {string} type event type
         * @param {EventListener | EventListenerObject} handler
         * @param {boolean | EventListenerOptions} options
         */
        off(type, handler, options = {}) {
            this.root.removeEventListener(type, handler, options)
        }

        /**
         * Alias for addEventListener once=true
         * @param {string} type event type
         * @param {EventListener | EventListenerObject} handler
         * @param {boolean | EventListenerOptions} options
         */
        once(type, handler, options = {}) {
            const opts = Object.assign({}, options, { once: true })
            this.root.addEventListener(type, handler, opts)
        }

        /**
         * Shorthand for this.root.dispatchEvent
         * @param {String} name Event name
         * @param {any} detail Event detail
         * @param {Boolean?} bubbles Optional event bubbles
         * @param {Boolean?} composed Optional event is composed
         */
        trigger(name, detail, bubbles = true, composed = true) {
            const ev = new CustomEvent(name, { detail, bubbles, composed })
            this.root.dispatchEvent(ev)
        }
    }
}

export const $BaseElement = el => $Event($Global(el))

export class BaseElement extends $BaseElement(LitElement) {}

export class LightElement extends BaseElement {
    createRenderRoot() {
        return this
    }
}
