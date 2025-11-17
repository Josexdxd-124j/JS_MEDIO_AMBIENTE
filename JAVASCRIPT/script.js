function f1() {
    let aqi = parseInt(prompt("Ingrese el valor del AQI:"));
    let c = "";
    if (aqi <= 50) c = "Bueno";
    else if (aqi <= 100) c = "Moderado";
    else if (aqi <= 150) c = "Dañino para sensibles";
    else if (aqi <= 200) c = "Dañino";
    else if (aqi <= 300) c = "Muy dañino";
    else c = "Peligroso";
    document.getElementById("salida").innerHTML =
        "<h3>AQI</h3>" +
        "Valor: " + aqi + "<br>" +
        "Clasificacion: " + c;
}

function f2() {
    let n = parseInt(prompt("¿Cuantas mediciones ingresara?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let ruido = parseFloat(prompt("Medicion " + i + " en dB:"));
        suma += ruido;
    }
    let prom = suma / n;
    document.getElementById("salida").innerHTML =
        "<h3>Ruido ambiental</h3>" +
        "Promedio: " + prom.toFixed(2) + " dB";
}

function f3() {
    let t = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    let cont = 0;
    while (t !== 0) {
        if (t > 45) cont++;
        t = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    }
    document.getElementById("salida").innerHTML =
        "<h3>Focos de calor</h3>" +
        "Temperaturas > 45°C: " + cont;
}

function f4() {
    let cod = parseInt(prompt("Ingrese codigo (1-4):"));
    let tipo = "";
    switch (cod) {
        case 1: tipo = "Organico"; break;
        case 2: tipo = "Plastico"; break;
        case 3: tipo = "Papel/Carton"; break;
        case 4: tipo = "Vidrio"; break;
        default: tipo = "Codigo invalido";
    }
    document.getElementById("salida").innerHTML =
        "<h3>Residuo</h3>" +
        "Tipo: " + tipo;
}

function f5() {
    let resp;
    let nivel;
    do {
        nivel = parseFloat(prompt("Ingrese nivel del rio (m):"));
        if (nivel > 3) {
            alert("ALERTA: Nivel del rio peligroso");
        }
        resp = prompt("¿Continuar? (si/no)");
    } while (resp.toLowerCase() === "si");
    document.getElementById("salida").innerHTML =
        "<h3>Monitoreo</h3>" +
        "Finalizado";
}
