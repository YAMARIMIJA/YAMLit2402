import { css, LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-ejercicio2')
export class Ejercicio2 extends LitElement {
  @property() correo = ''; 
  @property() contraseña = '';
  @property() errorCorreo = '';
  @property() errorContraseña = '';
  @property() habilitarBoton = false;

  static styles = css`
    .error {
      color: red;
    }
    .aceptado {
      color: green;
    }
    .error-borde {
      border: 2px solid red;
    }
    .aceptado-borde {
      border: 2px solid #00ff68;
    }
    .contenedor {
      background-color: rgba(233, 228, 255);
      width: 300px;
      margin: 100px auto; 
      padding: 20px;
      text-align: center;
      border-radius: 10px; 
    }

    .contenedor label,
    .contenedor input,
    .contenedor button {
      display: block;
      margin: 10px auto;
    }

    button {
      background-color:#a3f7af;
      color: black;
      border: none; 
      padding: 10px 10px; 
      border-radius: 5px; 
      font-size: 15px; 
      }
  `;

  validarCampos() {
    if (!this.correo) {
      this.errorCorreo = 'Debes ingresar tu correo';
    } else {
      const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formatoCorreo.test(this.correo)) {
        this.errorCorreo = 'Correo no válido';
      } else {
        this.errorCorreo = '';
      }
    }

    if (!this.contraseña) {
      this.errorContraseña = 'Debes ingresar tu contraseña';
    } else {
      this.errorContraseña = '';
    }

    this.habilitarBoton = 
      !this.errorCorreo &&
      !this.errorContraseña &&
      !!this.correo &&
      !!this.contraseña;
  }

  InputCorreo(evento: { target: { value: string } }) {
    this.correo = evento.target.value;
    this.validarCampos();
  }

  InputContraseña(evento: { target: { value: string } }) {
    this.contraseña = evento.target.value;
    this.validarCampos();
  }

  iniciarSesion() {
    if (this.correo && this.contraseña) {
      document.cookie = `sesion=true; max-age=${60 * 60 * 24 * 7}`;
      window.location.href = '/home.html';
    } else {
      alert('Correo o contraseña incorrectas');
    }
  }

  render() {
    return html`
      <body>
        <form class="contenedor" @submit=${(e: { preventDefault: () => void; }) => { e.preventDefault(); this.iniciarSesion(); }}>
          <h2>Bienvenido.</h2>
          
          <label for="correo">Correo:</label>
          <input
            type="email" 
            id="correo"
            @input=${this.InputCorreo} 
            .value=${this.correo}
            class="${this.errorCorreo ? 'error-borde': this.correo && !this.errorCorreo ? 'aceptado-borde': ''}"
          />
          ${this.errorCorreo ? html`<div class="error">${this.errorCorreo}</div>` : ''}

          <label for="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            @input=${this.InputContraseña} 
            .value=${this.contraseña} 
            class="${this.errorContraseña ? 'error-borde' : this.contraseña && !this.errorContraseña ? 'aceptado-borde' : ''}"
          />
          ${this.errorContraseña ? html`<div class="error">${this.errorContraseña}</div>` : ''}

          <button type="submit" ?disabled=${!this.habilitarBoton}>
            Iniciar sesión
          </button>
        </form>
      </body>
    `;
  }
}