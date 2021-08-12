// Se ha instalado el npm readline-sync
// Pasos: 
// 1- Abrir la terminal
// 2- Ejecutar "npm init -y"
// 3- Ejecutar "npm install readline-sync"

const interface = require("readline-sync");

// Llamamos a las funciones del otro JavaScript
const estadistica = require("./estadistica.js");

// Acortamos la funcion
function question(text) {
	return interface.question(text);
};

// Declaramos la variable selection, para modificarla después
var selection;

// Hacemos el interfaz
do{
	// Guia
	console.log("1- Pocos datos");
	console.log("2- Muchos datos");
	console.log("3- Salir");
	selection = question("Ingrese 1, 2 o 3: ");
	// Separamos las selecciones
	switch(selection){
		default: // Volver a preguntar en caso de equivocación
			if (selection != 3) {console.log("¡Ingrese un caracter valido!")};
			selection = question("Ingrese 1, 2 o 3: ");
		case "1": // Pocos datos --> Meter a mano uno a uno
			if(selection == 1) {
				let numeros = [];
				let num = "";
				console.log("Ingrese los numeros");
				do{
					num = question("Numero o Tr: ");
					// Verificamos que no sea texto
					if (parseInt(num).toString() != "NaN") {
						// Agregamos al Array principal
						numeros.push(parseInt(num));
					}
					else if(num !== "Tr") {
						console.log("Ingrese un caracter válido");
					}
				} while(num !== "Tr"); // Metodo de salida (modificable)
				// Mostrando los resultados
				estadistica.tablaDraw(numeros);
				console.log("	PROMEDIO: ", estadistica.promedio(numeros));
				console.log("	MEDIANA: ", estadistica.mediana(numeros));
				console.log("	MODA: ", estadistica.moda(numeros));
				console.log("	VARIANZA: ", estadistica.varianza(numeros));
				console.log("	DESVIACION ESTANDAR: ", estadistica.desviacionEstandar(numeros));
			};
		case "2": // Muchos datos --> Meter a mano "numero"-"cantidad"
			if(selection == 2) {
				let ind = [];
				let qua = [];
				let numeros = [];
				let num = "";
				let can = "";
				console.log("Ingrese los numeros y las cantidades");
				do{
					// Primero metemos los numeros y despues su cantidad
					num = question("Numero o Tr: ");
					if (parseInt(num).toString() != "NaN") {
						ind.push(parseInt(num));
						do {
							//Preguntamos la cantidad y la guardamos
							can = question("Cantidad: ");
							if (parseInt(can).toString() != "NaN") { //Nos aseguramos que cualquier otro dato no sea admitido
								qua.push(parseInt(can));
							}
							else {
								console.log("Ingrese un caracter válido")
							};
						} while(parseInt(can).toString() == "NaN"); //Nos aseguramos que cualquier otro dato no sea admitido
					}
					else if(num !== "Tr") { //Nos aseguramos que cualquier otro dato no sea admitido
						console.log("Ingrese un caracter válido");
					};
				} while(num !== "Tr"); // Metodo de salida (modificable)
				//Unificamos las arrays
				numeros = estadistica.expandir(ind,qua);
				// Mostramos los resultados
				estadistica.tablaDraw(numeros);
				console.log("	PROMEDIO: ", estadistica.promedio(numeros));
				console.log("	MEDIANA: ", estadistica.mediana(numeros));
				console.log("	MODA: ", estadistica.moda(numeros));
				console.log("	VARIANZA: ", estadistica.varianza(numeros));
				console.log("	DESVIACION ESTANDAR: ", estadistica.desviacionEstandar(numeros));
			};
		case "3": //Colocamos un mensaje de despedida
			if (selection == 3) {console.log("Gracias por usar la calculadora")};
	};
} while (selection != 3);