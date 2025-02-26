import * as testing from "@open-wc/testing";
import { Ejercicio2 } from "./app-ejercicio2";
import { html } from "lit";

describe("Set de pruebas unitarias del componente Ejercicio2", () => {

  it("instancia", async () => {
    let element: Ejercicio2;
    element = await testing.fixture(html`<app-ejercicio2></app-ejercicio2>`);
    testing.expect(element).to.be.instanceOf(Ejercicio2);
  });

  it("Validar que el correo este vacio", async () => {
    let element: Ejercicio2;
    element = await testing.fixture(html`<app-ejercicio2></app-ejercicio2>`);
    element.validarCampos();
    testing.expect(element.errorCorreo).to.equal("Debes ingresar tu correo");
  });

  it("checar si el formato de correo electronico esta bien", async () => {
    let element: Ejercicio2;
    element = await testing.fixture(html`<app-ejercicio2></app-ejercicio2>`);
    element.correo = "invalid-email";
    element.validarCampos();
    testing.expect(element.errorCorreo).to.equal("Correo no válido");
  });

  it("validar si la contraseña esta vacia", async () => {
    let element: Ejercicio2;
    element = await testing.fixture(html`<app-ejercicio2></app-ejercicio2>`);
    element.validarCampos();
    testing.expect(element.errorContraseña).to.equal("Debes ingresar tu contraseña");
  });

  it("checar si habilita el boton", async () => {
    let element: Ejercicio2;
    element = await testing.fixture(html`<app-ejercicio2></app-ejercicio2>`);
    element.correo = "test@example.com";
    element.contraseña = "password";
    element.validarCampos();
    testing.expect(element.habilitarBoton).to.be.true;
  });

  it("checar si deshabilita el boton si contra y correo estan vacios", async () => {
    let element: Ejercicio2;
    element = await testing.fixture(html`<app-ejercicio2></app-ejercicio2>`);
    element.correo = "";
    element.contraseña = "";
    element.validarCampos();
    testing.expect(element.habilitarBoton).to.be.false;
  });
});