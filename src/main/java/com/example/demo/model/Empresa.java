package com.example.demo.model;

public class Empresa {
    private String nome;
    private String cnpj;
    private String email;
    private String senha;
    private static final double VALOR_POR_SESSAO = 50.0;

    public Empresa() {}

    public Empresa(String nome, String cnpj, String email, String senha) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.email = email;
        this.senha = senha;
    }

    // Getters e Setters padrão...
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getCnpj() { return cnpj; }
    public void setCnpj(String cnpj) { this.cnpj = cnpj; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    // Métodos de Regra de Negócio (Preparados para receber objetos)
    public String gerarEmailCorporativo(Psicologo psicologo) {
        if (psicologo == null || psicologo.getNome() == null) return "email@empresa.com";
        return psicologo.getNome().toLowerCase().replace(" ", ".") + "@empresa.com";
    }

    public double calcularFolhaPagamento(Psicologo psicologo) {
        if (psicologo == null) return 0.0;
        return psicologo.getSessoes() * VALOR_POR_SESSAO;
    }
}