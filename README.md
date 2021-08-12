# Calculadora_estadistica
This code is made with "readline-sync"

It can be installed from the console by placing "npm install readline-sync"

When we run with "node main.js"

We will give ourselves 3 options:

1- To enter unlimited data xi
    
    It will ask us "Number or Tr", when putting a number it will be added to the formula, if we put "Tr" it will give us the result and if we put another value, it will tell us to enter a valid character
    
    --> If we put the numbers: [1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 1] in any order
        It will throw us the following:
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

2- To put unlimited xi with their respective fi
    
    It will ask us "Number or Tr", when putting a number it will be added to the formula, followed by this it will ask us "quantity", here we will place the amount of repetition, when this is finished it will ask another number until we place "Tr". All fields are validated in the code (you cannot enter a word instead of a number)
    
    --> If we enter the data in this way
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

    Note: In case of repetition in the number, the amounts will be added
        Example: 
            Numero o Tr: 1
            Cantidad: 2
            Numero o Tr: 1
            Cantidad: 4
            --> It will give us
                xi      fi
                1       6

3- In case of putting 3, we will finish the code and it will give us a farewell message