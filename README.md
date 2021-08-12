# Calculadora_estadistica
Español / English
Este codigo esta hecho con "readline-sync"
Se puede instalar desde la consola colocando "npm install readline-sync"
Cuando ejecutamos con "node main.js"
Nos dará 3 opciones:
1- Para meter datos xi ilimitados
    Nos preguntara "Numero o Tr", al poner un numero se agregara a la formula, si ponemos "Tr" nos dará el resultado y si ponemos otro valor, nos dira que ingresemos un caracter válido
    --> Si metemos los numeros: [1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 1] en cualquier orden
        Nos arrojará lo siguiente:
                xi      fi
                1       2
                2       4
                3       3
                4       3
                Total: 12
                PROMEDIO:  2.5833333333333335
                MEDIANA:  2.5
                MODA:  [ 2 ]
                VARIANZA:  1.0763888888888884
                DESVIACION ESTANDAR:  1.0374916331657276 

2- Para meter x1 ilimitados con su respectivo fi
    Nos preguntara "Numero o Tr", al poner un numero se agregara a la formula, seguido de esto nos preguntará "cantidad", aquí colocaremos la cantidad de repetición, terminado esto volvera a preguntar otro número hasta que coloquemos "Tr". Todos los campos estan validados en el código (no se puede meter una palabra en vez de un numero)
    --> Si ingresamos los datos de esta manera
            Numero o Tr: 1
            Cantidad: 2
            Numero o Tr: 2
            Cantidad: 4
            Numero o Tr: 3
            Cantidad: 3
            Numero o Tr: 4
            Cantidad: 3
            Numero o Tr: Tr
                    xi      fi
                    1       2
                    2       4
                    3       3
                    4       3
                    Total: 12
                    PROMEDIO:  2.5833333333333335
                    MEDIANA:  2.5
                    MODA:  [ 2 ]
                    VARIANZA:  1.0763888888888884
                    DESVIACION ESTANDAR:  1.0374916331657276

    Nota: En caso de repeticion en el número, las cantidades se sumaran
        Ej: 
            Numero o Tr: 1
            Cantidad: 2
            Numero o Tr: 1
            Cantidad: 4
            --> Nos dará
                xi      fi
                1       6

3- En caso de poner 3, terminaremos el código y nos dará un mensaje de despedida