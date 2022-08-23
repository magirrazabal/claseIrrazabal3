//clases
class gymClase {
    constructor(nombre, hora, capacidad, disponibilidad) {
        this.nombre = nombre
        this.hora = hora
        this.capacidad = capacidad
        this.disponibilidad = disponibilidad //Espacio disponible en base a reservas
        this.calcularDisponibilidad = function (reservas) {
            if (reservas >= this.capacidad) {
                this.disponibilidad = false
            }
            else {
                this.disponibilidad = true
            }
        }
    }
}

class Usuario {
    constructor(nombre, socio, clase) {
        this.nombre = nombre;
        this.socio = socio;
        this.clase = clase;
    }
}

//objetos
const clase1 = new gymClase("Functional", "lunes - miercoles - viernes 16:00", 15, false)
const clase2 = new gymClase("Spinning", "lunes a viernes 15:00", 20, true)
const clase3 = new gymClase("Pilates", "martes - jueves - sabado 17:30", 15, true)
const clase4 = new gymClase("Yoga", "martes - jueves - sabado 20:30", 10, true)
const clase5 = new gymClase("Boxeo", "lunes a viernes 19:00", 20, false)


// //array
const clases = [clase1, clase2, clase3, clase4, clase5];


//DOM
const botonFiltrar = document.querySelector(".botonFiltrar")
const inputFiltrar = document.querySelector("#filtrar")
const botonTodas = document.querySelector(".botonTodas")
const todas = document.querySelector("#todas")
const selectClase = document.querySelector("#selectClase")
const listaClases = document.querySelector("#opciones")

//Funciones
function filtrarClases() {
    cuerpo.innerHTML = ""
    let claseFound = document.getElementById("filtar").value
    const resultado = clases.filter(elemento => elemento.hora.includes(claseFound))

    console.table(resultado)

    resultado.forEach(clase => {
        cuerpo.innerHTML += `<tr>
                                <td>${clase.nombre}</td>
                                <td>${clase.hora}</td>
                                <td>${clase.capacidad}</td>
                                <td>${clase.disponibilidad}</td>
                            </tr>`
    })

}
function mostrarTodas() {
    cuerpo.innerHTML = ""
    clases.forEach(clase => {
        cuerpo.innerHTML += `<tr>
                                <td>${clase.nombre}</td>
                                <td>${clase.hora}</td>
                                <td>${clase.capacidad}</td>
                                <td>${clase.disponibilidad ? 'Disponible' : 'Completa'}</td>
                            </tr>`
    })
}
mostrarTodas()
function elegirClase() {
    let clase = prompt("¿Qué clase quiere reservar?").toLowerCase()
    switch (clase) {
        case "functional":
            alert("Esta clase está completa");
            elegirClase();
            break;
        case "yoga":
            alert("Esta clase está completa");
            elegirClase();
            break;
        case "spinning":
            alert("¡Listo! Gracias por reservar.")
            break;
        case "boxeo":
            alert("¡Listo! Gracias por reservar.")
            break;
        case "pilates":
            alert("¡Listo! Gracias por reservar.")
            break;
        default:
            alert("Ingrese una clase válida")
            elegirClase();
            break
    }
}
function seleccionarClase() {
    clases.forEach(clase => {
        selectClase.innerHTML += `<select>
                                    <option>${clase.nombre}</option>
                             </select>`
    })
}

//Eventos
botonFiltrar.addEventListener("click", filtrarClases)
botonTodas.addEventListener("click", mostrarTodas)


//LS
let form = document.querySelector('#reservar')
form.addEventListener('submit', (e) => {
    let inputNombre = document.getElementById('nombre').value
    let inputSocio = document.getElementById('socio').value
    let inputClase = document.getElementById('clase').value
    let usuario = new Usuario(inputNombre, inputSocio, inputClase)
    localStorage.setItem('usuario', JSON.stringify(usuario))
    alert("Gracias por reservar!")
})

