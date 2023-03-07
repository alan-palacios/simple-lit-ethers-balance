import {LitElement, html} from 'lit';
import { css } from 'lit';

export class Title extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }
  static styles = [css`
    this {
      background-color: #000;
    }
  `];
  render() {
    return html`
      <h1>${this.title}</h1>
    `;
  }

}

customElements.define('title-element', Title);