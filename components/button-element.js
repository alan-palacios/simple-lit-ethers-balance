import { css, html, LitElement } from 'lit';

export class ButtonElement extends LitElement {
  static get properties() {
    return {
      label: { type: String },
    };
  }

  constructor(label) {
    super();
    this.label = label;
  }

  render() {
    return html`
      <button>${this.label}</button>
    `;
  }
  static get styles() {
    return css`
      button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        transition: background-color 0.3s;
        font-size: 1rem;
        font-family: inherit
      }
      button:hover {
        transition: background-color 0.3s;
      }
    `;
  }
}
