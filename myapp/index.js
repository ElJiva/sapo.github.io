let nombre = "Hola Mundo";
console.log(nombre);
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Cualquier cosa!');
});

app.get('/productos', (req, res) => {
    let productos = [
        { nombre: 'Refresco', precio: 10 },
        { nombre: 'Papas', precio: 15 },
        { nombre: 'Chocolates', precio: 20 }
    ];

    let respuesta = '<table border="1">';
    productos.forEach(producto => {
        respuesta += `<tr><td>${producto.nombre}</td><td>${producto.precio}</td></tr>`;
    });
    respuesta += '</table>';

    res.send(respuesta);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
