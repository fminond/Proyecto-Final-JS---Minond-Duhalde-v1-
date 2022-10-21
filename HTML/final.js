//Constantes declaradas//
const changuitoDiv = document.querySelector(".carrito")
const containerDiv = document.querySelector(".contenedor");
const modalContainer = document.getElementById("modal-container");
const total = document.getElementById("total-carrito")
const cantidadCarrito = document.getElementById("cantidad-carrito")
const cardContainer = document.querySelector(".card-container");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Creacion de cartas pintadas en el DOM//

function armadoCarta() {
  fetch("data.json")
    .then((response) => response.json())
    .then((datos) => {
      datos.forEach(producto => {
        containerDiv.innerHTML += `<div class="card p-3" style="width: 18rem;">
                        <img src= "${producto.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="">${producto.nombre}</h5>
                            <p class="">$${producto.precio}</p>
                            <a class="btn btn-primary" id="boton-agregar${producto.id}">Comprar</a>
                        </div>`

      })

      funcionBoton();
    }
    )
}

//Le doy funcionalidad al boton de comprar//
function funcionBoton() {
  fetch("data.json")
    .then((response) => response.json())
    .then((datos) => {
      datos.forEach(prod => {
        document.querySelector(`#boton-agregar${prod.id}`).addEventListener("click", () => {
          agregarCarrito(prod);


        })
      })
    }
    )
}

//Lo agregamos al carrito de compras//
function agregarCarrito(prod) {

  let existe = carrito.some(produ => produ.id === prod.id);
  if (existe === false) {
    prod.cantidad = 1;
    carrito.push(prod);
  }
  else {
    let prodFind = carrito.find(produ => produ.id === prod.id);
    prodFind.cantidad++;
  }
  console.log(carrito);
  renderizarCarrito();

}

//Pintamos el carrito//
function renderizarCarrito() {

  changuitoDiv.innerHTML = "";
  carrito.forEach(prod => {
    changuitoDiv.innerHTML += `
    <div class="modal-header">
    <h1 class= "modal-header-title">Carrito</h1>
    
    </div>
        <div>
      <h4>${prod.nombre}</h4>
      <img src = "${prod.image}" style="width: 6rem"></img> 
      <h2>Cantidad: ${prod.cantidad}</h2> 
      <div class="col">
      <button class="carrito btn btn-info" id="btn-borrarUno${prod.id}">-</button>
      <button class="carrito btn btn-danger" id="btn-sumarUno${prod.id}">+</button>
      </div>
      <p>Precio $${prod.precio * prod.cantidad}</p>
      <button class="btnCarrito" id="btn-eliminar${prod.id}">Borrar</button>
      </div>
      
      `

  })

  localStorage.setItem("carrito", JSON.stringify(carrito))
  eliminarProductos()
  totalCarrito();
  borrarUno();
  sumarUno();

}
//Funcion para eliminar el total del producto seleccionado//
function eliminarProductos() {
  carrito.forEach(producto => {
    document.querySelector(`#btn-eliminar${producto.id}`).addEventListener("click", () => {
      let indice = carrito.findIndex(element => element.id === producto.id);
      Swal.fire({
        title: "¿Estas seguro que deseas eliminar este producto?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Si',

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Listo, lo eliminamos", "", "success")
          carrito.splice(indice, 1);
        } else if (result.isDenied) {
          Swal.fire('Podes seguir comprando', '', 'info')
        }
      })
      renderizarCarrito()
    })
  })
}
//Le damos funcionalidad al - para borrar un solo producto a la vez//

function borrarUno() {

  carrito.forEach(e => {
    document.querySelector(`#btn-borrarUno${e.id}`).addEventListener("click", () => {

      let revision = carrito.some(element => element.id === e.id);
      let indiceRaqueta = carrito.indexOf(e);
      if (revision === true) {
        if ((carrito[indiceRaqueta].cantidad) > 0) {

          carrito[indiceRaqueta].cantidad--;
        }

        console.log(carrito[indiceRaqueta].cantidad);
        renderizarCarrito();

      }


    })
  })

}


//Le damos funcionalidad al + para sumar un solo producto a la vez//

function sumarUno() {

  carrito.forEach(e => {
    document.querySelector(`#btn-sumarUno${e.id}`).addEventListener("click", () => {

      let revision = carrito.some(element => element.id === e.id);
      let indiceRaqueta = carrito.indexOf(e);
      if (revision === true) {

        carrito[indiceRaqueta].cantidad++;

        renderizarCarrito();


      }

    })
  })

}
//Agregamos el total de los productos//
function totalCarrito() {
  let totalCarrito = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  total.innerHTML = `<div>
    <h5>Total a pagar: $${totalCarrito}</h5> 
    </div> 
    `;

  localStorage.setItem('totalCarrito', JSON.stringify(totalCarrito));
}


//Le doy funcionalidad a vaciar carrito//



//Proceso para finalizar la compra//

function finalizarCompra() {
  carrito.forEach(raquetas => {
    document.querySelector("#btn-finalizar-compra").addEventListener("click", async () => {


      const { value: email } = await Swal.fire({
        title: 'Por favor, ingresa tu correo electrónico para finalizar la compra',
        input: 'email',
        inputLabel: '¡Recibirás mayor información para futuras compras!',
        inputPlaceholder: 'nombre@gmail.com',
      })

      if (email) {
        Swal.fire(`Verificá tu correo electrónico: ${email}`);
        let index = carrito.findIndex(e => e.id === raquetas.id);
        carrito.splice(index.cantidad, 1);
        renderizarCarrito();

      }

    })

  })

}

renderizarCarrito();
armadoCarta();
finalizarCompra();




