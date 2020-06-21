
var matrizEstado = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]

var turnoJugador = 1 

window.onload = function() {
    matrizEstado.forEach(function(fila, y) {
    fila.forEach(function(celdaValor, x) {
      var celdaElemento = document.getElementById(x + '-' + y)
      celdaElemento.onclick = function() {
        if (matrizEstado[y][x] === 0) {
         matrizEstado[y][x] = turnoJugador
         turnoJugador = turnoJugador === 1 ? 2 : 1
         pintarTablero()
        }
      }
    })
  })
  pintarTablero()
}
var pintarTablero = function() {
  var turno = document.getElementById("turno")
  turno.innerText = turnoJugador
  matrizEstado.forEach(function(fila, y) {
    fila.forEach(function(celdaValor, x) {
      var celdaElemento = document.getElementById(x + '-' + y)
      if(celdaValor === 1) {
        celdaElemento.className = "celda JugadorUno";
      } else if (celdaValor === 2) {
        celdaElemento.className =  "celda JugadorDos";
      }
    })
  })
}