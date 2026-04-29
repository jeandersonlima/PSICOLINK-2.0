package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.Pessoa;

public class Paciente extends Pessoa {
    private List<Integer> avaliacoesFeitas = new ArrayList<>();
    private static final double VALOR_MENSALIDADE_PADRAO = 150.0;
    
    public Paciente() { super(); }

    public Paciente(String nome, int idade, String senha, String email, String cpf, String sexo) {
        super(nome, idade, senha, email, cpf, sexo);
    }

    public void avaliarPsicologo(Psicologo psicologo, int nota) {
        if (psicologo != null && nota >= 0 && nota <= 10) {
            psicologo.adicionarAvaliacao(nota);
            this.avaliacoesFeitas.add(nota);
        }
    }

    public List<Integer> getAvaliacoesFeitas() {
        return avaliacoesFeitas;
    }

    public double getMensalidade() {
        return VALOR_MENSALIDADE_PADRAO;
    }
}