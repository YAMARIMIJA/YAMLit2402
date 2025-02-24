import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement{
static styles= css`

p {
  color: blue;
  font-weight: bold;
}
`;

@property()
name="Arias";

  render(){
    return html `<p>HOLA MUNDO</p>`;
  }
}
