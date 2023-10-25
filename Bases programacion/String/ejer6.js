let email = prompt("Introduce tu correo electrónico: ")
let nuevoEmail

function cambio (email){

     nuevoEmail = email.replace(".com", ".ceu.es.");

    return nuevoEmail

}
cambio(email)

console.log(nuevoEmail)