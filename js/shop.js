'use strict'

let carrito = []
let cantidad = 0
let totalCompra = 0

const productos = fetch("../../ecomerce_boot_JS/API/productos_shop.json")
    .then( (response) => response.json())
    .then( (data) => generaCards(data.productos))

const generaCards = (productos) => {
    let cardsAMostrar = ``
    productos.forEach(producto => {
        cardsAMostrar += `
        <div class="col">
            <div class="card mx-auto" style="width: 18rem;">
                <div class="subtituloProductos mb-3">
                ${producto.nombre}
                </div>
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                <div class="p-2 border-top border-bottom">
                    <label for="numeroPrecio"><h6>Precio: </h6></label>
                    <label class="precio" for="numeroPrecio">${producto.precio}</label> Pesos. 
                </div>  
                <div class="p-2">
                    <label for="cantidadKilos">Cantidad:</label>
                    <input class="inputKilos" type="number" name="kilos" id="${producto.id}"> Kilos.
                </div>
                <div class="linkCompra border-top">
                    <button onclick="compra(${producto.id})">Comprar</button>
                </div>
                </div>
            </div>    
        </div>
        `
    });
    mostrarCards(cardsAMostrar)
}

const comprobarStock = (stock, cantidad) => {
    if(stock < cantidad) {
        return false 
    }else {
        return true
    }
}

const restaStock = (stock, cantidad) => {
    stock -= cantidad
    return stock
}

const calculeTotalPrecio = (cantidad, precio) => {
     return cantidad * precio
}

let productosEnCarrito = JSON.parse(localStorage.getItem('carrito'))

const compra = (productoID) => {
    const productoElegido = productos.find(producto => productoID == producto.id)

    cantidad = document.getElementById(productoID).value

    let comprueba = comprobarStock(productoElegido.stock, cantidad)

    if(comprueba == true) {
        totalCompra += calculeTotalPrecio(cantidad, productoElegido.precio)
        carrito.push(productoElegido)
        productoElegido.stock = restaStock(productoElegido.stock, cantidad)
        document.getElementById("contador-carrito").innerHTML = carrito.length
        localStorage.setItem('carrito', JSON.stringify(carrito))
        muestraModal()
    } else {
        console.log("No queda mas de este producto")
    }
}

const mostrarCards = (cards) => {
    document.getElementById("cardsAMostrar").innerHTML = cards
}

generaCards(productos)

const busquedaDeProductos = () => {
    const busquedaRealizada = document.getElementById("filtro-producto").value.toUpperCase().trim()
    
    const filtro = productos.filter(producto => {
        return producto.nombre.toUpperCase().trim().match(busquedaRealizada)
    })

    generaCards(filtro)
}

const filtroPorPrecio = () => {
    const filtroPrecio = document.getElementById("filtro-precio").value

    const filtro = productos.filter(producto => {
        return producto.precio >= filtroPrecio
    })

    generaCards(filtro)
}

const muestraModal = () => {
    swal({
        title: "Agrego al carrito",
        text: "Usted se ha agregado su producto al carrito",
        icon: "success",
        button: "Continuar",
    })   
}