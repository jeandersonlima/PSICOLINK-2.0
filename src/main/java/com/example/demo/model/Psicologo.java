package com.example.demo.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.model.Pessoa;

public class Psicologo extends Pessoa {
    private Double salario;
    private int sessoes;
    private List<Integer> avaliacoes = new ArrayList<>();
    private Map<String, List<String>> anotacoesPacientes = new HashMap<>();
    private String crp;
    private String especialidade;

    public Psicologo() { super(); }

    public Psicologo(String nome, int idade, String senha, String email, String cpf, String sexo, String crp, String especialidade ) {
           super(nome, idade, senha, email, cpf, sexo);
           this.crp = crp;
           this.especialidade = especialidade;
    }

    public Double getSalario() {
    	return salario; 
    	}
    
    public void setSalario(Double salario) { 
    	this.salario = salario; 
    	}

    public int getSessoes() {
    	return sessoes; 
    	}
    
    public void setSessoes(int sessoes) { 
    	this.sessoes = sessoes; 
    	}

    public void adicionarAvaliacao(int nota) {
        this.avaliacoes.add(nota);
    }

    public double getAvaliacaoMedia() {
        return avaliacoes.stream()
                .mapToInt(Integer::intValue)
                .average()
                .orElse(0.0);
    }

    public void adicionarAnotacao(String nomePaciente, String anotacao) {
        if (nomePaciente != null && anotacao != null) {
            this.anotacoesPacientes.computeIfAbsent(nomePaciente, k -> new ArrayList<>()).add(anotacao);
        }
    }

    public Map<String, List<String>> getAnotacoesPacientes() {
        return anotacoesPacientes;
    }

	public String getEspecialidade() {
		return especialidade;
	}

	public void setEspecialidade(String especialidade) {
		this.especialidade = especialidade;
	}
}