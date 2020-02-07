// A partir de la siguiente lista de productos, 
// hacer una web siguiendo el maquetado de ejemplo. 

// Al escribir en el input el color o el tipo de un producto, 
// se deben filtrar los productos. 
// Funciona tanto apretando enter como haciendo clic en el boton. 



const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];

forms = document.querySelector('form');



forms.onsubmit = e => {
  e.preventDefault();
  console.log("aqui");

  // ----------- muestra el pelaje del gato elegido

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let pelajeElegido = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      pelajeElegido.push(checkboxes[i].value)
    }
  };

     

  const arrayPorPelaje = gatos.filter(gato => gato.pelaje.includes(...pelajeElegido)); // el método .includes da true o false según esté incluido el parámetro indicado entre paréntesis en el array evaluado, en este caso "gatos". pelajeElegido es el array que viene de lo que el usuario selecciona en el formulario. Como es un array, para usarlo como argumentos entre los paréntesis de .includes, se usa SPREAD, que se escribe con tres puntos delante del nombre del array, en este caso pelajeElegido.
  console.log("dentro del filter de pelaje");
  console.log(arrayPorPelaje);

  

  if (!pelajeElegido.length) {
    alert(`Por favor seleccioná una opción`)
  } else if (pelajeElegido.length === 1) {
    console.log(`Elegiste la opción ${pelajeElegido[0]}`)
  } else {
    console.log(`Elegiste las opciones ${pelajeElegido.join(", ")}`)
  }
