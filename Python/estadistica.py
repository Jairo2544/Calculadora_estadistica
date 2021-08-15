# Primero creamos las funciones que nos ayudaran
# Ordenar un arreglo
def ordenar(array):
	array.sort()
	return array
# Eliminar ceros (5.0 => 5)
def eliminarCeros(num):
	if (num - int(num) == 0):
		num = int(num)
	return num

# Aproximar
def aproximar(num, dec):
	numero = num * (10 ** dec)
	decimales = (numero) - int(numero)
	if (decimales >= 0.5):
		numero = int(numero) + 1
	else:
		numero = int(numero)
	numero = numero / (10 ** dec)
	numero = eliminarCeros(numero)
	return numero

# Cantidad por dato
def quantity(array):
	ordenar(array)
	cantidad = []
	i = 0
	while(i < len(array)):
		quantity = 0
		a = 0
		while(a < len(array)):
			if array[i] == array[a]:
				quantity = quantity + 1 
			a = a + 1
		cantidad.append(quantity)
		i = i + 1
	return cantidad

# Sumar los elementos de un arreglo
def suma(array):
	suma = 0
	i = 0
	while(i < len(array)):
		suma = suma + array[i]
		i = i + 1
	return suma

# Dibujamos la tabla
def tablaDraw(array):
	orden =  ordenar(array)
	cantidad = quantity(array)
	print("	", "xi", "	", "fi", "	", "Fi", "	", "hi", "	", "Hi")
	# Eliminamos los repetidos
	Fi = 0
	i = 0
	# Añadimos un string para que no nos de error
	array.append("")
	while(i + 1 < len(array)):
		xd = i + 1
		if array[i] != array[xd]:
			Fi = Fi + cantidad[i]
			hi = aproximar(cantidad[i]/(len(orden)-1), 3)
			Hi = aproximar(Fi/(len(orden)-1), 3)
			print("	", orden[i], "	", cantidad[i], "	", Fi, "	", hi, "	", Hi)
		i = i + 1
	# Mostramos el total
	print("	Total:", len(orden)-1)
	array.remove("")

# Multiplicar los elementos de un arreglo
def multiplicar(array):
	multiplicar = 1
	i = 0
	while i < len(array):
		multiplicar = multiplicar * array[i]
		i = i + 1
	return multiplicar

# Promediar los elementos de un arreglo
def promedio(array):
	# Acortamos codigo con las funciones anteriores
	promedio = suma(array)/len(array)
	eliminarCeros(promedio)
	return promedio

# Encontrar la mediana de un arreglo
def mediana(array):
	array = ordenar(array)
	# Separamos los casos
	if (len(array) % 2 == 0): #Para pares:
		number1 = array[int(len(array)/2)]
		number2 = array[int(len(array)/2 - 1)]
		mediana = (number1 + number2)/2
		if mediana - int(mediana) == 0:
			mediana = int(mediana)
		return mediana
	else: # Para impares
		mediana = array[int(len(array)/2)]
		return mediana

# Encontrar la varianza para una poblacion
def varianza(array):
	suma = 0
	#Hallamos la suma de cuadrados
	i = 0
	while(i < len(array)):
		suma = suma + (array[i] ** 2)
		i = i + 1
	# Terminamos el procedimiento
	varianza = ((suma/len(array)) - (promedio(array) ** 2))
	if varianza - int(varianza) == 0:
			varianza = int(varianza)
	return varianza

#Encontrar la varianza para una muestra
def varianzaMuestra(array):
	suma = 0
	#Hallamos la suma de cuadrados
	i = 0
	while(i < len(array)):
		suma = suma + (array[i] ** 2)
		i = i + 1
	# Terminamos el procedimiento
	varianza = ((suma/(len(array)-1)) - (promedio(array) ** 2))
	if varianza - int(varianza) == 0:
			varianza = int(varianza)
	return varianza

# Desviacion Estandar para una poblacion
def desviacionEstandar(array):
	desviacionEstandar = varianza(array) ** (1/2)
	return desviacionEstandar

#Desviacion Estandar para una muestra
def desviacionEstandarMuestra(array):
	desviacionEstandar = varianzaMuestra(array) ** (1/2)
	return desviacionEstandar

#Moda
def moda(array):
	array = ordenar(array)
	# Cantidad de datos
	cantidad = quantity(array)
	#Hallar la cantidad más alta
	mayor = 0
	i = 0
	while(i < len(cantidad)):
		if (cantidad[i] > mayor):
			mayor = cantidad[i]
		i = i + 1
	# Hallar el dato con la cantidad mas alta
	moda = []
	i = 0
	array.append("")
	while(i < len(cantidad)):
		if (cantidad[i] == mayor):
			orden = i
		else:
			orden = "null"
		if orden != "null":
			xd = orden + 1
			if (array[orden] != array[xd]):
				moda.append(array[orden])
		i = i + 1
	array.remove("")
	return moda

# Unificar en una array las xi y fi
# Ej: xi = [1,2,3]
# fi = [1,3,2]
# ---> expandir(xi, fi) = [1, 2, 2, 2, 3, 3]
def expandir(xi, fi):
	expandir = []
	i = 0
	while (i < len(xi)):
		a = 0
		while (a < fi[i]):
			expandir.append(xi[i])
			a = a + 1
		i = i + 1
	return expandir

# Validar texto
def verificarTexto(text):
	cifras = list(text)
	numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
	i = 0
	ver = True
	while(i < len(cifras)):
		a = 0
		while(a < len(numeros)):
			if (cifras[i] == numeros[a]):
				ver = False
				break
			else:
				ver = True
			a = a + 1
		if(ver == True):
			break
		i = i + 1
	return ver

# Validar Arrays
def validarArray(array):
	numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
	i = 0
	ver = True
	while(i < len(array)):
		a = 0
		while(a < len(numeros)):
			if (array[i] == numeros[a]):
				ver = False
				break
			else:
				ver = True
			a = a + 1
		if(ver == True):
			break
		i = i + 1
	return ver
