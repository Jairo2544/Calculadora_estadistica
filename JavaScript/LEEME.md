# Calculadora_estadistica
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

2- Para meter xi ilimitados con su respectivo fi
    
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

3- En caso de poner 3, podemos completar una tabla incompleta si es posible.

    Nos preguntara la cantidad de divisiones que hay, luego los xi y finalmente ingresaremos los fi, Fi, hi e Hi que .tengamos. El programa comenzara a resolverlo, en caso de que no tenga solucion se quedara en un bucle infinito que se puede detener con "ctrl + C".

4- En el caso del 4, podremos completar datos con intervalos
    
    Insertando los limites, la cantidad de divisiones y una columna entera (fi, Fi, hi, Hi) o insertando los datos que tengamos, nos dará la tabla hecha que mostrara la marca de clase, fi, Fi, hi, Hi, promedio, mediana, moda, varianza y desviacion estandar.

5- Sale de la calculadora
