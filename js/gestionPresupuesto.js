'use strict'

var presupuesto = 0;
let gastos = [];
let idgasto = 0;

//Presupuestos
function actualizarPresupuesto(valor) {
    let val = parseFloat(valor);

    if (val >= 0) {
        presupuesto = val;
    }

    else {
       console.log('Error. Presupuesto negativo');
       val = -1;
    }
    return val;
}

function mostrarPresupuesto() {

    return(`Tu presupuesto actual es de ${presupuesto} €`);
}

//Gastos
function CrearGasto(descripcion, valor, fecha = Date.now(), ...etiquetas) {

    let valor1 = parseFloat(valor);

    if (valor1 < 0 || isNaN(valor1)) {
        valor1 = 0;
    }

    let gasto = {
	    descripcion: descripcion,
        valor : valor1,
        etiquetas : [...etiquetas],
        fecha : (typeof fecha === 'string') ? Date.parse(fecha) : fecha,
        

        mostrarGasto() {
            return(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);
        },

        actualizarDescripcion(newDescripcion) {

            this.descripcion = newDescripcion;
        },

        actualizarValor(newValor) {

            let value = parseFloat(newValor);

            if (value >= 0) {
                this.valor = value;
            }
        },

        mostrarGastoCompleto() {
            let controlFecha1;

            if (typeof this.fecha === 'string') {
                controlFecha1 = Date.parse(this.fecha);
            }
            else {
                controlFecha1 = this.fecha;
            }
            let espacio = "";

            for(let etiquetas1 of this.etiquetas) {
                espacio += `- ${etiquetas1}\n`;
            }
            let fecha1 = new Date(controlFecha1);

            let aux = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${(fecha1.toLocaleString())}\nEtiquetas:\n`;
            return aux + espacio;
        },

        actualizarFecha(fecha) {
            if(!isNaN(Date.parse(fecha))) {
                this.fecha = Date.parse(fecha);
            }
        },

        anyadirEtiquetas(...etiquetas) {
            const aux = etiquetas.filter((x) => {
                if (!this.etiquetas.includes(x)) {
                    return x;
                }
            });
            this.etiquetas.push(...aux);

        },

        borrarEtiquetas(...etiquetas) {
            etiquetas.forEach((x) => {
                for(let i = 0; i < this.etiquetas.length; i++) {
                    if (this.etiquetas[i] === x) {
                        this.etiquetas.splice(i, 1);
                    }
                }
            })
        },

        obtenerPeriodoAgrupacion(periodo) {
            let resulttado;
            if(periodo === "dia") {
                
            }
            else if(periodo === "mes") {

            }
            else if(periodo === "anyo") {

            }
        }
    };

    return gasto;
}

function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idgasto; 

    idgasto++;

    gastos.push(gasto);
}

function borrarGasto(id) {
    for(let i = 0; i < gastos.length; i++) {
        if(gastos[i].id === id) {
            gastos.splice(i, 1);
        }
    }
}

function calcularTotalGastos() {
    var suma = 0;
    for(let i = 0; i < gastos.length; i++) {
        suma += gastos[i].valor;   
    }
    return suma;
}

function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

function filtrarGastos() {


}

function agruparGastos() {


}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}
