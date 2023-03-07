import { css } from "lit";
export default css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #292929;
    color: #fff;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .col > * {
    margin: 0.5rem 0;
  }
  .row > * {
    margin: 0 1rem;
  }
  .center {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;