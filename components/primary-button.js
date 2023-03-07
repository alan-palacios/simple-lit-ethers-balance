import { css } from 'lit';
import { ButtonElement } from './button-element';

class PrimaryButton extends ButtonElement  {
  static get properties() {
    return super.properties;
  }
  static get styles() {
    return css`
      ${super.styles}
      button {
        background-color: #4CAF50; /* Green */
      }
      button:hover {
        background-color: #3e8e41;
      }
    `;
  }

  constructor() {
    super("Primary Button");
  }
}
customElements.define('primary-button', PrimaryButton);
