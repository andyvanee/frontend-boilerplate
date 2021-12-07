import { html, fixture } from "@open-wc/testing"
import { expect } from "@esm-bundle/chai"

import "../src/component/Main.js"
import { BaseElement } from "../src/BaseElement.js"

it("can create an element with attributes", async () => {
    const main = await fixture(html`<ui-main foo="bar"></ui-main>`)
    expect(main instanceof BaseElement).to.equal(true)
    expect(main.getAttribute("foo")).to.equal("bar")
})

it("can call method on element", async () => {
    const main = await fixture(html`<ui-main></ui-main>`)
    expect(main.sum(1, 1)).to.equal(2)
})
