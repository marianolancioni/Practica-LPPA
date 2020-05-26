window.onload= function() {
    var registro = document.getElementById("registro")
    registro.onsubmit = function(evt) {
        evt.preventDefault()
        var nombre = document.getElementById("nombre").value
        var apellido = document.getElementById("apellido").value
        var email = document.getElementById("email").value
        var edad = document.getElementById("edad").value
        var sexo = document.getElementById("sexo").value
        var tema = document.getElementById("tema").value
        var pais = document.getElementById("pais").value
        var comentarios = document.getElementById("comentarios").value
        console.log("nombre: "+ nombre)
        console.log("apellido: "+ apellido)
        console.log("email: "+ email)
        console.log("edad: "+ edad)
        console.log("sexo: "+ sexo)
        console.log("tema: "+ tema)
        console.log("pais: "+ pais)
        console.log("comentarios: "+ comentarios)
    }
}
    

    
    
    
    
    
    
    
    
    
    
    
