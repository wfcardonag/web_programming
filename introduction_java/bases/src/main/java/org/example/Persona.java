package org.example;

public class Persona {

    //Atributos
    private String nombreCompleto;
    private int edad;
    private int estatura; //Definidad para cm
    private String direccion;
    private boolean estaActivo;

    public Persona(String nombreCompleto, int edad, int estatura, String direccion, boolean estaActivo) {
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.estatura = estatura;
        this.direccion = direccion;
        this.estaActivo = estaActivo;
    }


    //COMPORTAMIENTOS


    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nuevoNombre) {
        this.nombreCompleto = nuevoNombre;
    }

    public void setEdad(int nuevaEdad) {
        if(nuevaEdad < this.edad) {
            System.out.println("No se puede asignar una edad inferior a la inicial");
        } else {
            this.edad = edad;
        }
    }

    public void saltar() {
        System.out.println(nombreCompleto+ " está saltando.");
    }

    public void comer() {
        System.out.println(nombreCompleto+ "está comiendo.");
    }

    public int consultarEdad() {
        System.out.println(nombreCompleto+ " tiene "+ edad +" años.");
        return edad;
    }
}
