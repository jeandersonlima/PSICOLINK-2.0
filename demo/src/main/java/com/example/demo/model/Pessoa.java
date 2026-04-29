package com.example.demo.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public abstract class Pessoa { // Transformada em abstract: você não instancia uma "Pessoa", mas sim Cliente ou Psicologo
    private String nome;
    private int idade;
    private String senha;
    private String email;
    private String cpf;
    private String sexo;
    private List<String> mensagens = new ArrayList<>();

    // Construtor padrão (Essencial para APIs/Frameworks)
    public Pessoa() {}

    public Pessoa(String nome, int idade, String senha, String email, String cpf, String sexo) {
        this.nome = nome;
        this.idade = idade;
        this.senha = senha;
        this.email = email;
        this.cpf = cpf;
        this.sexo = sexo;
    }

    // Getters e Setters
    public String getNome() {
    	return nome; 
    	}
    
    public void setNome(String nome) { 
    	this.nome = nome; 
    	}

    public int getIdade() {
    	return idade;
    	}
    
    public void setIdade(int idade) {
    	this.idade = idade; 
    	}

    public String getSenha() {
    	return senha;
    	}
    
    public void setSenha(String senha) { 
    	this.senha = senha; 
    	}

    public String getEmail() {
    	return email; 
    	}
    
    public void setEmail(String email) { 
    	this.email = email; 
    	}

    public String getCpf() {
    	return cpf; 
    	}
    
    public void setCpf(String cpf) {
    	this.cpf = cpf;
    	}

    public String getSexo() { 
    	return sexo; 
    	}
    public void setSexo(String sexo) {
    	this.sexo = sexo; 
    	}

    // Retorna uma lista imutável para proteger o estado interno da classe
    public List<String> getMensagens() { 
        return Collections.unmodifiableList(mensagens); 
    }

    public void adicionarMensagem(String mensagem) {
        if (mensagem != null && !mensagem.isBlank()) {
            this.mensagens.add(mensagem);
        }
    }
}