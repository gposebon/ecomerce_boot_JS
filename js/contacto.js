

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  body: JSON.stringify({
    nombre: 'Guillermo',
    email: 'gp@gmail.com',
    telefono: 34611111,
    comentario: 'Que buena pagina'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));