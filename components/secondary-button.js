import { css } from 'lit';
import { ButtonElement } from './button-element';

export class SecondaryButton extends ButtonElement  {
  static get properties() {
    return super.properties;
  }
  static get styles() {
    return css`
      ${super.styles}
      button {
        /* blue background */
        background-color: #3b86e9;
      }
      button:hover {
        background-color: #2c6dc0;
      }
    `;
  }

  constructor() {
    super("Secondary Button");
  }
}
customElements.define('secondary-button', SecondaryButton);
