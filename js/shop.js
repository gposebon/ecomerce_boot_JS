'use strict'

// let carrito = []
// let cantidad = 0
// let opcion = 0
// let totalCompra = 0

// const comprobarStock = (stock, cantidad) => {
//     if(stock < cantidad) {
//         return false
//     } else {
//         return true
//     }

// }

// const restaStock = (stock, cantidad) => {
//     stock -= cantidad
//     return stock
// }

// const calculeTotalPrecio = (cantidad, precio) => {
//      return cantidad * precio
// }


// const compra = (productos, productoElegido, cantidad) =>{
//     productos.forEach( producto => {
//         if(producto.id == productoElegido){
            
//             let comprueba = comprobarStock(producto.stock, cantidad)
            
//             if(comprueba == true) {
//                 totalCompra += calculeTotalPrecio(cantidad, producto.precio)
//                 carrito.push(`${producto.nombre} $${producto.precio}`)
//                 producto.stock = restaStock(producto.stock, cantidad)
                
//             }else {
//                 console.log(`No hay mas de este producto`)
//             }
//         }
//     })
// }

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

