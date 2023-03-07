import { css, html, LitElement, nothing } from 'lit';
import "./components/index.js"
import globalcss from './globalcss.js';
import getBalance from './utils/getBalance.js';

export class Index extends LitElement {
  static styles = [globalcss, css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .logo-btn {
      cursor: pointer;
      transition: filter 0.2s ease-in-out;
    }
    .logo-btn:hover {
      filter: drop-shadow(0 0 0.75rem #fff);
      transition: filter 0.2s ease-in-out;
    }
  `];
  
  static get properties() {
    return {
      address: { type: String },
      network: { type: String },
      balance: { type: Number },
      loading: { type: Boolean }
    };
  }
  
  constructor() {
    super();
    this.address = '';
    this.network = 'avalanche';
    this.balance = undefined;
    this.loading = false;
  }
  
  async getBalance(){
    this.loading=true;
    const balance = await getBalance(this.address, this.network);
    this.balance=balance;
    this.loading=false;
  }
  
  async switchNetwork() {
    this.network = this.network === 'avalanche' ? 'ethereum' : 'avalanche';
    this.getBalance();
  }
  
  clearAddress() {
    this.address = '';
    this.balance = undefined;
  }

  render() {
    return html`
      <div class='container col'>
        <img class='logo-btn'
          src=${
            this.network==='avalanche' ?'https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=024':
            'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024'
          }
          width='100px' height='100px'
          @click=${this.switchNetwork}
        >
        <title-element
          title=${`Get ${this.network=='avalanche' ? 'AVAX' : 'ETH'} Balance of Address`}>
        </title-element>
        ${this.loading ? html`
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round" stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        ` : nothing}
        ${(this.balance !== undefined && !this.loading )?
          html`
            <balance-element 
              addressBalance=${JSON.stringify({
                address: this.address, balance: this.balance, network: this.network
              })}
            ></balance-element>
          `:nothing
        }
        <input-element
          label='Address'
          value=${this.address}
          @input-change=${e => this.address = e.detail}
        ></input-element>
        <div class='row'>
          <secondary-button
            label='Clear'
            @click=${this.clearAddress}
          >
          </secondary-button>
          <primary-button
            label='Send'
            @click=${this.getBalance}
          ></primary-button>
        </div>
      </div>
    `;
  }
}
customElements.define('index-element', Index);
