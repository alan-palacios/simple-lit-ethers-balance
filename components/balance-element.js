import { css, html, LitElement, nothing } from 'lit';
import globalcss from '../globalcss';

export class BalanceElement extends LitElement {
  constructor() {
    super();
    this.addressBalance = {
      address: '0x',
      balance: undefined,
      network: 'avalanche'
    };
  }
  static get properties() {
    return {
      addressBalance: { type: Object },
    };
  }
  static get styles() {
    return [globalcss, css`
      .row > * {
        margin: 0 0.3rem;
      }
    `];
  }
  render() {
    return html`
      <div class='col'>
        <span>${this.addressBalance.address}</span>
        <div class='row center'>
          <img src=${
            this.addressBalance.network === 'avalanche' ?
            'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024' :
            'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024'
          } width='30px' height='30px' />
          <span>${this.addressBalance.balance}</span>
        </div>
      </div>
    `;
  }
}
customElements.define('balance-element', BalanceElement);

