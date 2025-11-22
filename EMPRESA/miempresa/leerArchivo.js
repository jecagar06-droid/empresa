// leerArchivo.js
const fs = require("fs");

function leer(archivo, encoding = "utf8") {
    // Si el archivo no existe, lanzamos el error hacia quien llamó
    return fs.readFileSync(archivo, encoding);
}

module.exports = { leer };
