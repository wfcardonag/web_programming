package org.example;

public class Estudiante extends Persona{

    private String carrera;

    public Estudiante(String nombreCompleto, int edad, int estatura, String direccion, boolean estaActivo, String carrera) {
        super(nombreCompleto, edad, estatura, direccion, estaActivo);
        this.carrera = carrera;
    }

    public void imprimirCarrera() {
        System.out.println("El estudiante está cursando la carrera: "+this.carrera);
    }
}
