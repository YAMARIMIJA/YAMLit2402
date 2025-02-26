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
      border-radius: 8px; //Bordes
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: sans-serif;
    }

    img {
      max-width: 100%;//ancho
      height: auto; 
      border-radius: 6px; 
      margin-bottom: 10px; 
    }

    .conttext {
      background-color: transparent; 
      width: 90%;
      margin: 0 auto; //Centrar  texto
      padding: 10px 0; //Espacio interno del texto
      text-align: left; 
      color: #333; 
      font-size: 14px; 
    }

    h1 {
      font-size: 1.2em;
      margin-bottom: 5px;
    }
  `;

@state()
private _imageList = [
  {
    imageUrl: "https://confuciomag.com/wp-content/uploads/2018/04/mitos-leyendas-dragon-chino-fauces.jpg",
    title:" Dragón Chino ",
    description: "Los dragones chinos son criaturas benevolentes y poderosas, símbolos de sabiduría, fuerza y buena fortuna. A diferencia de los dragones occidentales, no suelen escupir fuego y se asocian con el agua, controlando ríos, lagos y mares.",
  },
  {
    imageUrl: "https://yokai.com/wordpress/wp-content/uploads/2018/03/kirin.jpg",
    title:"  Kirin ",
    description: "El kirin, también conocido como qilin, es una criatura pacífica que trae consigo la llegada de un sabio o un gobernante justo. Se le describe como una mezcla de ciervo, dragón y caballo, con un pelaje dorado y una sola cornamenta.",
  },

  {
    imageUrl: "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/465653690_8758031134240534_2084833274982572087_n.png?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z0PMMqnGgpoQ7kNvgFEqqbL&_nc_oc=AdhP4pb2FIpVijEb2qfuWX0B-tXnWhDN3DTzfklp4tNB101swWCPY6ZGyyo446CX1oO4g15ikMO-OyDnvppniJoc&_nc_zt=23&_nc_ht=scontent.fmex36-1.fna&_nc_gid=A9eVI761Dt5Zl5W772LT49e&oh=00_AYCJqagC_SIOP-ATU6iYP5NWbtSGR3P_yIvm1u-jsTlgGA&oe=67C2E492",
    title:" Fénix ",
    description: " El fénix chino, o fenghuang, es un ave majestuosa que simboliza la inmortalidad, la gracia y la virtud. Se dice que aparece en tiempos de paz y prosperidad, y que su canto trae armonía al mundo.",
  },

  {
    imageUrl: "https://www.japanhousesp.com.br/sites/japanhouse.com.saopaulo/files/2020-11/Jpn_Haus_-baku%20%281%29.jpg",
    title:" Baku ",
    description: "El baku es una criatura quimérica con cuerpo de oso, cabeza de elefante, ojos de rinoceronte, cola de buey y patas de tigre. Se cree que se alimenta de pesadillas y protege a las personas de los malos espíritus.",
  },

  {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Prince_Hanzoku_terrorised_by_a_nine-_tailed_fox.jpg",
    title:" Kitsune",
    description: "Son zorros mágicos de la mitología japonesa, conocidos por su inteligencia, astucia y habilidades sobrenaturales. Pueden transformarse en humanos, crear ilusiones y controlar el fuego.",
  },

  {
    imageUrl: "https://i.imgur.com/AkOgTg1_d.webp?maxwidth=1520&fidelity=grand",
    title:" Grifo  ",
    description: "Es una criatura híbrida con el cuerpo de un león y la cabeza y alas de un águila. Es un símbolo de fuerza y vigilancia, y se creía que custodiaba tesoros y lugares sagrados. Aunque su origen no es exclusivamente egipcio, los grifos aparecen en el arte del antiguo Egipto, a menudo asociados con la realeza y la protección. ",
  },

  {
    imageUrl: "https://www.worldhistory.org/uploads/images/12848.jpg?v=1712749445-0",
    title:" Ammit  ",
    description: "la devoradora de los muertos, es una criatura aterradora de la mitología egipcia. Tiene la cabeza de un cocodrilo, el torso de un león y las patas traseras de un hipopótamo. Su función era devorar las almas de aquellos cuyos corazones eran considerados impuros en el juicio de Osiris.",
  },

  {
    imageUrl: "https://schole.isep-cba.edu.ar/wp-content/uploads/2023/06/BASILISCO_1-1.jpg",
    title:" Basilisco ",
    description: "Es una criatura legendaria, a menudo descrita como una serpiente o reptil coronado, con la capacidad de matar con su mirada venenosa. Se le atribuye un aliento tóxico y la capacidad de convertir en piedra a sus víctimas. Su origen se remonta a la mitología griega, pero también aparece en leyendas medievales.",
  },

  {
    imageUrl: "data:image/jpeg;base64,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",
    title:" Quetzalcóatl ",
    description: "La serpiente emplumada, es una de las deidades más importantes de la mitología mesoamericana, especialmente en la cultura azteca. Se le representa como una serpiente emplumada, símbolo de sabiduría, conocimiento y el viento. Se le asocia con la creación, la fertilidad y el renacimiento. ",
  },
];

@state()
  private _searchTerm = "";

  private _filtrar() {
    if (!this._searchTerm) {
      return this._imageList;
    }
    const term = this._searchTerm.toLowerCase();
    return this._imageList.filter(
      (item) =>
        item.title.toLowerCase().includes(term));
  }

  render() {
    const filteredItems = this._filtrar();
    return html`
      <label>
        Buscar:
        <input
          .value=${this._searchTerm}
          @input=${this._onSearch}
          placeholder=""/>
      </label>

      <ul>
        ${map(
          filteredItems,
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

  private _onSearch(e: Event) {
    this._searchTerm = (e.target as HTMLInputElement).value;
  }
}