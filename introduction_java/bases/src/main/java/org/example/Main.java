package org.example;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world!");
        System.out.println("Hello world cruel!");

        //Tipos de datos
        int numero_1 = 5;
        boolean isTrue = Boolean.TRUE;
        float decimalPi = 3.1416f;
        double decimalDoublePi = 3.1416;
        char letra = 'a';
        String letras = "aeiou";
        Double decimalDoublePi2 = 3.1416;

        //Casting
        String numeroEnString = "25";
        int castingStringToInt = Integer.parseInt(numeroEnString);
        int parteEnteraDePI = (int) decimalDoublePi;


        System.out.println("Parte entera de PI "+ parteEnteraDePI);

        validarCondicionales(1,2);
        validarCondicionales(4,2);
        validarCondicionales(2,2);
        validarCondicionales(5,3);
        validarCondicionales(7,8);

        /*var scanner = new Scanner(System.in);
        System.out.println("Por favor digite el primer número:");
        int numeroUnoUsuario = scanner.nextInt();
        System.out.println("Por favor digite el segundo número:");
        int numeroDosUsuario = scanner.nextInt();

        validarCondicionales(numeroUnoUsuario, numeroDosUsuario);*/

        validarFuncionamientoBucles();

        Persona primeraPersona = new Persona("Juan Valdez", 56, 168, "Antioquia", true);
        primeraPersona.comer();
        primeraPersona.consultarEdad();
        primeraPersona.saltar();

        Persona segundaPersona = new Persona("Juan Martine<", 51, 175, "Antioquia", true);
        segundaPersona.saltar();
        segundaPersona.setEdad(48);


        int edadSegundaPersona = segundaPersona.consultarEdad();
        System.out.println(edadSegundaPersona);

        List<Persona> miListaPersonas = List.of(primeraPersona, segundaPersona);
        System.out.println("La lista de  personas tiene "+miListaPersonas.size());


        Estudiante terceraPersona = new Estudiante("Pepito Perez", 25, 165, "Antioquia", true, "Administración de Sistemas");
        terceraPersona.consultarEdad();
        terceraPersona.saltar();
        terceraPersona.comer();
        terceraPersona.imprimirCarrera();

        Profesor miProfe = new Profesor("Ricardo Perez", 36, 165, "Antioquia", true, "Planta");
        miProfe.consultarEdad();
        miProfe.saltar();
        miProfe.getTipoProfesor();

    }

    //Modificadores acceso: public, private, protected
    // Sí retorna o no, si sí (double, char, int, String) sino (void)
    // Nombre de la función
    // Si no recibe parámetros se deja los paréntesis vacíos
    // En caso de recibir parámetros, hay que definir los tipos de datos.

    /**
     * Método para validar los condicionales fundamentales
     * @param numeroUno Este es el número uno
     * @param numeroDos Este es el número dos
     */
    private static void validarCondicionales(int numeroUno, int numeroDos) {
        // Condicionales if, else, else if, switch
        // if(condicion) { contenido si la condicion se cumple }
        // Comparar igual ==
        // Comparar diferente !=
        // Comparar mayor que >
        // Comparar menor que <
        // Compara mayor o igual >=
        // Comparar menor o igual que <=
        // Que se cumplan dos o más condiciones &&
        // Que se cumpla una de las condiciones ||

        System.out.println("----------------------------------------------");
        System.out.println("El número uno: "+numeroUno);
        System.out.println("El número dos: "+numeroDos);


        if(numeroUno == numeroDos) {
            System.out.println("Los dos números son iguales.");
        } else if(numeroUno > numeroDos) {
            System.out.println("El número uno es mayor que el número dos.");
        } else if(numeroUno < numeroDos) {
            System.out.println("El número uno es menor que el número dos.");
        }

        if(numeroUno >= numeroDos) {
            System.out.println("El número uno es mayor o igual al número dos");
        }

        if(numeroUno <= numeroDos) {
            System.out.println("El número uno es menor o igual al número dos");
        }

        if((numeroUno%2 == 0 ) && (numeroDos%2 == 0)) {
            System.out.println("Ambos números son pares");
        }

        if((numeroUno%2 == 0 ) || (numeroDos%2 == 0)) {
            System.out.println("Uno de los números es par");
        }

    }

    /**
     * Método para validar el funcionamiento de los bucles for, while, do while
     */
    private static void validarFuncionamientoBucles() {
        for (int i = 1; i <= 10; i++) {
            System.out.println("Ciclo FOR, número :"+i);
        }

        List<String> listaVocales = List.of("a", "e", "i", "o", "u");
        int iteradorWhile = 0;
        while(iteradorWhile < listaVocales.size()) {
            System.out.println("La vocal es "+ listaVocales.get(iteradorWhile)+ " que está en la posición "+iteradorWhile);
            iteradorWhile++;
        }

        var listaDeFrutas = new ArrayList<String>();
        listaDeFrutas.add("Manzana");
        listaDeFrutas.add("Banano");
        listaDeFrutas.add("Pera");

        int iteradorFrutas = 0;
        do {
            System.out.println("Posición Iterador "+iteradorFrutas+"Fruta: "+listaDeFrutas.get(iteradorFrutas));
            iteradorFrutas++;
        } while (iteradorFrutas<listaDeFrutas.size());


    }
}