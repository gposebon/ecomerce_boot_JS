'use strict'

const productos = [
    {
        nombre: "Lechuga",
        precio: 80,
        comentarioImagen: "Lechuga",
        imagen: "./img/lechuga.jpg",
        stock: 3
    },
    {
        nombre: "Morron",
        precio: 150,
        comentarioImagen: "Morron",
        imagen: "./img/morron.jpg",
        stock: 3
    },
    {
        nombre: "Acelga",
        precio: 100,
        comentarioImagen: "Acelga",
        imagen: "./img/acelga.jpg",
        stock: 3
    },
    {
        nombre: "Papa",
        precio: 120,
        comentarioImagen: "Papa",
        imagen: "./img/papa.jpg",
        stock: 3
    },
    {
        nombre: "Cebolla",
        precio: 70,
        comentarioImagen: "Cebolla",
        imagen: "./img/cebolla.jpg",
        stock: 3
    },
    {
        nombre: "Calabaza",
        precio: 200,
        comentarioImagen: "Calabaza",
        imagen: "./img/calabaza.jpg",
        stock: 3
    }
]

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

