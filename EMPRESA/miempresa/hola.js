// hola.js
const http = require("http");
const path = require("path");
const fs = require("fs");

const puerto = 3000;

const mime = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".json": "application/json",
  ".svg": "image/svg+xml"
};

const servidor = http.createServer((req, res) => {
    let url = req.url;

    // Página principal
    if (url === "/") url = "/index.html";

    // Evitar hackeos usando "../"
    if (url.includes("..")) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Solicitud inválida");
    }

    const archivo = path.join(__dirname, url);
    const ext = path.extname(archivo).toLowerCase();
    const tipo = mime[ext] || "application/octet-stream";

    // Encoding correcto (solo texto usa utf8)
    const textExt = [".html", ".css", ".js", ".json", ".svg"];
    const encoding = textExt.includes(ext) ? "utf8" : null;

    fs.readFile(archivo, encoding, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            return res.end("Archivo no encontrado: " + url);
        }

        res.writeHead(200, { "Content-Type": tipo });
        res.end(data);
    });
});

servidor.listen(puerto, () => {
    console.log("Servidor corriendo en http://localhost:" + puerto);
});

