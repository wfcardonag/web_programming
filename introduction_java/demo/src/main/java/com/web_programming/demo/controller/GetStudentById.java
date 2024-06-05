package com.web_programming.demo.controller;

import com.web_programming.demo.model.Students;
import com.web_programming.demo.repository.StudentsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetStudentById {

    private StudentsRepository estudiantes;

    public GetStudentById(StudentsRepository estudiantes) {
        this.estudiantes = estudiantes;
    }

    /**
     * Método para consultar un estudiante por un id determinado
     * @param idStudent Id del estudiante
     * @return Un objeto que representa al estudiante
     */
    @GetMapping("/getStudentById")
    public ResponseEntity<Students> getStudentById(@RequestParam int idStudent) {
        var estudiante = estudiantes.findById((long) idStudent);
        if(estudiante.isPresent()) {
            return ResponseEntity.ok(estudiante.get());
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
