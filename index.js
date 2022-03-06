var usuarios = []
var form = document.getElementById('formulario')
var pass = document.getElementById('psw')

var exprMin = RegExp("[a-z]")
var exprMay = RegExp("[A-Z]")
var exprNum = RegExp("[0-9]")
var exprSpe = RegExp("^a-zA-Z0-9")

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    var error = ""
    if (!pass.value.match(exprMay))
    {
        error += "La contrasena debe tener una mayuscula"
    }
    else if (!pass.value.match(exprMin))
    {
        error += "La contrasena debe tener una minuscula"
    }
    else if (!pass.value.match(exprNum))
    {
        error += "La contrasena debe tener un numero"
    }
    else if (!pass.value.match(exprSpe))
    {
        error += "La contrasena debe tener un caracter especial"
    }
    else
    {
        error += "Bienvenido" + document.getElementById("uname").value
    }

    alert(error)
})