//* LOGIN PAGE */

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

nombre = JSON.parse(localStorage.getItem('usuario'))
document.getElementById("usuario").innerHTML = nombre
console.log(nombre)

const compruebaLogin = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    usuarios.forEach(usuario =>{
        if(email == usuario.nombre && password == usuario.password) {
            window.location.href = "../index.html";
        }else {
            document.getElementById("error-login").innerHTML = `<h3>Datos Incorrectos</h3>`
        }

        localStorage.setItem('usuario', JSON.stringify(usuario.nombre))
    })


}