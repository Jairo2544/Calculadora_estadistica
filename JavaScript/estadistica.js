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

	// aproximar
		function aproximar(num, dec) {
			let decimal = (num.toFixed(dec + 1)) * (10 ** (dec + 1)) - (num.toFixed(dec)) * (10 ** (dec + 1));
			let aproximado;
			if (decimal >= 5) {
				aproximado = ((num.toFixed(dec)) * (10 ** dec) + 1) / (10 ** dec)
			}
			else {
				aproximado = num.toFixed(dec)
			};
			return parseFloat(aproximado).toFixed(dec);
		};

	// Sumar los elementos de un arreglo
		function suma(array) {
			let suma = 0;
			for(i=0; i<array.length; i++) {
				suma = suma + array[i];
			};
			return suma;
		};

	// Dibujamos la tabla
		function tablaDraw(array) {
			let orden = ordenar(array);
			let cantidad = quantity(array);
			if(typeof(array[0]) == "number"){
				console.log("	", "xi", "	", "fi", "	", "Fi", "	", "hi", "		", "Hi");
				// Eliminamos los repetidos
				let Fi = 0;
				for(i = 0; i < array.length; i++){
					let xd = i + 1;
					// Mostramos la tabla
					if (array[i] != array[xd]) {
						Fi = Fi + cantidad[i];
						let hi = aproximar((cantidad[i]/orden.length)*100, 2) + " %";
						let Hi = aproximar((Fi/orden.length)*100, 2) + " %";
						console.log("	", orden[i], "	", cantidad[i], "	", Fi, "	", hi, "	", Hi);
					};
				};
				// Mostramos el total
				console.log("	Total:", orden.length);
			}
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

	// Encontrar la varianza para una poblacion
		function varianza(array) {
			let suma = 0;
			// Hallamos la suma de cuadrados
			for(i=0; i<array.length; i++) {
				suma = suma + (array[i] ** 2);
			}
			// Terminamos el procedimiento
			let varianza = (suma/array.length) - (promedio(array) ** 2);
			return varianza;
		};

	// Encontrar la varianza para una muestra
		function varianzaMuestra(array) {
			let suma = 0;
			// Hallamos la suma de cuadrados
			for(i=0; i<array.length; i++) {
				suma = suma + (array[i] ** 2);
			}
			// Terminamos el procedimiento
			let varianza = (suma/(array.length-1)) - (promedio(array) ** 2);
			return varianza;
		};

	// Encontrar la desviacion estandar para una poblacion
		function desviacionEstandar(array) {
			let desviacionEstandar = varianza(array) ** (1/2);
			return desviacionEstandar;
		};

	// Encontrar la desviacion estanda para una muestra
		function desviacionEstandarMuestra(array) {
			let desviacionEstandar = varianzaMuestra(array) ** (1/2);
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

	// Validar numeros
		function validarNumeros(array) {
			let bolean
			for(i = 0; i < array.length; i++) {
				if (parseInt(array[i]).toString() == "NaN") {
					bolean = false;
					break;
				}
				else {
					bolean = true;
				}
			}
			return bolean
		}

	// Unificar en una array las x1 y f1
	// Ej: xi = [1,2,3]
	//     fi = [1,3,2]
	//   ---> expandir(xi, fi) = [1, 2, 2, 2, 3, 3]
		function expandir(xi, fi) {
			let expandir = [];
			for (i=0; i<xi.length; i++){
				for(a=0; a<fi[i]; a++) {
					expandir.push(xi[i]);
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
module.exports.aproximar = aproximar;
module.exports.validarNumeros = validarNumeros;
module.exports.varianzaMuestra = varianzaMuestra;
module.exports.desviacionEstandarMuestra = desviacionEstandarMuestra;