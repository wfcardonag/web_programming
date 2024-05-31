package org.example;

public class Profesor extends Persona{

    private String tipoProfesor;

    public Profesor(String nombreCompleto, int edad, int estatura, String direccion, boolean estaActivo, String tipoProfesor) {
        super(nombreCompleto, edad, estatura, direccion, estaActivo);
        this.tipoProfesor = tipoProfesor;
    }

    public String getTipoProfesor() {
        System.out.println("El tipo de profesor es "+tipoProfesor);
        return tipoProfesor;
    }
}
