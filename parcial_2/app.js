window.onload = async function() {
    
    if (localStorage.getItem("tabla") !== null) {
        var loader = document.getElementById("loader")
        loader.className = "leyendaOculta"
        var update = document.getElementById("update")
        update.className = "leyendaActiva"
    }
    try {
    await fetch ("https://run.mocky.io/v3/11540f28-5acd-487a-867f-bf62ca4c01c4")
    .then(function(response) {
        response.json()
         .then(function(jsonResponse) {
            cargaTabla(jsonResponse)
            localStorage.setItem("tabla", JSON.stringify(jsonResponse))
            var loader = document.getElementById("loader")
            loader.className = "leyendaOculta"
            var update = document.getElementById("update")
            update.className = "leyendaOculta"
         })
    
    
    })
}
    catch(error){
        if (localStorage.getItem("tabla") !== null) {
            var update = document.getElementById("update")
            update.textContent = error
            var tablaGuardada = JSON.parse(localStorage.getItem("tabla"))
            cargaTabla(tablaGuardada)
        }else {
            var loader = document.getElementById("loader")
            loader.textContent = error
        }
    }
}

var cargaTabla = function(jsonResponse) {
    var id = document.getElementById("id")
    var nombre = document.getElementById("nombre")
    var salario = document.getElementById("salario")
    var edad = document.getElementById("edad")
    jsonResponse.data.forEach(function(empleado) {
        
        var tr = document.createElement("tr")
        tr.appendChild(document.createTextNode(empleado.id))
        id.appendChild(tr)
        var tr = document.createElement("tr")
        tr.appendChild(document.createTextNode(empleado.employee_name))
        nombre.appendChild(tr)
        var tr = document.createElement("tr")
        tr.appendChild(document.createTextNode(empleado.employee_salary))
        salario.appendChild(tr)
        var tr = document.createElement("tr")
        tr.appendChild(document.createTextNode(empleado.employee_age))
        edad.appendChild(tr) 
    });
}