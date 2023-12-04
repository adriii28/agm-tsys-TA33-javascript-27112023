function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours().toString().padStart(2, '0');
    var minutos = ahora.getMinutes().toString().padStart(2, '0');
    var segundos = ahora.getSeconds().toString().padStart(2, '0');
    var horaActual = horas + ":" + minutos + ":" + segundos;

    document.getElementById('reloj').innerText = horaActual;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();