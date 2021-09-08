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
	console.log("3- Completar tabla")
	console.log("4- intervalos");
	console.log("5- Salir");
	selection = question("Ingrese 1, 2, 3, 4 o 5: ");
	// Separamos las selecciones
	switch(selection){
		default: // Volver a preguntar en caso de equivocación
			if (selection != 4) {console.log("¡Ingrese un caracter valido!")};
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
				console.log("	VARIANZA: ", parseFloat(estadistica.aproximar(estadistica.varianza(numeros), 3)));
				console.log("	DESVIACION ESTANDAR: ", parseFloat(estadistica.aproximar(estadistica.desviacionEstandar(numeros), 3)));
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
				console.log("	VARIANZA: ", parseFloat(estadistica.aproximar(estadistica.varianza(numeros), 3)));
				console.log("	DESVIACION ESTANDAR: ", parseFloat(estadistica.aproximar(estadistica.desviacionEstandar(numeros), 3)));
			};
		
		case "3":
			if (selection == 3) {
				let cantidad = [];
				let xi = []
				let Is;
				let x;
				let numeros;
				do {
					Is = parseInt(question("Ingrese las divisiones: "))
					if (parseInt(Is).toString() == "NaN") { 
						console.log("¡Ingrese un caracter valido!")
					}
				} while (parseInt(Is).toString() == "NaN");
				for(i=0; i < Is; i++) {
					do {
						x = question("x" + (i+1) + ": ")
						if(parseInt(x).toString() == "NaN") {
							console.log("¡Ingrese un caracter valido!")
						}
					} while (parseInt(x).toString() == "NaN");
					xi.push(parseFloat(x))
				}
				let fi = [];
				let Fi = [];
				let hi = [];
				let Hi = [];
				// Total
				let total = question ("Total de datos(opcional): ")
				//fi
				for(i = 0; i < Is; i++) {
					let f = question("f" + (i+1) + ": ");
					fi.push(parseInt(f))
				}
				//Fi
				for(i = 0; i < Is; i++) {
					let F = question("F" + (i+1) + ": ");
					Fi.push(parseInt(F))
				}
				//hi
				for(i = 0; i < Is; i++) {
					let h = question("h" + (i+1) + ": ");
					hi.push(parseFloat(h))
				}
				//Hi
				for(i = 0; i < Is; i++) {
					let H = question("H" + (i+1) + ": ");
					Hi.push(parseFloat(H))
				}
				// Calcular datos
				do{
					// total
					if (parseInt(total).toString() == "NaN") {
						if(parseInt(Fi[Is-1]).toString() != "NaN") {
							total = Fi[Is-1];
						}
					}
					//fi
					for(i= 0; i<Is; i++) {
						if (parseInt(fi[i]).toString() == "NaN") {
						if(i == 0) {
							if (parseInt(Fi[i]).toString() != "NaN") {
								fi[i] = Fi[i]
							};
							if (parseInt(total).toString() != "NaN") {
								if (parseInt(hi[i]).toString() != "NaN") {
									fi[i] = parseInt(estadistica.aproximar(hi[i]*total, 0))
								}
								if (parseInt(Hi[i]).toString() != "NaN") {
									fi[i] = parseInt(estadistica.aproximar(Hi[i]*total, 0))
								}
							}
						}
							else if(i == (Is - 1)) {
								if (parseInt(Fi[i]).toString() != "NaN" && parseInt(Fi[i - 1]).toString() != "NaN") {
									fi[i] = Fi[i] - Fi[i-1]
								};
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(hi[i]).toString() != "NaN") {
										fi[i] = parseInt(estadistica.aproximar(hi[i]*total, 0))
									}
								}
							}
							else {
								if (parseInt(Fi[i]).toString() != "NaN" && parseInt(Fi[i - 1]).toString() != "NaN") {
									fi[i] = Fi[i] - Fi[i-1]
								}
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(hi[i]).toString() != "NaN") {
										fi[i] = parseInt(estadistica.aproximar(hi[i]*total, 0))
									}
								}
							}
						}
					}
					//Fi
					for(i= 0; i<Is; i++) {
						if (parseInt(Fi[i]).toString() == "NaN") {
							if(i == 0) {
								if (parseInt(fi[i]).toString() != "NaN") {
									Fi[i] = fi[i]
								}
								if (parseInt(Fi[i+1]).toString() != "NaN" && parseInt(fi[i + 1]).toString() != "NaN") {
									Fi[i] = Fi[i+1] - fi[i+1]
								}
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(Hi[i]).toString() != "NaN") {
										Fi[i] = parseInt(estadistica.aproximar(Hi[i]*total, 0))
									}
								}
							}
							else if(i == (Is - 1)) {
								if (parseInt(Fi[i-1]).toString() != "NaN" && parseInt(fi[i]).toString() != "NaN") {
									Fi[i] = Fi[i-1] - fi[i]
								}
								if (parseInt(total).toString() != "NaN") {
									Fi[i] = total
								}
							}
							else {
								if (parseInt(Fi[i + 1]).toString() != "NaN" && parseInt(fi[i + 1]).toString() != "NaN") {
									Fi[i] = Fi[i + 1] - fi[i+1]
								}
								if (parseInt(fi[i]).toString() != "NaN" && parseInt(Fi[i - 1]).toString() != "NaN") {
									Fi[i] = fi[i] + Fi[i-1]
								}
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(Hi[i]).toString() != "NaN") {
										Fi[i] = parseInt(estadistica.aproximar(Hi[i]*total, 0))
									}
								}
							}
						}
					}
					//hi
					for(i= 0; i<Is; i++) {
						if (parseInt(hi[i]).toString() == "NaN") {
							if(i == 0) {
								if (parseInt(Hi[i]).toString() != "NaN") {
									hi[i] = Hi[i]
								};
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(fi[i]).toString() != "NaN") {
										hi[i] = fi[i]/total
									}
									if (parseInt(Fi[i]).toString() != "NaN") {
										hi[i] = Fi[i]/total
									}
								}
							}
							else if(i == (Is - 1)) {
								if (parseInt(Hi[i]).toString() != "NaN" && parseInt(Hi[i - 1]).toString() != "NaN") {
									hi[i] = Hi[i] - Hi[i-1]
								};
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(fi[i]).toString() != "NaN") {
										hi[i] = fi[i]/total
									}
								}
							}
							else {
								if (parseInt(Hi[i]).toString() != "NaN" && parseInt(Hi[i - 1]).toString() != "NaN") {
									hi[i] = Hi[i] - Hi[i-1]
								}
								if (parseInt(total).toString() != "NaN") {
									if (parseInt(fi[i]).toString() != "NaN") {
										hi[i] = fi[i]/total
									}
								}
							}
						}
					}
					//Hi
					for(i= 0; i<Is; i++) {
						if (parseInt(Hi[i]).toString() == "NaN") {
							if(i == 0) {
								if (parseInt(hi[i]).toString() != NaN) {
									Hi[i] = hi[i]
								}
								if (parseInt(Hi[i+1]).toString() != NaN && parseInt(hi[i + 1]).toString() != NaN) {
									Hi[i] = Hi[i+1] - hi[i+1]
								}
								if (parseInt(total).toString() != NaN) {
									if (parseInt(Fi[i]).toString() != NaN) {
										Hi[i] = Hi[i]/total
									}
								}
							}
							else if(i == (Is - 1)) {
								if (parseInt(Hi[i-1]).toString() != NaN && parseInt(hi[i]).toString() != NaN) {
									Hi[i] = Hi[i-1] - hi[i]
								}
								if (parseInt(total).toString() != NaN) {
									Hi[i] = 1
								}
							}
							else {
								if (parseInt(Hi[i + 1]).toString() != NaN && parseInt(hi[i + 1]).toString() != NaN) {
									Hi[i] = Hi[i + 1] - hi[i+1]
								}
								if (parseInt(hi[i]).toString() != NaN && parseInt(Hi[i - 1]).toString() != NaN) {
									Hi[i] = hi[i] + Hi[i-1]
								}
								if (parseInt(total).toString() != NaN) {
									if (parseInt(Fi[i]).toString() != NaN) {
										Hi[i] = Hi[i]/total
									}
								}
							}
						}
					}
				} while(estadistica.validarNumeros(fi) == false)
				for (i=0; i<Is;i++) {
					cantidad.push(fi[i])
				}
				//Unificamos las arrays
				numeros = estadistica.expandir(xi,cantidad);
				// Mostramos los resultados
				estadistica.tablaDraw(numeros);
				console.log("	PROMEDIO: ", estadistica.promedio(numeros));
				console.log("	MEDIANA: ", estadistica.mediana(numeros));
				console.log("	MODA: ", estadistica.moda(numeros));
				console.log("	VARIANZA: ", parseFloat(estadistica.aproximar(estadistica.varianza(numeros), 3)));
				console.log("	DESVIACION ESTANDAR: ", parseFloat(estadistica.aproximar(estadistica.desviacionEstandar(numeros), 3)));
			}
			
		case "4":
			if (selection == 4) {
				let limSup = [];
				let limInf = [];
				let marcaDeClase = [];
				let cantidad = [];
				let FiA = []
				let sup = "";
				let inf = "";
				let Is = "";

				do{ // Insertar limites
					// Primero metemos el limite superior
					inf = question("Limite Inferior: ");
					if (parseInt(inf).toString() != "NaN") {
						inf = parseInt(inf);
						do {
							//Preguntamos el limite inferior
							sup = question("Limite Superior: ");
							if (parseInt(sup).toString() != "NaN") { //Nos aseguramos que cualquier otro dato no sea admitido
								sup = parseInt(sup);
								do {
									//Preguntamos las divisiones
									Is = question("Divisiones: ");
									if (parseInt(Is).toString() == "NaN") { //Nos aseguramos que cualquier otro dato no sea admitido
										console.log("Ingrese un caracter válido");
									}
									else {
										Is = parseInt(Is)
									}
								} while(parseInt(Is).toString() == "NaN");
							}
							else {
								console.log("Ingrese un caracter válido")
							};
						} while(parseInt(sup).toString() == "NaN"); //Nos aseguramos que cualquier otro dato no sea admitido
					}
					else if(inf !== "Tr") { //Nos aseguramos que cualquier otro dato no sea admitido
						console.log("Ingrese un caracter válido");
					};
				} while(parseInt(inf).toString() == "NaN")
				
				// Hacemos los limites
				let anchoDeClase = sup - inf
				for (i=0; i < Is; i++) {
					// Hacemos el limite superior
					limSup.push(sup + (anchoDeClase * i))
					// Hacemos el limite inferior
					limInf.push(inf + (anchoDeClase * i))
				}
				//Marcas de clases
				let xi;
				for (i=0; i < Is; i++) {
					xi = (limInf[i] + limSup[i])/2
					marcaDeClase.push(xi)
				}
				// Insercion de los fi, Fi, hi, Hi
				let selection2;
				// Calculamos xi, fi y Fi
				do{
					console.log("1- Columna completa completa");
					console.log("2- Datos repartidos")
					selection2 = question("Ingrese 1 o 2: ")
					switch(selection2){
						default:
							console.log("Ingrese un caracter valido");
						
						case "1":
							if (selection2 == "1") {
								let selection3;
								do {
									console.log("1- fi");
									console.log("2- Fi");
									console.log("3- hi");
									console.log("4- Hi");
									selection3 = question("Ingrese 1, 2, 3, 4: ")
									switch(selection3){
										default:
											if ((selection3 == 1 || selection3 == 2 || selection3 == 3 || selection3 == 4) == false){
												console.log("Ingrese un caracter valido")
											}
																					
										case "1":
											if (selection3 == "1") {
												for(i=0; i < Is; i++) {
													let fi
													do {
														fi = question("f" + (i+1) + ": ")
														if (parseInt(fi).toString() == "NaN") {
															console.log("Ingrese un caracter valido")
														}
													} while (parseInt(fi).toString() == "NaN")
													cantidad.push(parseInt(fi))
												}
											}
				
										case "2":
											if (selection3 == "2") {
												let Fia = [];
												for(i=0; i < Is; i++) {
													let Fi
													do {
														Fi = question("F" + (i+1) + ": ")
														if (parseInt(Fi).toString() == "NaN") {
															console.log("Ingrese un caracter valido")
														}
														else {
															Fia.push(parseInt(Fi))
														}
													} while (parseInt(Fi).toString() == "NaN")
												};
												for (i=0; i < Is; i++) {
													if (i == 0) {
														cantidad.push(Fia[i])
													} else {
														cantidad.push(Fia[i] - Fia[i-1])
													}
												}
											}
										
										case "3":
											if (selection3 == "3") {
												let total;
												do {
													total = question("Total de Datos: ")
												} while (parseInt(total).toString == "NaN");
												for(i=0; i < Is; i++) {
													let hi
													do {
														hi = question("h" + (i+1) + ": ")
														if (parseInt(hi).toString() == "NaN") {
															console.log("Ingrese un caracter valido")
														}
													} while (parseInt(hi).toString() == "NaN")
													cantidad.push(Number(estadistica.aproximar(parseFloat(hi) * total)))
												}
											}

										case "4":
											if (selection3 == "4") {
												let total;
												let Fi = [];
												do {
													total = question("Total de Datos: ")
												} while (parseInt(total).toString == "NaN");
												for(i=0; i < Is; i++) {
													let Hi
													do {
														Hi = question("H" + (i+1) + ": ")
														if (parseInt(Hi).toString() == "NaN") {
															console.log("Ingrese un caracter valido")
														}
													} while (parseInt(Hi).toString() == "NaN")
													Fi.push(Number(estadistica.aproximar(parseFloat(Hi) * total)))
												};
												for (i=0; i < Is; i++) {
													if (i == 0) {
														cantidad.push(Fi[i])
													} else {
														cantidad.push(Fi[i] - Fi[i-1])
													}
												}
											}
									}
								} while((selection3 == 1 || selection3 == 2 || selection3 == 3 || selection3 == 4) == false);
							};

						case "2":
							if(selection2 == 2){
								let fi = [];
								let Fi = [];
								let hi = [];
								let Hi = [];
								// Total
								let total = question ("Total de datos(opcional): ")
								//fi
								for(i = 0; i < Is; i++) {
									let f = question("f" + (i+1) + ": ");
									fi.push(parseInt(f))
								}
								//Fi
								for(i = 0; i < Is; i++) {
									let F = question("F" + (i+1) + ": ");
									Fi.push(parseInt(F))
								}
								//hi
								for(i = 0; i < Is; i++) {
									let h = question("h" + (i+1) + ": ");
									hi.push(parseFloat(h))
								}
								//Hi
								for(i = 0; i < Is; i++) {
									let H = question("H" + (i+1) + ": ");
									Hi.push(parseFloat(H))
								}
								// Calcular datos
								do{
									// total
									if (parseInt(total).toString() == "NaN") {
										if(parseInt(Fi[Is-1]).toString() != "NaN") {
											total = Fi[Is-1];
										}
									}
									//fi
									for(i= 0; i<Is; i++) {
										if (parseInt(fi[i]).toString() == "NaN") {
											if(i == 0) {
												if (parseInt(Fi[i]).toString() != "NaN") {
													fi[i] = Fi[i]
												};
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(hi[i]).toString() != "NaN") {
														fi[i] = parseInt(estadistica.aproximar(hi[i]*total, 0))
													}
													if (parseInt(Hi[i]).toString() != "NaN") {
														fi[i] = parseInt(estadistica.aproximar(Hi[i]*total, 0))
													}
												}
											}
											else if(i == (Is - 1)) {
												if (parseInt(Fi[i]).toString() != "NaN" && parseInt(Fi[i - 1]).toString() != "NaN") {
													fi[i] = Fi[i] - Fi[i-1]
												};
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(hi[i]).toString() != "NaN") {
														fi[i] = parseInt(estadistica.aproximar(hi[i]*total, 0))
													}
												}
											}
											else {
												if (parseInt(Fi[i]).toString() != "NaN" && parseInt(Fi[i - 1]).toString() != "NaN") {
													fi[i] = Fi[i] - Fi[i-1]
												}
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(hi[i]).toString() != "NaN") {
														fi[i] = parseInt(estadistica.aproximar(hi[i]*total, 0))
													}
												}
											}
										}
									}
									//Fi
									for(i= 0; i<Is; i++) {
										if (parseInt(Fi[i]).toString() == "NaN") {
											if(i == 0) {
												if (parseInt(fi[i]).toString() != "NaN") {
													Fi[i] = fi[i]
												}
												if (parseInt(Fi[i+1]).toString() != "NaN" && parseInt(fi[i + 1]).toString() != "NaN") {
													Fi[i] = Fi[i+1] - fi[i+1]
												}
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(Hi[i]).toString() != "NaN") {
														Fi[i] = parseInt(estadistica.aproximar(Hi[i]*total, 0))
													}
												}
											}
											else if(i == (Is - 1)) {
												if (parseInt(Fi[i-1]).toString() != "NaN" && parseInt(fi[i]).toString() != "NaN") {
													Fi[i] = Fi[i-1] - fi[i]
												}
												if (parseInt(total).toString() != "NaN") {
													Fi[i] = total
												}
											}
											else {
												if (parseInt(Fi[i + 1]).toString() != "NaN" && parseInt(fi[i + 1]).toString() != "NaN") {
													Fi[i] = Fi[i + 1] - fi[i+1]
												}
												if (parseInt(fi[i]).toString() != "NaN" && parseInt(Fi[i - 1]).toString() != "NaN") {
													Fi[i] = fi[i] + Fi[i-1]
												}
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(Hi[i]).toString() != "NaN") {
														Fi[i] = parseInt(estadistica.aproximar(Hi[i]*total, 0))
													}
												}
											}
										}
									}
									//hi
									for(i= 0; i<Is; i++) {
										if (parseInt(hi[i]).toString() == "NaN") {
											if(i == 0) {
												if (parseInt(Hi[i]).toString() != "NaN") {
													hi[i] = Hi[i]
												};
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(fi[i]).toString() != "NaN") {
														hi[i] = fi[i]/total
													}
													if (parseInt(Fi[i]).toString() != "NaN") {
														hi[i] = Fi[i]/total
													}
												}
											}
											else if(i == (Is - 1)) {
												if (parseInt(Hi[i]).toString() != "NaN" && parseInt(Hi[i - 1]).toString() != "NaN") {
													hi[i] = Hi[i] - Hi[i-1]
												};
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(fi[i]).toString() != "NaN") {
														hi[i] = fi[i]/total
													}
												}
											}
											else {
												if (parseInt(Hi[i]).toString() != "NaN" && parseInt(Hi[i - 1]).toString() != "NaN") {
													hi[i] = Hi[i] - Hi[i-1]
												}
												if (parseInt(total).toString() != "NaN") {
													if (parseInt(fi[i]).toString() != "NaN") {
														hi[i] = fi[i]/total
													}
												}
											}
										}
									}
									//Hi
									for(i= 0; i<Is; i++) {
										if (parseInt(Hi[i]).toString() == "NaN") {
											if(i == 0) {
												if (parseInt(hi[i]).toString() != NaN) {
													Hi[i] = hi[i]
												}
												if (parseInt(Hi[i+1]).toString() != NaN && parseInt(hi[i + 1]).toString() != NaN) {
													Hi[i] = Hi[i+1] - hi[i+1]
												}
												if (parseInt(total).toString() != NaN) {
													if (parseInt(Fi[i]).toString() != NaN) {
														Hi[i] = Hi[i]/total
													}
												}
											}
											else if(i == (Is - 1)) {
												if (parseInt(Hi[i-1]).toString() != NaN && parseInt(hi[i]).toString() != NaN) {
													Hi[i] = Hi[i-1] - hi[i]
												}
												if (parseInt(total).toString() != NaN) {
													Hi[i] = 1
												}
											}
											else {
												if (parseInt(Hi[i + 1]).toString() != NaN && parseInt(hi[i + 1]).toString() != NaN) {
													Hi[i] = Hi[i + 1] - hi[i+1]
												}
												if (parseInt(hi[i]).toString() != NaN && parseInt(Hi[i - 1]).toString() != NaN) {
													Hi[i] = hi[i] + Hi[i-1]
												}
												if (parseInt(total).toString() != NaN) {
													if (parseInt(Fi[i]).toString() != NaN) {
														Hi[i] = Hi[i]/total
													}
												}
											}
										}
									}
								} while(estadistica.validarNumeros(fi) == false)
								for (i=0; i<Is;i++) {
									cantidad.push(fi[i])
								}
							}
					}
				} while((selection2 == 1 || selection2 == 2) == false);
				// Graficamos la tabla
				console.log("	", "	xi", "	", "fi", "	", "Fi", "	", "hi", "		", "Hi");
				let frecuenciaAcumulada = 0
				let total = estadistica.suma(cantidad)
				for (i=0; i < Is; i++) {
					let intervalo = "<" + limInf[i] + " ; " + limSup[i] + ">";
					frecuenciaAcumulada = frecuenciaAcumulada + cantidad[i];
					FiA.push(frecuenciaAcumulada);
					let hi = estadistica.aproximar((cantidad[i]/total)*100, 2) + " %";
					let Hi = estadistica.aproximar((frecuenciaAcumulada/total)*100, 2) + " %";
					console.log(intervalo, "	", marcaDeClase[i], "	", cantidad[i], "	", frecuenciaAcumulada, "	", hi, "	", Hi);
				}
				console.log("	Total:", total);
				// Mostrar las medidas de centralizacion
				// Promedio
				let expandir = estadistica.expandir(marcaDeClase, cantidad);
				console.log("	PROMEDIO: ", estadistica.promedio(expandir));
				// Mediana
				let med;
				if (total % 2 == 0) {
					med = total/2						
				}
				else {
					med = (total + 1)/2
				};
				for (i=0; i<cantidad.length; i++) {
					if (FiA[i]>med) {
						break;						
					}
				};
				let mediana;
				if (i == 0){
					mediana = limInf[i] + ((total/2)/cantidad[i])*anchoDeClase
				}
				else { 
					mediana = limInf[i] + (((total/2) - FiA[i-1])/cantidad[i])*anchoDeClase
				}
				console.log("	MEDIANA: ", mediana);
				// Moda
				let mod = estadistica.moda(expandir);
				let moA = []
				let modaA = []
				for (i = 0; i < Is; i++) {
					if (marcaDeClase[i] == mod) {
					moA.push(i);
					}
				};
				let moda;
				for (i = 0; i < moA.length; i++) {
					a = moA[i]
					if (a == 0){
						moda = limInf[a] + ((cantidad[a])/((cantidad[a]) + cantidad[a]))*anchoDeClase
						modaA.push(moda)
					}
					else { 
						moda = limInf[a] + (((cantidad[a]) - cantidad[a-1])/((cantidad[a] - cantidad[a-1]) + (cantidad[a] - cantidad[a+1])))*anchoDeClase
						modaA.push(moda)
					}
				}
				// Varianza
				console.log("	VARIANZA: ", parseFloat(estadistica.aproximar(estadistica.varianzaMuestra(expandir), 3)));
				// Des Estandar
				console.log("	DESVIACION ESTANDAR: ", parseFloat(estadistica.aproximar(estadistica.desviacionEstandarMuestra(expandir), 3)));
			};

		case "5": //Colocamos un mensaje de despedida
			if (selection == 5) {console.log("Gracias por usar la calculadora")};
	};
} while (selection != 5);