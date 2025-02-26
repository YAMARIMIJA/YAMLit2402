import * as testing from "@open-wc/testing";
import { ejercicio04 } from "./ejercicio-04";
import { html } from "lit";

describe("Set de pruebas unitarias del componente ejercicio04", () => {

  it("instancia", async () => {
    let element: ejercicio04;
    element = await testing.fixture(html`<ejercicio-cuat></ejercicio-cuat>`);
    testing.expect(element).to.be.instanceOf(ejercicio04);
  });

  it("Verificar si, si filtra los articulos", async () => {
    let element: ejercicio04;
    element = await testing.fixture(html`<ejercicio-cuat></ejercicio-cuat>`);
    element["_searchTerm"] = "Dragón";
    await element.updateComplete;
    const filteredItems = element["_filtrar"]();
    testing.expect(filteredItems.length).to.equal(1);
    testing.expect(filteredItems[0].title).to.equal("Dragón Chino");
  });

  it("checar si muestra todas las tarjetas cuando no buscas nada", async () => {
    let element: ejercicio04;
    element = await testing.fixture(html`<ejercicio-cuat></ejercicio-cuat>`);
    await element.updateComplete;
    const filteredItems = element["_filtrar"]();
    testing.expect(filteredItems.length).to.equal(9); //checar que esten todos los elementos
  });

  it("checar si la imagen y titulo estan bien", async () => {
      let element: ejercicio04;
      element = await testing.fixture(html`<ejercicio-cuat></ejercicio-cuat>`);
      await element.updateComplete;
      const firstItem = element["_filtrar"]()[0];
      testing.expect(element.shadowRoot?.innerHTML).to.include(firstItem.imageUrl);
      testing.expect(element.shadowRoot?.innerHTML).to.include(firstItem.title);
  });
});