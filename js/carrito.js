
const validarUsuario = () => {
    if(localStorage.getItem('usuario') != null) {
        const nombreUsuario = JSON.parse(localStorage.getItem('usuario'))
        return nombreUsuario
    }else {
        return "Login"
    }
}

let nombre = validarUsuario()
document.getElementById("usuario").innerHTML = " " + nombre


const validarCarrito = () => {
    if(localStorage.getItem('carrito') != null) {
        const storage = JSON.parse(localStorage.getItem('carrito'))
        return storage
    }else {
        return []
    }
}

const productos = validarCarrito()

const generaProductosComprados = (productos) => {
    let productosComprados = ``
    productos.forEach(producto => {
        productosComprados += `
        <tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-md-3 text-left">
                        <img src="${producto.imagen}" alt="" class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                    </div>
                    <div class="col-md-9 text-left mt-sm-2">
                        <h4>${producto.nombre}</h4>
                    </div>
                </div>
            </td>
            <td data-th="Price">${producto.precio}</td>
            <td data-th="Quantity">
                <input type="text" class="form-control form-control-lg text-center" value="${producto.stock}">
            </td>
            <td class="actions" data-th="">
                <div class="text-right">
                    <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="fas fa-sync"></i>
                    </button>
                    <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>        
        `
    });
    mostrarProductos(productosComprados)
}

const mostrarProductos = (productosAMostrar) => {
    document.getElementById("carrito").innerHTML = productosAMostrar
}

generaProductosComprados(productos)

