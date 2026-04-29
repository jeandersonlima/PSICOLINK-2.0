package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Psicologo;

@RestController
@RequestMapping("/api/psicologos")
@CrossOrigin(origins = "*") // Importante para o futuro Front-end não ser bloqueado
public class PsicologoController {

    // Criamos uma lista na memória que começa vazia
    private List<Psicologo> bancoDeDadosFake = new ArrayList<>();

    // ROTA GET: Para buscar os dados
    @GetMapping
    public List<Psicologo> listar() {
        return bancoDeDadosFake;
    }

    // ROTA POST: Para o Front-end ENVIAR dados para o Java
    @PostMapping
    public String cadastrar(@RequestBody Psicologo novoPsicologo) {
        bancoDeDadosFake.add(novoPsicologo);
        return "Psicólogo " + novoPsicologo.getNome() + " cadastrado com sucesso!";
    }
}