import estadistica
# Hacemos el interfaz
selection = 0
while (selection != "3"):
	#Guia
	print("1- Pocos datos")
	print("2- Muchos datos")
	print("3- Salir")
	selection = input("Ingrese 1, 2 o 3: ")
	# Para el caso 1
	if (selection == "1"):
		numeros = []
		num = ""
		print("Ingrese los numeros")
		while (num != "Tr"): # Metodo de salida
			num = input("Numero o Tr: ")
			# Verificamos que no sea texto
			if (estadistica.verificarTexto(num) == False):
				numeros.append(int(num))
			elif (num != "Tr"):
				print("¡Ingrese un numero valido!")
		# Mostrando los resultados
		estadistica.tablaDraw(numeros)
		print("	PROMEDIO: ", estadistica.promedio(numeros))
		print("	MEDIANA: ", estadistica.mediana(numeros))
		print("	MODA: ", estadistica.moda(numeros))
		print("	VARIANZA: ", estadistica.varianza(numeros))
		print("	DESVIACION ESTANDAR: ", estadistica.desviacionEstandar(numeros))
	#Para el caso 2
	elif (selection == "2"):
		ind = []
		qua = []
		num = ""
		can = ""
		print("Ingrese los numeros y las cantidades")
		while (num != "Tr"):
			num = input("Numero o Tr: ")
			# Verificamos que no sea texto
			if (estadistica.verificarTexto(num) == False):
				ind.append(int(num))
				can = ""
				while(estadistica.verificarTexto(can) == True):
					can = input("Cantidad: ")
					if (estadistica.verificarTexto(can) == False):
						qua.append(int(can))
					else:
						print("¡Ingrese un numero valido!")
			elif (num != "Tr"):
				print("¡Ingrese un numero valido!")
		# Unificamos las arrays
		numeros = estadistica.expandir(ind, qua)
		# Mostramos los resultados
		estadistica.tablaDraw(numeros);
		print("	PROMEDIO: ", estadistica.promedio(numeros))
		print("	MEDIANA: ", estadistica.mediana(numeros))
		print("	MODA: ", estadistica.moda(numeros))
		print("	VARIANZA: ", estadistica.varianza(numeros))
		print("	DESVIACION ESTANDAR: ", estadistica.desviacionEstandar(numeros))
	#Para el caso 3
	elif (selection == "3"):
		print("¡Adios!")
	else:
		print("¡Ingrese un numero valido!")