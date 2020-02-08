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
  {
    nombre: 'Bota azul',
    tipo: 'bota',
    color: 'azul',
    img: './img/bota-azul.jpg'
  },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];

const tarjetas = document.querySelector(".containerZapatos");

 tarjetas.innerHTML = '';

 let tarjetasZapatos = '';


 const zapatosMostrados = productos.forEach(producto => {

    tarjetasZapatos += `
     <article class="tarjeta">
       <div class="imagen"> 
        <img src="${producto.img}"> 
        </div>
       <div class="texto"> 
        <h4>${producto.nombre}</h4>
       </div>
     </article>`
  });
  
tarjetas.innerHTML = tarjetasZapatos;

forms = document.querySelector('form');

forms.onsubmit = e => {
  e.preventDefault();
  console.log("aqui");

  const texto = document.querySelectorAll("input[type='text']");
  
  let colorElegido = [];

for (let i = 0; i < texto.length; i++) {
    if (texto == productos.color) {
      colorElegido.push(texto)
    }
  };
}

 const calzadoPorColor = productos.filter(productos => productos.color.includes(...colorElegido)); 

  console.log("dentro del filter de color");
  console.log(calzadoPorColor);


//   // ----------- filtra por color de calzado

//   const texto = document.querySelectorAll("input[type='text']");

//   let colorElegido = [];

//   const arrayPorColor = productos.filter(zapato => productos.color.includes(...colorElegido));
//   console.log("dentro del filter de zapatos");
//   console.log(arrayPorColor);



//   if (!pelajeElegido.length) {
//     alert(`Por favor seleccioná una opción`)
//   }
//   else if (pelajeElegido.length === 1) {
//     console.log(`Elegiste la opción ${pelajeElegido[0]}`)
//   }
//   else {
//     console.log(`Elegiste las opciones ${pelajeElegido.join(", ")}`)
//   }
// }
