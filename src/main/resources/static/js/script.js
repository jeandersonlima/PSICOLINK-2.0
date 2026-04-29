

// === FUNÇÕES DO PSICÓLOGO ===

function cadastrarPsicologo() {
    const dados = {
        nome: document.getElementById('psi-nome').value,
        crp: document.getElementById('psi-crp').value,
        email: document.getElementById('psi-email').value,
        empresaId: document.getElementById('psi-empresa').value // FK para a Empresa
    };

    if (!dados.nome || !dados.crp || !dados.empresaId) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    fetch('/api/psicologos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(res => {
        if (res.ok) {
            alert("Psicólogo cadastrado com sucesso!");
            window.location.href = "psicologo.html"; // Agora sim vai para o Painel
        } else {
            alert("Erro ao cadastrar. Verifique se o ID da Empresa existe.");
        }
    })
    .catch(err => console.error("Erro na conexão:", err));
}

function carregarLista() {
    const tabela = document.querySelector("#tabela tbody");
    if (!tabela) return; // Se não estiver na página de psicólogo, não faz nada

    fetch('/api/psicologos')
        .then(res => res.json())
        .then(dados => {
            tabela.innerHTML = "";
            dados.forEach(p => {
                tabela.innerHTML += `<tr><td>${p.nome}</td><td>${p.email}</td><td>${p.crp}</td></tr>`;
            });
        });
}

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const crp = document.getElementById("crp").value;

    const novoPsicologo = {
        nome: nome,
        email: email,
        crp: crp,
        idade: 0,
        senha: "123",
        cpf: "000",
        sexo: "M"
    };

    fetch('/api/psicologos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoPsicologo)
    })
    .then(res => {
        if (res.ok) {
            alert("Psicólogo cadastrado com sucesso!");
            carregarLista();
            // Limpa os campos
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("crp").value = "";
        }
    });
}

// === FUNÇÕES DO PACIENTE ===

function carregarListaPacientes() {
    const tabelaPac = document.querySelector("#tabelaPacientes tbody");
    if (!tabelaPac) return; // Se não estiver na página de paciente, não faz nada

    fetch('/api/pacientes')
        .then(res => res.json())
        .then(dados => {
            tabelaPac.innerHTML = "";
            dados.forEach(p => {
                tabelaPac.innerHTML += `<tr><td>${p.nome}</td><td>${p.email}</td></tr>`;
            });
        });
}

function cadastrarPaciente() {
    const nome = document.getElementById("nomePac").value;
    const email = document.getElementById("emailPac").value;

    const novoPaciente = {
        nome: nome,
        email: email,
        idade: 0,
        senha: "123",
        cpf: "000",
        sexo: "M"
    };

    fetch('/api/pacientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoPaciente)
    })
    .then(res => {
        if (res.ok) {
            alert("Paciente cadastrado com sucesso!");
            carregarListaPacientes();
            document.getElementById("nomePac").value = "";
            document.getElementById("emailPac").value = "";
        }
    });
}

// Execução automática ao carregar a página
window.onload = function() {
    carregarLista();
    carregarListaPacientes();
};