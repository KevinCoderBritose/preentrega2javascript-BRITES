let num1;
let num2;
let resultado;

function realizarOperacion(operacion) {
    num1 = parseFloat(prompt("Ingresa el primer numero:"));
    num2 = parseFloat(prompt("Ingresa el segundo numero:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("No ingresaste numeros validos");
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'resta':
            resultado = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(num1, num2);
            break;
        case 'division':
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    mostrarResultado(resultado, operacion);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function mostrarResultado(result, operacion) {
    alert(`El resultado de la ${operacion} es: ${result}`);
    console.log(`Resultado de la ${operacion}: ${result}`);
}





const catalogoComidas = [
    "Gordita. Tortilla gruesa de masa de maíz.",
    "Guacamaya. Torta rellena de chicharrón.",
    "Guacamole. Salsa que se prepara con aguacate.",
    "Guajolota. Torta de tamal.",
    "Guanábana. Fruta de un sabor dulce.",
    "Gusano de Maguey. Gusano utilizado en la cocina mexicana."
];

function buscarComidasConLetraG() {
    const letraIngresada = prompt("Escribe la letra G para buscar comidas de nuestro pobre catalogo");

    if (letraIngresada === 'G' || letraIngresada === 'g') {
        // Filtrar comidas que comienzan con la letra 'G' en el catálogo
        const comidasConG = catalogoComidas.filter(comida => comida.toLowerCase().startsWith('g'));

        if (comidasConG.length > 0) {
            alert("Comidas que comienzan con G:\n\n" + comidasConG.join("\n"));
        } else {
            alert("No se encontraron comidas que comiencen con G en el catalogo, aunque esto es imposible porque solo tenemos comida con G");
        }
    } else {
        alert("Tenes que ingresar la letra G para buscar comidas dale");
    }
}