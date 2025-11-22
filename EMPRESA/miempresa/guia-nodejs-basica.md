# 📘 Guía Básica de Node.js para Estudiantes

## ¿Qué es Node.js?

**Node.js** es un entorno que permite ejecutar JavaScript fuera del navegador, directamente en tu computadora. Con Node.js puedes crear aplicaciones de servidor, herramientas de línea de comandos, APIs y mucho más.

### ¿Por qué aprender Node.js?
- ✅ Usas JavaScript (el mismo lenguaje del navegador)
- ✅ Es rápido y eficiente
- ✅ Tiene millones de paquetes disponibles (NPM)
- ✅ Es muy usado en la industria

---

## 🚀 Paso 1: Instalación de Node.js

### Windows / Mac / Linux

1. Ve a: https://nodejs.org
2. Descarga la versión **LTS** (recomendada)
3. Instala siguiendo el asistente
4. Verifica la instalación:

```bash
node --version
npm --version
```

Deberías ver algo como:
```
v20.x.x
10.x.x
```

---

## 💻 Paso 2: Tu Primer Programa en Node.js

### 1. Crear una carpeta para tu proyecto

```bash
mkdir mi-primer-node
cd mi-primer-node
```

### 2. Crear un archivo JavaScript

Crea un archivo llamado `hola.js` con este contenido:

```javascript
// hola.js
console.log('¡Hola desde Node.js!');
console.log('Node.js está funcionando correctamente');
```

### 3. Ejecutar el programa

```bash
node hola.js
```

Deberías ver:
```
¡Hola desde Node.js!
Node.js está funcionando correctamente
```

🎉 **¡Felicidades! Ya ejecutaste tu primer programa en Node.js**

---

## 📦 Paso 3: NPM (Node Package Manager)

NPM es el gestor de paquetes de Node.js. Te permite instalar bibliotecas creadas por otros desarrolladores.

### Inicializar un proyecto con NPM

```bash
npm init -y
```

Esto crea un archivo `package.json` que guarda la información de tu proyecto.

### Estructura del package.json

```json
{
  "name": "mi-primer-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

## 🔧 Paso 4: Conceptos Básicos

### 1. Variables y Tipos de Datos

```javascript
// variables.js

// Strings (texto)
const nombre = 'Juan';
const apellido = 'Pérez';

// Numbers (números)
const edad = 25;
const precio = 19.99;

// Booleans (verdadero/falso)
const esEstudiante = true;
const tieneCarro = false;

// Arrays (listas)
const frutas = ['manzana', 'banana', 'naranja'];

// Objects (objetos)
const persona = {
    nombre: 'María',
    edad: 30,
    ciudad: 'Bogotá'
};

console.log(nombre); // Juan
console.log(frutas[0]); // manzana
console.log(persona.nombre); // María
```

### 2. Funciones

```javascript
// funciones.js

// Función simple
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar('Ana')); // Hola, Ana!

// Función con arrow function (moderna)
const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(5, 3)); // 8

// Arrow function corta
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // 20
```

### 3. Trabajar con Arrays

```javascript
// arrays.js

const numeros = [1, 2, 3, 4, 5];

// Recorrer con forEach
numeros.forEach(num => {
    console.log(num);
});

// Transformar con map
const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8, 10]

// Filtrar con filter
const mayoresQue3 = numeros.filter(num => num > 3);
console.log(mayoresQue3); // [4, 5]

// Buscar con find
const encontrado = numeros.find(num => num === 3);
console.log(encontrado); // 3
```

---

## 📁 Paso 5: Módulos en Node.js

Los módulos te permiten organizar tu código en archivos separados.

### Exportar e Importar

**matematicas.js:**
```javascript
// Exportar funciones
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Exportar para usar en otros archivos
module.exports = {
    sumar,
    restar,
    multiplicar
};
```

**app.js:**
```javascript
// Importar el módulo
const matematicas = require('./matematicas');

console.log(matematicas.sumar(10, 5));      // 15
console.log(matematicas.restar(10, 5));     // 5
console.log(matematicas.multiplicar(10, 5)); // 50
```

Ejecutar:
```bash
node app.js
```

---

## 📖 Paso 6: Leer y Escribir Archivos

Node.js puede trabajar con archivos en tu computadora.

### Leer un archivo

```javascript
// leerArchivo.js
const fs = require('fs');

// Leer archivo de forma síncrona (espera a que termine)
const contenido = fs.readFileSync('mensaje.txt', 'utf8');
console.log(contenido);

// Leer archivo de forma asíncrona (recomendado)
fs.readFile('mensaje.txt', 'utf8', (error, datos) => {
    if (error) {
        console.log('Error al leer el archivo:', error);
        return;
    }
    console.log(datos);
});
```

### Escribir un archivo

```javascript
// escribirArchivo.js
const fs = require('fs');

const texto = 'Este es mi primer archivo creado con Node.js';

fs.writeFile('nuevoArchivo.txt', texto, (error) => {
    if (error) {
        console.log('Error al escribir:', error);
        return;
    }
    console.log('Archivo creado exitosamente');
});
```

---

## 🌐 Paso 7: Crear un Servidor Web Simple

```javascript
// servidor.js
const http = require('http');

// Crear el servidor
const servidor = http.createServer((peticion, respuesta) => {
    // Configurar la respuesta
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    // Enviar HTML
    respuesta.end(`
        <html>
            <head>
                <title>Mi Servidor Node.js</title>
            </head>
            <body>
                <h1>¡Hola desde mi servidor Node.js!</h1>
                <p>Este servidor está corriendo en el puerto 3000</p>
            </body>
        </html>
    `);
});

// Iniciar el servidor
const puerto = 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
```

**Ejecutar:**
```bash
node servidor.js
```

**Abrir en el navegador:**
http://localhost:3000

---

## 📦 Paso 8: Instalar y Usar Paquetes

### Ejemplo: Usar el paquete `chalk` (para dar colores al console.log)

```bash
npm install chalk@4.1.2
```

```javascript
// colores.js
const chalk = require('chalk');

console.log(chalk.blue('Este texto es azul'));
console.log(chalk.red.bold('Este texto es rojo y negrita'));
console.log(chalk.green.underline('Este texto es verde y subrayado'));

console.log(chalk.bgYellow.black('Fondo amarillo con texto negro'));
```

### Ejemplo: Usar `nodemon` (reinicia automáticamente tu servidor)

```bash
# Instalar nodemon globalmente
npm install -g nodemon

# O instalar en el proyecto
npm install --save-dev nodemon
```

**Usar nodemon:**
```bash
nodemon servidor.js
```

Ahora cada vez que guardes cambios, el servidor se reiniciará automáticamente.

---

## 🎯 Proyecto Práctico: Calculadora Simple

Vamos a crear una calculadora que funciona desde la terminal.

**calculadora.js:**
```javascript
// Obtener argumentos de la línea de comandos
const args = process.argv.slice(2);

// Verificar que hay suficientes argumentos
if (args.length < 3) {
    console.log('Uso: node calculadora.js <numero1> <operacion> <numero2>');
    console.log('Ejemplo: node calculadora.js 10 + 5');
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const operacion = args[1];
const num2 = parseFloat(args[2]);

let resultado;

switch (operacion) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
    case 'x':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log('Error: No se puede dividir por cero');
            process.exit(1);
        }
        resultado = num1 / num2;
        break;
    default:
        console.log('Operación no válida. Usa: +, -, *, /');
        process.exit(1);
}

console.log(`${num1} ${operacion} ${num2} = ${resultado}`);
```

**Usar la calculadora:**
```bash
node calculadora.js 10 + 5     # 15
node calculadora.js 20 - 8     # 12
node calculadora.js 7 * 6      # 42
node calculadora.js 100 / 4    # 25
```

---

## 🎓 Proyecto Completo: Sistema de Tareas (TODO List)

**tareas.js:**
```javascript
const fs = require('fs');

const archivo = 'tareas.json';

// Función para leer tareas
function leerTareas() {
    try {
        const data = fs.readFileSync(archivo, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Función para guardar tareas
function guardarTareas(tareas) {
    fs.writeFileSync(archivo, JSON.stringify(tareas, null, 2));
}

// Función para agregar tarea
function agregarTarea(descripcion) {
    const tareas = leerTareas();
    tareas.push({
        id: Date.now(),
        descripcion: descripcion,
        completada: false
    });
    guardarTareas(tareas);
    console.log('✅ Tarea agregada:', descripcion);
}

// Función para listar tareas
function listarTareas() {
    const tareas = leerTareas();
    
    if (tareas.length === 0) {
        console.log('No hay tareas');
        return;
    }
    
    console.log('\n📋 LISTA DE TAREAS:\n');
    tareas.forEach((tarea, index) => {
        const estado = tarea.completada ? '✅' : '⬜';
        console.log(`${index + 1}. ${estado} ${tarea.descripcion}`);
    });
    console.log('');
}

// Función para completar tarea
function completarTarea(indice) {
    const tareas = leerTareas();
    
    if (indice < 1 || indice > tareas.length) {
        console.log('❌ Tarea no encontrada');
        return;
    }
    
    tareas[indice - 1].completada = true;
    guardarTareas(tareas);
    console.log('✅ Tarea completada');
}

// Procesar comandos
const comando = process.argv[2];
const argumento = process.argv[3];

switch (comando) {
    case 'agregar':
        if (!argumento) {
            console.log('Uso: node tareas.js agregar "descripción"');
        } else {
            agregarTarea(argumento);
        }
        break;
        
    case 'listar':
        listarTareas();
        break;
        
    case 'completar':
        const numero = parseInt(argumento);
        if (isNaN(numero)) {
            console.log('Uso: node tareas.js completar <numero>');
        } else {
            completarTarea(numero);
        }
        break;
        
    default:
        console.log('Comandos disponibles:');
        console.log('  node tareas.js agregar "descripción"');
        console.log('  node tareas.js listar');
        console.log('  node tareas.js completar <numero>');
}
```

**Usar el sistema de tareas:**
```bash
node tareas.js agregar "Estudiar Node.js"
node tareas.js agregar "Hacer ejercicio"
node tareas.js agregar "Leer un libro"
node tareas.js listar
node tareas.js completar 1
node tareas.js listar
```

---

## 📚 Conceptos Importantes

### 1. Asincronía
Node.js trabaja de forma asíncrona, lo que significa que puede hacer varias cosas al mismo tiempo sin esperar.

**Ejemplo:**
```javascript
console.log('1. Inicio');

setTimeout(() => {
    console.log('2. Esto se ejecuta después de 2 segundos');
}, 2000);

console.log('3. Fin');

// Resultado:
// 1. Inicio
// 3. Fin
// 2. Esto se ejecuta después de 2 segundos
```

### 2. Callbacks
Una función que se pasa como argumento a otra función.

```javascript
function hacerAlgo(callback) {
    console.log('Haciendo algo...');
    callback();
}

hacerAlgo(() => {
    console.log('¡Terminado!');
});
```

### 3. Promises (Promesas)
Una forma moderna de manejar código asíncrono.

```javascript
const promesa = new Promise((resolve, reject) => {
    const exito = true;
    
    if (exito) {
        resolve('¡Operación exitosa!');
    } else {
        reject('Algo salió mal');
    }
});

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
```

### 4. Async/Await
La forma más limpia de trabajar con promesas.

```javascript
async function obtenerDatos() {
    try {
        const resultado = await promesa;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

obtenerDatos();
```

---

## 🛠️ Scripts Útiles en package.json

Edita tu `package.json` y agrega scripts:

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "calculadora": "node calculadora.js",
    "tareas": "node tareas.js"
  }
}
```

**Usar los scripts:**
```bash
npm start           # Ejecuta app.js
npm run dev         # Ejecuta con nodemon
npm run calculadora # Ejecuta calculadora.js
```

---

## ✅ Checklist de Aprendizaje

- [ ] Node.js instalado correctamente
- [ ] Ejecuté mi primer programa "Hola Mundo"
- [ ] Creé un proyecto con `npm init`
- [ ] Entiendo variables, funciones y arrays
- [ ] Sé cómo crear y usar módulos
- [ ] Puedo leer y escribir archivos
- [ ] Creé un servidor web simple
- [ ] Instalé y usé un paquete de NPM
- [ ] Completé el proyecto de la calculadora
- [ ] Completé el proyecto del sistema de tareas

---

## 🎯 Próximos Pasos

1. **Express.js** - Framework para crear APIs y aplicaciones web
2. **MongoDB** - Base de datos para Node.js
3. **REST APIs** - Crear servicios web
4. **WebSockets** - Comunicación en tiempo real
5. **Autenticación** - Sistemas de login

---

## 📖 Recursos para Seguir Aprendiendo

- [Documentación oficial de Node.js](https://nodejs.org/docs)
- [NPM - Buscar paquetes](https://www.npmjs.com)
- [Node.js en español](https://nodejs.dev/es/)
- [Guía de Express.js](https://expressjs.com/es/)

---

## 🐛 Errores Comunes y Soluciones

### Error: "node: command not found"
**Solución:** Node.js no está instalado o no está en el PATH. Reinstala Node.js.

### Error: "Cannot find module"
**Solución:** 
```bash
npm install
```

### Error: "Port 3000 is already in use"
**Solución:** Hay otro proceso usando ese puerto. Cambia el puerto o cierra el otro proceso.

### Error: "ENOENT: no such file or directory"
**Solución:** El archivo no existe. Verifica la ruta y el nombre del archivo.

---

## 💡 Tips para Estudiantes

1. **Practica todos los días** - Aunque sea 15 minutos
2. **Lee los errores con calma** - Te dicen exactamente qué está mal
3. **Usa console.log()** - Para ver qué contienen las variables
4. **Experimenta** - Cambia cosas y ve qué pasa
5. **No copies y pegues sin entender** - Lee cada línea

---

¡Felicidades por comenzar con Node.js! 🚀

Con estos conocimientos ya puedes crear aplicaciones simples. Sigue practicando y construye proyectos propios.

**¡Happy Coding!** 💻✨
