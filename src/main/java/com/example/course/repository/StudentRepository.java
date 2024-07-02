package com.example.course.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.course.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
