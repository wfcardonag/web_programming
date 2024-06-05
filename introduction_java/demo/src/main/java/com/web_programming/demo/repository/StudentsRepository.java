package com.web_programming.demo.repository;

import com.web_programming.demo.model.Students;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentsRepository extends CrudRepository<Students, Long> {
}
