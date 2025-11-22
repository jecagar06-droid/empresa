
function calcularResultado() {

    const correctas = {
        p1: "B",
        p2: "B",
        p3: "A",
        p4: "B",
        p5: "A",
        p6: "A"
    };

    let aciertos = 0;

    for (let id in correctas) {
        let seleccion = document.getElementById(id).value;

        if (seleccion === "") {
            alert("Debe responder todas las preguntas");
            return;
        }
        if (seleccion === correctas[id]) aciertos++;
    }

    let div = document.getElementById("resultado");

    if (aciertos === 6) {
        div.innerHTML = `
            <h3 style="color: gold;">🏆 Premio Mayor</h3>
            <p>Aciertos: ${aciertos} / 6</p>
            <img src="./img/congratulations.gif" width="200">
        `;
    } 
    else if (aciertos >= 3) {
        div.innerHTML = `
            <h3 style="color: lightgreen;">🥈 Segundo Premio</h3>
            <p>Aciertos: ${aciertos} / 6</p>
            <img src="./img/premio.gif" width="200">
        `;
    } 
    else {
        div.innerHTML = `
            <h3 style="color: red;">❌ Perdiste</h3>
            <p>Aciertos: ${aciertos} / 6</p>
            <img src="./img/perdio-burla.gif" width="200">
        `;
    }
}

