class Example extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // doT is imported in the 'head.vendors.liquid'
    const temp = doT.template(`
      <h2 class="s-index__heading u-mb-s">{{=it.heading}}</h2>
      <p class="s-index__subheading u-mb-l">{{=it.subheading}}</p>
      <a class="s-index__link c-btn c-btn--primary"
        href="https://github.com/younessidbakkasse/shopify-webpack-with-os2-features"
        target="_blank"> Check Github Repo
      </a>`)

    this.innerHTML = temp({
      heading: THEME.sections.index.heading,
      subheading: THEME.sections.index.subheading,
    })
  }
}

customElements.define('c-example', Example)