package com.web_programming.demo.controller;

import ch.qos.logback.core.util.StringUtil;
import com.web_programming.demo.model.Students;
import com.web_programming.demo.repository.StudentsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CreateStudent {

    private StudentsRepository estudiantes;

    public CreateStudent(StudentsRepository estudiantes) {
        this.estudiantes = estudiantes;
    }

    @PostMapping("/createStudent")
    public ResponseEntity<String> createStudent(@RequestBody Students studentToCreate) {
        if(studentToCreate.getAddress().isBlank() ||
        studentToCreate.getName().isBlank() ||
        studentToCreate.getLastname().isBlank()) {
            return ResponseEntity.badRequest().body("La información para la creación está incompleta");
        }

        estudiantes.save(studentToCreate);
        return ResponseEntity.ok("Se creó el estudiante correctamente.");
    }
}
