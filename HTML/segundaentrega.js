const productos = [
    {
      nombre: "Raqueta Babolat Pure Aero",
      precio: 94999,
      id: 1,
      
    },
    {
      nombre: "Raqueta babolat pure drive tour",
      precio: 94900,
      id: 2,
    },
    {
      nombre: "Raqueta head boom pro",
      precio: 71900,
      id: 3,
    },
    {
      nombre: "Raqueta Wilson Blade",
      precio: 86000,
      id: 4,
    },
    {
      nombre: "Raqueta Head Speed MP 5",
      precio: 77000,
      id: 5,
    },
    {
      nombre: "Raqueta Pro Staff RF",
      precio: 70000,
      id: 6,
    },
    {
        nombre: "Raqueta Wilson Clash 98 V2",
        precio: 82199,
        id: 7,
      },
      {
        nombre: "Raqueta Yonex Ezone 98",
        precio: 77000,
        id: 8,
      },
  ];

  // const comprar = document.querySelectorAll("#boton");
  
const changuitoDiv = document.querySelector(".carrito")

const containerDiv = document.querySelector(".contenedor");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function armadoCarta(){
  productos.forEach(element=>{
      containerDiv.innerHTML += `<div style="padding: 15px; background-color:green; border: 3px dashed black;">
      <h4>${element.nombre}</h4>
      <p>$${element.precio}</p>
      <button class="btnCarrito" id="boton-agregar${element.id}">Agregar</button>
      </div>`
  })
  funcionBoton();
}

function funcionBoton(){
  productos.forEach(producto=>{
      document.querySelector(`#boton-agregar${producto.id}`).addEventListener("click",()=>{
         agregarCarrito(producto);
      })
  })
}

function agregarCarrito(producto){
 
  let existe = carrito.some(prod=>prod.id === producto.id);
  if(existe===false){
      producto.cantidad = 1;
      carrito.push(producto);
  }
  else{
      let prodFind = carrito.find(prod=> prod.id===producto.id);
      prodFind.cantidad++;
  }
console.log(carrito);
renderizarCarrito();
  }

  function renderizarCarrito(){
    changuitoDiv.innerHTML = "";
    carrito.forEach(prod=>{
        changuitoDiv.innerHTML += `<div style="padding: 20px; background-color:blue; border: 3px dashed black;">
        <h4>${prod.nombre}</h4>
        <h3>CANTIDAD: ${prod.cantidad}</h3>
        <p>$${prod.precio}</p>
        <button class="btnCarrito" id="btn-eliminar${prod.id}">Borrar</button>
        <button class="btnCarrito" id="btn-borrarUnoSolo${prod.id}">-</button>
        </div>`
    })
    localStorage.setItem("carrito",JSON.stringify(carrito))
    eliminarProducto()
}

function eliminarProducto(){
    carrito.forEach(producto=>{
        document.querySelector(`#btn-eliminar${producto.id}`).addEventListener("click",()=>{
            let indice = carrito.findIndex(element=>element.id===producto.id);
            carrito.splice(indice,1);
            renderizarCarrito()
        })
    })
}

renderizarCarrito();
armadoCarta();


    

