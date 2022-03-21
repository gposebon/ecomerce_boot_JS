//* LOGIN PAGE */

const usuarios = [
    {
        email: "pepito@gmail.com",
        password: 1234
    },
    {
        email: "roberto@gmail.com",
        password: 1234
    },
    {
        email: "alfredo@gmail.com",
        password: 1234
    }
]

const compruebaLogin = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    usuarios.forEach(usuario =>{
        if(email == usuario.email && password == usuario.password) {
            window.location.href = "../index.html";
        }else {
            document.getElementById("error-login").innerHTML = `<h3>Datos Incorrectos</h3>`
        }
    })
}