'use strict'

const productos = fetch("../../ecomerce_boot_JS/API/productos.json")
    .then( (response) => response.json())
    .then( (data) => generaCards(data.productos))

const generaCards = (productos) => {
    let cardsAMostrar = ``
    productos.forEach(producto => {
        cardsAMostrar += `
        <div class="col">
            <div class="card mx-auto" style="width: 18rem;">
                <div class="mb-3 subtituloProductos">
                    ${producto.nombre}
                </div>
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.comentarioImagen}">
                <div class="card-body">
                    <div class="p-2 border-top border-bottom">
                        <label for="numeroPrecio"><h6>Precio: </h6></label>
                        <label class="precio" for="numeroPrecio">${producto.precio} </label> Pesos. 
                    </div>  
                    <div class="linkCompra border-top">
                        <a class="nav-link" href="./html/shop.html">Ir a compras</a>
                    </div>
                </div>
            </div>    
        </div>
        `
    });
    mostrarCards(cardsAMostrar)
}

const mostrarCards = (cards) => {
    document.getElementById("cardsAMostrar").innerHTML = cards
}

generaCards(productos)

