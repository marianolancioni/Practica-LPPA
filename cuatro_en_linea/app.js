var nroJuego = document.getElementById("nrojuego")
var seg1 = document.getElementById("segundos1")
var min1 = document.getElementById("minutos1")
var seg2 = document.getElementById("segundos2")
var min2 = document.getElementById("minutos2")
var elegir = document.getElementById("elegir")
var estadoJuego
var nj = 0
var matrizDatosJuego = []
var matrizEstado = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]
var cronometro1
var cronometro2
var jugadorGanador
contador1_s = 0
contador1_m = 0
contador2_s = 0
contador2_m = 0
var turnoJugador = 1 
//al cargar la pagina se cargan las funciones configurarCeldas(), pintarTablero(), temporizador1(), funcionGuardar(), resetearJuego()
window.onload = function() {
    if (localStorage.getItem("matriz") !== null) {
      matrizEstado = JSON.parse(localStorage.getItem("matriz"))
    }
    configurarCeldas()
    pintarTablero()
    temporizador1()
    funcionGuardar()
    resetearJuego()
}
//recorremos las celdas  y le asignadmos a las mismas las funciones onclikceldas, onmouseovercelda y onmouseoutcelda
var configurarCeldas = function() {
  matrizEstado.forEach(function(fila, y) {
  fila.forEach(function(celdaValor, x) {
    var celdaElemento = document.getElementById(x + '-' + y)
    celdaElemento.onclick = onclickCeldas(x, y)
    celdaElemento.onmouseover = onmouseoverCelda(x)
    celdaElemento.onmouseout = onmouseoutCelda(x)
  })
})
}
//La sig funcion cambia el turno del jugador, guarda el progreso en el localStorage, y cambia los temporizadores
var onclickCeldas = function(x) { 
   return function() {
   for (let y=0; y<6; y++) {
     const valor = matrizEstado[y][x];
     if (valor !== 0) {
       matrizEstado[y-1][x] = turnoJugador
       turnoJugador = turnoJugador === 1 ? -1 : 1
       break
     } else if (y===5) {
      matrizEstado[y][x] = turnoJugador
      turnoJugador = turnoJugador === 1 ? -1 : 1 
      }
   }
   localStorage.setItem("matriz", JSON.stringify(matrizEstado))
   if (turnoJugador === -1)
   {
     temporizadorStop1()
     temporizador2()
     
   } else
   {
     temporizadorStop2()
     temporizador1()
   }
   pintarTablero()
   chequearGanador()
   }    
}
//Funcion para chequear ganador
var chequearGanador = function() {
//coloco una bandera para determinar el empate
var bandera = true
  for (let y=0; y<6; y++) {
    for (let x=0; x<7; x++) {
      try {
        if (matrizEstado[y][x]===0){
          bandera = false
        }
        var celda1x = matrizEstado[y][x]
        var celda2x = matrizEstado[y][(x + 1)]
        var celda3x = matrizEstado[y][(x + 2)]
        var celda4x = matrizEstado[y][(x + 3)]

        var celda1y = matrizEstado[y][x]
        var celda2y = matrizEstado[(y + 1)] && matrizEstado[(y + 1)][x]
        var celda3y = matrizEstado[(y + 2)] && matrizEstado[(y + 2)][x]
        var celda4y = matrizEstado[(y + 3)] && matrizEstado[(y + 3)][x]

        var resultadoX = celda1x + celda2x + celda3x + celda4x
        var resultadoY = celda1y + celda2y + celda3y + celda4y
        if (Math.abs(resultadoX) === 4 || Math.abs(resultadoY) === 4) {
          if (turnoJugador === 1) 
          {
            jugadorGanador = 2
          } else 
          {
          jugadorGanador = 1
          }
          
          alert('Felicitaciones Jugador ' + jugadorGanador + ' ha vencido')
          resetearGanoEmpate()
        }
        
      }
      catch(error) {
        //Vacio
      }
    }
  }
  //si la bandera es verdadera quiere decir que la matriz esta completa y hubo un empate
  if (bandera){
    alert('Empate')
    resetearGanoEmpate()
  }
}
//al pasar el mouse sobre una columna la flecha se pinta
var onmouseoverCelda = function(x) {
  return function() {
    var flecha = document.getElementById("flecha_" + x)
    flecha.style.borderTop = "30px solid yellowgreen"
  }
}
//al salir el mouse sobre una columna la flecha se transparenta
var onmouseoutCelda = function(x) {
  return function() {
    var flecha = document.getElementById("flecha_" + x)
    flecha.style.borderTop = "30px solid transparent"
  }
}
//Pinta las celdas con el color del jugador correspondiente y cambia la leyenda del turno del jugador
var pintarTablero = function() {
  var turno = document.getElementById("turno")
  turno.innerText = turnoJugador === 1 ? 'Jugador 1' : 'Jugador 2'
  matrizEstado.forEach(function(fila, y) {
    fila.forEach(function(celdaValor, x) {
      var celdaElemento = document.getElementById(x + '-' + y)
      if(celdaValor === 1) {
        celdaElemento.className = "celda JugadorUno";
      } else if (celdaValor === -1) {
        celdaElemento.className =  "celda JugadorDos";
      } else {
        celdaElemento.className = "celda"
      }
    })
  })
}
//Funcion que resetea el juego cuando clickeamos en resetear juego
var resetearJuego = function() {
  var resetear = document.getElementById('resetear')
  resetear.onclick = function() {
  var matrizReseteada = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
  ]
  matrizEstado = matrizReseteada
  pintarTablero()
  s1 = document.getElementById("segundos1")
  m1 = document.getElementById("minutos1")
  s2 = document.getElementById("segundos2")
  m2 = document.getElementById("minutos2")
  s1.innerText = "00"
  m1.innerText = "00"
  s2.innerText = "00"
  m2.innerText = "00" 
  contador1_s = 0
  contador1_m = 0
  contador2_s = 0
  contador2_m = 0
  
  }
}
//Funcion para resetear cuando hay un ganador o empate
var resetearGanoEmpate = function () {
  var matrizReseteada = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ]
  matrizEstado = matrizReseteada
  pintarTablero()
  s1 = document.getElementById("segundos1")
  m1 = document.getElementById("minutos1")
  s2 = document.getElementById("segundos2")
  m2 = document.getElementById("minutos2")
  s1.innerText = "00"
  m1.innerText = "00"
  s2.innerText = "00"
  m2.innerText = "00" 
  contador1_s = 0
  contador1_m = 0
  contador2_s = 0
  contador2_m = 0
  
}
//funcion para contar el tiempo para el jugador 1
function temporizador1()
{
  
  s = document.getElementById("segundos1")
  m = document.getElementById("minutos1")
  cronometro1 = setInterval(
    function(){
      if (contador1_s==60)
      {
        contador1_s = 0
        contador1_m ++
        //agrego un cero si los minutos son menores a 10
        if (contador1_m<10)
        {
          m.innerText = "0" + contador1_m
        } else
        {
          m.innerText = contador1_m
        }
      }
    //agrego un cero si los segundos son menores a 10
    if (contador1_s<10)
    {
      s.innerText = "0" + contador1_s
    } else
    {
      s.innerText = contador1_s
    }
    contador1_s ++
    
    }
  ,1000)
}
//Para el cronometro1
function temporizadorStop1()
{
  clearInterval(cronometro1)
}
//funcion para contar el tiempo para el jugador 2
function temporizador2()
{
  
  s = document.getElementById("segundos2")
  m = document.getElementById("minutos2")
  cronometro2 = setInterval(
    function(){
      if (contador2_s==60)
      {
        contador2_s = 0
        contador2_m ++
        //agrego un cero si los minutos son menores a 10
        if (contador2_m<10)
        {
          m.innerText = "0" + contador2_m
        } else
        {
          m.innerText = contador2_m
        }
      }
    //agrego un cero si los segundos son menores a 10
    if (contador2_s<10)
    {
      s.innerText = "0" + contador2_s
    } else
    {
    s.innerText = contador2_s
    }
    contador2_s ++
    }
  ,1000)
}
//Para el cronometro2
function temporizadorStop2()
{
  clearInterval(cronometro2)
}

//funcion para agregar juego guardado a la tabla
var agregarJuego = function (nroJuego, seg1, seg2, min1, min2, elegir, estadoJuego){
  nj = nj + 1
  nroJuego = nj
  estadoJuego = JSON.parse(localStorage.getItem("juego"))
  var nuevoJuego =  {
  NumeroJuego : nroJuego,
  Segundos1 : seg1,
  Minutos1 : min1,
  Segundos2 : seg2,
  Minutos2 : min2,
  Elegir : elegir
  }
  matrizDatosJuego.push(nuevoJuego)
}

//funcion que al hacer click guarda el juego en el local storage y lo agrega a la tabla
var funcionGuardar = function(){
  var guardar = document.getElementById("guardar")
  guardar.onclick = function(){
  agregarJuego()
  localStorage.setItem("juego", JSON.stringify(matrizDatosJuego))
  cargarTabla(matrizDatosJuego)
  }
}

//crea listas con datos del juego guardado en la tabla
var cargarTabla = function(matrizDatosJuego) {
  var nroJuego = document.getElementById("nrojuego")
  var seg1 = document.getElementById("seg1")
  var min1 = document.getElementById("min1")
  var seg2 = document.getElementById("seg2")
  var min2 = document.getElementById("min2")
  var elegir = document.getElementById("elegir")

  matrizDatosJuego.forEach(function(juego){
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(juego.NumeroJuego))
      nroJuego.appendChild(li)
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(juego.Segundos1))
      seg1.appendChild(li)
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(juego.Minutos1))
      min1.appendChild(li)
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(juego.Segundos2))
      seg2.appendChild(li)
      var li = document.createElement("li")
      li.appendChild(document.createTextNode(juego.Minutos2))
      min2.appendChild(li)
      var radio = document.createElement("radio")
      radio.appendChild(document.createTextNode(juego.Elegir))
      elegir.appendChild(radio)

  })
}