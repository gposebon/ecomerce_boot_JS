//* LOGIN PAGE */

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

const usuarios = [
    {
        nombre: "pepito",
        password: 1234
    },
    {
        nombre: "roberto",
        password: 1234
    },
    {
        nombre: "alfredo",
        password: 1234
    }
]


const renderLogin = 
`<div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
            <div id="error-login"></div>
            <h3 class="mb-5">Login</h3>

            <div class="form-outline mb-4">
                <input type="text" class="form-control form-control-lg" id="nombre"/>
                <label class="form-label" for="email">Email</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" class="form-control form-control-lg" id="password"/>
                <label class="form-label" for="password">Password</label>
            </div>

            <div class="form-check d-flex justify-content-start mb-4">
                <label class="form-check-label" for="registrarse"> Registrarse </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit" onclick="compruebaLogin()">Login</button>
            </div>
        </div>
    </div>
</div>
`
document.getElementById("login").innerHTML = renderLogin

const compruebaLogin = () => {

    let nombreUsuario = document.getElementById("nombre").value

    const logueo = usuarios.find( usuario => nombreUsuario == usuario.nombre)
    

    usuarios.forEach(usuario => {
        if(logueo.nombre == usuario.nombre && logueo.password == usuario.password) {
            console.log(logueo)
        }else {
            document.getElementById("error-login").innerHTML = `<h3>Datos Incorrectos</h3>`
        }
    })
    
    localStorage.setItem('usuario', JSON.stringify(logueo.nombre))
}
