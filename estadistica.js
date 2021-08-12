// Primero creamos las funciones que nos ayudaran
	// Ordenar un arreglo
		function ordenar(array) {
			array.sort(function(a, b) {
				return a - b
			});
			return array;
		};

	// Cantidad por dato
	function quantity(array) {
		ordenar(array);
		let cantidad = [];
		for (i=0; i<array.length; i++) {
			let quantity = 0;
			for(a=0; a<array.length; a++){
				if(array[i] === array[a]) {
					quantity= quantity + 1 
				};
			};
			cantidad.push(quantity);
		};
		return cantidad;
	};

	// Sumar los elementos de un arreglo
		function suma(array) {
			let suma = 0;
			for(i=0; i<array.length; i++) {
				suma = suma + parseInt(array[i])
			};
			return suma;
		};

	// Dibujamos la tabla
	function tablaDraw(array) {
		let orden = ordenar(array);
		let cantidad = quantity(array);
		let cantidad2 = [];
		console.log("	 xi","	 fi");
		// Eliminamos los repetidos
		for(i = 0; i < array.length; i++){
			let xd = i + 1;
			if (array[i] != array[xd]) {
				console.log("	", orden[i], "	", cantidad[i]);
				cantidad2.push(cantidad[i]);
			};
		};
		// Mostramos el total
		console.log("	Total:", suma(cantidad2));
	};

	// Multiplicar los elementos de un arreglo
		function multiplicar(array) {
			let multiplicar = 1;
			for(i=0; i<array.length; i++) {
				multiplicar = multiplicar * parseInt(array[i])
			};
			return multiplicar;
		};
	
	// Promediar los elementos de un arreglo
		function promedio(array) {
			// Acortamos codigo con las funciones ya creadas
			let promedio = suma(array)/array.length;
			return promedio;
		};

	// Encontrar la mediana de un arreglo
		function mediana(array) {
			array = ordenar(array);
			// Separamos los casos
			if (array.length % 2 == 0) { // Para pares
				let number1 = array[array.length/2];
				let number2 = array[array.length/2 - 1];
				let mediana = (number1 + number2)/2;
				return mediana;
			}
			else { // Para impares
				let mediana = array[array.length/2 - 0.5];
				return mediana;
			}
		}

	// Encontrar la varianza
		function varianza(array) {
			let suma = 0;
			// Hallamos la suma de cuadrados
			for(i=0; i<array.length; i++) {
				suma = suma + (parseInt(array[i]) ** 2);
			}
			// Terminamos el procedimiento
			let varianza = (suma/array.length) - (promedio(array) ** 2);
			return varianza;
		};

	// Encontrar la desviacion estandar
		function desviacionEstandar(array) {
			let desviacionEstandar = varianza(array) ** (1/2);
			return desviacionEstandar;
		};

	// Encontrar la moda
		function moda(array) {
			array = ordenar(array);
			
			// Cantidad de datos
			let cantidad = quantity(array);

			// Hallar la cantidad mas alta
			let mayor = 0;

			for(i = 0; i < cantidad.length; i++){
				if (cantidad[i] > mayor)
				{
					mayor = cantidad[i];
				};
			};

			// Hallar el dato con la cantidad mas alta
			let orden;
			let moda = [];
			
			for(i = 0; i < cantidad.length; i++){
				if (cantidad[i] === mayor)
				{
					orden = i;
				}
				else {
					orden = null
				};
				
				if (orden != null) {
					let xd = orden + 1;
					if (array[orden] != array[xd]) {
						moda.push(array[orden])
					} 
				};
			}
			return moda;
		};

	// Unificar en una array las unidades y cantidades
	// Ej: num = [1,2,3]
	//     can = [1,3,2]
	//   ---> expandir(num, can) = [1, 2, 2, 2, 3, 3]
		function expandir(array, cantidad) {
			let expandir = [];
			for (i=0; i<array.length; i++){
				for(a=0; a<cantidad[i]; a++) {
					expandir.push(array[i]);
				}
			};
			return expandir;
		};

//Exportamos las funciones
module.exports.ordenar = ordenar;
module.exports.suma = suma;
module.exports.multiplicar = multiplicar;
module.exports.promedio = promedio;
module.exports.mediana = mediana;
module.exports.varianza = varianza;
module.exports.desviacionEstandar = desviacionEstandar;
module.exports.moda = moda;
module.exports.tablaDraw = tablaDraw;
module.exports.expandir = expandir;

