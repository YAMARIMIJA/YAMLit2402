import * as testing from "@open-wc/testing";
import { ejercicio1 } from "./app-ejercicio1";
import { html } from "lit";

describe("Set de pruebas unitarias del componente Ejercicio1", () => {
  it("instancia", async () => {
    let element: ejercicio1;
    element = await testing.fixture(html`<app-ejercicio1></app-ejercicio1>`);
    testing.expect(element).to.be.instanceOf(ejercicio1);
  });

  it("incrementar el valor", async () => {
    let element: ejercicio1;
    element = await testing.fixture(html`<app-ejercicio1></app-ejercicio1>`);
    element["increment"](); // Llama al método privado increment
    testing.expect(element.value).to.equal(1);
  });

  it("disminuir el valor", async () => {
    let element: ejercicio1;
    element = await testing.fixture(html`<app-ejercicio1></app-ejercicio1>`);
    element["decrement"](); // Llama al método privado decrement
    testing.expect(element.value).to.equal(-1);
  });

  it("checar el valor inicial", async () => {
    let element: ejercicio1;
    element = await testing.fixture(html`<app-ejercicio1 label="Contador"></app-ejercicio1>`);
    testing.expect(element.shadowRoot?.textContent).to.include("Contador 0");
  });

  it("checar si el valor se actualiza", async () => {
    let element: ejercicio1;
    element = await testing.fixture(html`<app-ejercicio1 label="Contador"></app-ejercicio1>`);
    element.value = 5;
    await element.updateComplete;
    testing.expect(element.shadowRoot?.textContent).to.include("Contador 5");
  });
});