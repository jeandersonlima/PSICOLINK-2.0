// script.js

// Função para buscar os dados da sua API (GET)
function carregarLista() {
    fetch('/api/psicologos')
        .then(res => res.json())
        .then(dados => {
            const corpoTabela = document.querySelector("#tabela tbody");
            corpoTabela.innerHTML = "";
            dados.forEach(p => {
                corpoTabela.innerHTML += `<tr><td>${p.nome}</td><td>${p.email}</td></tr>`;
            });
        });
}

// Função para enviar os dados para a sua API (POST)
function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const novoPsicologo = {
        nome: nome,
        email: email,
        idade: 0,        // Preenchendo para evitar erro 400
        senha: "123",    // Preenchendo para evitar erro 400
        cpf: "000",      // Preenchendo para evitar erro 400
        sexo: "M"        // Preenchendo para evitar erro 400
    };

    fetch('/api/psicologos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoPsicologo)
    })
    .then(res => {
        if (res.ok) {
            alert("Cadastrado com sucesso!");
            carregarLista();
        } else {
            alert("Erro ao cadastrar: Status " + res.status);
        }
    });
}

// Carrega a lista assim que a página abre
carregarLista();