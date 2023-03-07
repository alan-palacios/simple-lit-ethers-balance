import { css, html, LitElement } from 'lit';

export class InputElement extends LitElement {
  constructor() {
    super();
    this.value = '';
    this.label = 'Input label';
  }
  static get properties() {
    return {
      value: { type: String },
      label: { type: String }
    };
  }
  
  static styles = [css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    label {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    input {
      font-size: 1rem;
      padding: 0.5rem;
      border: 1px solid #000;
      border-radius: 0.5rem;
      font-family: inherit;
      width: 450px;
      text-align: center;
    }
  `];
  
  handleInput(e) {
    console.log(this.value);
    console.log('address: ', e.target.value);
    this.dispatchEvent(new CustomEvent("input-change", { 
      bubbles: true,
      detail: e.target.value
    }));
  }
  
  render() {
    return html`
      <label for="input">${this.label}</label>
      <input type="text" @input=${this.handleInput} .value=${this.value}>
    `;
  }
}
customElements.define('input-element', InputElement);
