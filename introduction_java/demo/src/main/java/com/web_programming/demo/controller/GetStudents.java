package com.web_programming.demo.controller;

import com.web_programming.demo.model.Students;
import com.web_programming.demo.repository.StudentsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GetStudents {

    private StudentsRepository estudiantes;

    public GetStudents(StudentsRepository estudiantes) {
        this.estudiantes = estudiantes;
    }

    /**
     * Método para consultar los estudiantes
     * @return Devuelve la lista de estudiantes
     */
    @GetMapping("/getAllStudents")
    public Iterable<Students> getAllStudents() {
        var listaDeEstudiantes = estudiantes.findAll();
        return listaDeEstudiantes;
    }
}
