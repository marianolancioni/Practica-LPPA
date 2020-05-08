
//funcion que se ejecuta al inicializar la pagina
    function iniciar(){
      //variables
      var numeroa;
      var numerob;
      var operacion;
      var resultado = document.getElementById('resultado');
      var c = document.getElementById('reset');
      var suma = document.getElementById('suma');
      var resta = document.getElementById('resta');
      var multiplicacion = document.getElementById('multiplicacion');
      var division = document.getElementById('division');
      var igual = document.getElementById('igual');
      var uno = document.getElementById('uno');
      var dos = document.getElementById('dos');
      var tres = document.getElementById('tres');
      var cuatro = document.getElementById('cuatro');
      var cinco = document.getElementById('cinco');
      var seis = document.getElementById('seis');
      var siete = document.getElementById('siete');
      var ocho = document.getElementById('ocho');
      var nueve = document.getElementById('nueve');
      var cero = document.getElementById('cero');
      var punto = document.getElementById('.');
    }




    //Al clickear un boton
    uno.onclick = function(event){
          resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(event){
          resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(event){
          resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(event){
          resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(event){
          resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(event){
          resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(event){
          resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(event){
          resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(event){
          resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(event){
          resultado.textContent = resultado.textContent  + "0";
    }
    punto.onclick = function(event){
        resultado.textContent = resultado.textContent  + ".";
    }
    c.onclick = function(event){
        resetear();
    }
    suma.onclick = function(event){
          numeroa = resultado.textContent;
          operacion = "+";
          limpiar();
    }
    resta.onclick = function(event){
          numeroa = resultado.textContent;
          operacion = "-";
          limpiar();
    }
    multiplicacion.onclick = function(event){
          numeroa = resultado.textContent;
          operacion = "*";
          limpiar();
    }
    division.onclick = function(event){
          numeroa = resultado.textContent;
          operacion = "/";
          limpiar();
    }
    igual.onclick = function(event){
          numerob = resultado.textContent;
          calcular();
    }

    


// funciones Limpiar y Resetear

    function limpiar(){
      resultado.textContent = "";
    }
    function resetear(){
      resultado.textContent = "";
      operandoa = 0;
      operandob = 0;
      operacion = "";
    }


//funcion para calcular las operaciones
    function calcular(){
      var res = 0;
      switch(operacion){
        case "+":
          res = parseFloat(numeroa) + parseFloat(numerob);
        break;
        case "-":
            res = parseFloat(numeroa) - parseFloat(numerob);
        break;
        case "*":
          res = parseFloat(numeroa) * parseFloat(numerob);
        break;
        case "/":
          res = parseFloat(numeroa) / parseFloat(numerob);
        break;
      }
      //por ultimo guardo el resultado (res) de la funcion calcular (ejecutada en el boton =) en la variable resultado.
      resultado.textContent = res;
    }

    