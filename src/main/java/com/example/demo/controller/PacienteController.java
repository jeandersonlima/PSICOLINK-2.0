package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Paciente;

@RestController
@RequestMapping("/api/pacientes")
@CrossOrigin("*")
public class PacienteController {
	
    private List<Paciente> listaPacientes = new ArrayList<>();

    @GetMapping
    public List<Paciente> listar() {
        return listaPacientes;
    }
    
  
    @PostMapping
    public void cadastrar(@RequestBody Paciente p) {
        listaPacientes.add(p);
        System.out.println("Paciente cadastrado: " + p.getNome());
    }
}