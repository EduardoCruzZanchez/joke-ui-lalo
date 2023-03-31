import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './JokesUi-styles.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text'
import {BbvaCoreIntlMixin} from '@bbva-web-components/bbva-core-intl-mixin'


/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<jokes-ui></jokes-ui>
```

##styling-doc

@customElement jokes-ui
*/
export class JokesUi extends BbvaCoreIntlMixin(LitElement) {
  static get is() {
    return 'jokes-ui';
  }

  // Declare properties
  static get properties() {
    return {
      jokes: { type: Array },
      //add flag to demo case
      "hide-title": {type: Boolean},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.jokes = [];
    //add new demo case hide title
    this["hide-title"] = false;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('jokes-ui-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="container">
      ${!this["hide-title"]
          ? html`<h1>${this.t('joker-ui-container-title')}</h1>`
          : html``
        }
      ${this.jokes.map((joke) => {
          return html`
            <p class="joke-text">${joke}</p>
          `;
        })}
    </div>
    `;
  }
}
