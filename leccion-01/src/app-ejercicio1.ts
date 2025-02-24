import { css, html, LitElement } from "lit";
import { customElement, property} from "lit/decorators.js";

@customElement("app-ejercicio1")
export class ejercicio1 extends LitElement {

static styles= css`
  button {
    color:white
  }
  .label-margin {
      margin: 10px
    }
  `;
  
  @property() 
  label: string = '';

  @property({ type: Number }) 
  value: number = 0;

  private increment() {
    this.value++;
  }

  private decrement() {
    this.value--;
  }

  render() {
    return html`

      <div>

        <button @click="${this.decrement}">-</button>
        <span class="label-margin">${this.label} ${this.value}</span>
        <button @click="${this.increment}">+</button>
      </div>
    `;
  }
}