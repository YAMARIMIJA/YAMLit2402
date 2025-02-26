import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

@customElement("ejercicio-cuat")
export class ejercicio04 extends LitElement {
  static styles = css`
    .contenedor {
      background-color: #f8f8f8;
      width: 300px;
      margin: 20px auto;
      padding: 15px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
      margin-bottom: 10px;
    }

    .conttext {
      background-color: transparent;
      width: 90%;
      margin: 0 auto;
      padding: 10px 0;
      text-align: left;
      color: #333;
      font-size: 14px;
    }

    h1 {
      margin-bottom: 5px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 40px;
      background-color: rgba(31, 28, 83, 0.8);
      text-align:center;
      color:white;
    }

    button {
      background-color: #36cae4; 
      color: black;
      border: none; 
      padding: 10px 20px; 
      border-radius: 5px; 
      cursor: pointer; 
      font-size: 16px; 
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #2bc0a7;
    }
  `;

  @state()
  private _imageList = [
    {
        imageUrl: "https://yokai.com/wordpress/wp-content/uploads/2018/03/kirin.jpg",
        title:"  Kirin ",
        description: "El kirin, también conocido como qilin, es una criatura pacífica que trae consigo la llegada de un sabio o un gobernante justo. Se le describe como una mezcla de ciervo, dragón y caballo, con un pelaje dorado y una sola cornamenta.",
      }
  ];

  constructor() {
    super();
    this.verificarSesion();
  }

  verificarSesion() {
    if (!document.cookie.includes("sesion=true")) {
      window.location.href = "/login.html";
    }
  }

  cerrarSesion() {
    document.cookie = "sesion=; max-age=0"; //Elimina la cookie
    window.location.href = "/login.html";
  }

  render() {
    return html`
      <header>
        <h1>ANIMALES MITOLOGICOS</h1>
        <button @click=${this.cerrarSesion}>Cerrar Sesión</button>
      </header>

      <ul>
        ${map(
          this._imageList,
          (item) => html`
            <li>
              <div class="contenedor">
                <img src="${item.imageUrl}" alt="${item.description}" />
                <div class="conttext">
                  <h1>${item.title}</h1>
                  <p>${item.description}</p>
                </div>
              </div>
            </li>
          `
        )}
      </ul>
    `;
  }
}