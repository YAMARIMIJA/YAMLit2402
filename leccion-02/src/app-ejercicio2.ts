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
      background-color: #e9e4ff;
      width: 300px;
      margin: 50px auto;
      padding: 20px;
      text-align: center;
    }
    .contenedor label,
    .contenedor input,
    .contenedor button {
      display: block;
      margin: 10px auto;
    }
  `;

  validarCampos() {
    if (!this.correo) { //checamos si el campo correo esta vacio
      this.errorCorreo = 'Debes ingresar tu correo';
    } else {
      const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular para validar que este bien.
      if (!formatoCorreo.test(this.correo)) {
        this.errorCorreo = 'Correo no válido';
      } else {
        this.errorCorreo = '';
      }
    }

    if (!this.contraseña) {//checamos si el campo contraseña esta vacio
      this.errorContraseña = 'Debes ingresar tu contraseña';
    } else {
      this.errorContraseña = '';
    }

    this.habilitarBoton = 
      !this.errorCorreo &&
      !this.errorContraseña &&//verificamos si no tiene errores
      !!this.correo &&//verificamos i no estan vacios
      !!this.contraseña;
  }

 InputCorreo(evento: { target: { value: string } }) {
    this.correo = evento.target.value;//actualizamos con el correo que ingreso
    this.validarCampos();//checamos si estan bien
  }

  InputContraseña(evento: { target: { value: string } }) {
    this.contraseña = evento.target.value;//actualizamos con la contra
    this.validarCampos();//checamos si estan bien
  }

  render() {
    return html`
      
      <form class="contenedor">
      <h2>Ejercicio 2</h2>
      
        <label for="correo">Correo:</label>
        <input
          type="email" 
          id="correo"
          @input=${this.InputCorreo} //llamamos a nuestra funcion cada que escriban
          .value=${this.correo}
          class="${this.errorCorreo
            ? 'error-borde': this.correo && !this.errorCorreo
            ? 'aceptado-borde': ''}"
        />
        ${this.errorCorreo ? html`<div class="error">${this.errorCorreo}</div>` : ''}

        <label for="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          @input=${this.InputContraseña} //llamamos a nuestra funcion
          .value=${this.contraseña} 
          class="${this.errorContraseña
            ? 'error-borde'
            : this.contraseña && !this.errorContraseña
            ? 'aceptado-borde'
            : ''}"
        />
        ${this.errorContraseña
          ? html`<div class="error">${this.errorContraseña}</div>`
          : ''}

        <button type="submit" ?disabled=${!this.habilitarBoton}>
          Iniciar sesión
        </button>
      </form>
    `;
  }
}