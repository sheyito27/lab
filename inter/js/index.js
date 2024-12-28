let usuario="Jab";
const DESCUENTO=0.1;
let precioDescuento;
const PRODUCTOS=[{
    producto:"Pantalón",
    precio:10,
    talla:"m",
    imagen:"pantalon.jpg"
  },{
    producto:"Gorra",
    precio:5,
    talla:"s",
    imagen:"gorra.jpg"
  }
];
/*
PEGAR aquí el CÓDIGO del fichero HTML y adaptarlo a JavaScript
document.querySelector("body").innerHTML...
*/
document.querySelector("body").innerHTML= `<h1>${usuario}</h1>
    <section class="caja">
      <div>
        ${PRODUCTOS[0].producto} (${PRODUCTOS[0].precio} €)
      </div>
      <div>Descuento:  ${calcularDescuento(0)}</div>
      <div>Precio final: ${calcularPrecioFinal(0)}
      </div>
      ${PRODUCTOS[0].talla}
      </div>
      <img src="img/${PRODUCTOS[0].imagen}" alt="PRODUCTO">
    </section> <h1>${usuario}</h1>
    <section class="caja">
      <div>
        ${PRODUCTOS[1].producto} (${PRODUCTOS[1].precio} €)
      </div>
      <div>Descuento:  ${calcularDescuento(1)}
      </div>
      <div>Precio final: ${calcularPrecioFinal(1)}
      </div>
      <div>
        ${PRODUCTOS[1].talla}
      </div>
      <img src="img/${PRODUCTOS[1].imagen}" alt="PRODUCTO">
    </section>`

    function calcularDescuento(productoComprado){
      precioDescuento=PRODUCTOS[productoComprado].precio * DESCUENTO
      return precioDescuento;
    }
    function calcularPrecioFinal(productoComprado){
      let precioFinal = PRODUCTOS[productoComprado].precio - calcularDescuento(productoComprado)
      return precioFinal
    }
