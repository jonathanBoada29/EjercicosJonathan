class Agenda {

    constructor() {
        this._contactos = []
    }

    añadirContacto(nombre, teléfono, email) {
        this._contactos.push({ nombre, teléfono, email })

    }

    listaContactos() {
        console.log(this._contactos)

    }

    buscarContactos(nombre) {
        const contactosEncontrados = this._contactos.find((contacto) => contacto.nombre == nombre)
        console.log(contactosEncontrados)
    }

    editarContacto(nombre, teléfono, email) {
        const contactosEncontradosEditar = this._contactos.find((contacto) => contacto.nombre == nombre)

        if (contactosEncontradosEditar) {
            contactosEncontradosEditar.nombre = nombre
            contactosEncontradosEditar.teléfono = teléfono
            contactosEncontradosEditar.email = email
            console.log("El contacto ha sido editado")
        } else {
            console.log("No se ha editado el contacto")
        }

    }

    cerrarAgenda(){
        console.log("Agenda cerrada")
    }
}

const agenda = new Agenda('Jonathan' , '3226176309' , 'jonathanboada71@gmail.com');

