// === FUNÇÕES DO PSICÓLOGO ===

// Função de mostrar Alerta
function mostrarAlerta(titulo, mensagem, icone = "⚠️") {
    const modal = document.getElementById('custom-alert'); // Corrigido ID e 'B' maiúsculo
    document.getElementById('alert-title').innerText = titulo;
    document.getElementById('alert-message').innerText = mensagem;
	document.getElementById('alert-icon').innerText = icone;
	
    modal.style.display = 'flex'; // Corrigido de == para =
}

function fecharAlerta() {
    document.getElementById('custom-alert').style.display = 'none'; // Corrigido 'B' maiúsculo
}

// Função de cadastrar o psicologo
function cadastrarPsicologo() {
    // Corrigido getElementById em todos e corrigido 'document' (estava dpcument)
    const nome = document.getElementById('psi-nome').value;
    const crp = document.getElementById('psi-crp').value;
    const email = document.getElementById('psi-email').value;
    const empresaid = document.getElementById('psi-empresa').value;
    
    // Verificação de todos os campos (Corrigido de & para &&)
    if (!nome && !crp && !email && !empresaid) {
        mostrarAlerta("Formulário vazio", "Por favor, preencha os dados para realizar o cadastro");
        return;
    }
    
    if (!nome) {
        mostrarAlerta("Campo nome vazio", "Digite seu nome completo","⚠️");
        return;
    }
    
    if (!crp || crp.length < 5) {
        mostrarAlerta("CRP inválido", "O seu registro profissional está incompleto ou vazio", "⚠️");
        return;
    }
    
    if (!email.includes("@")) {
        mostrarAlerta("E-mail inválido", "Este e-mail parece não ser real. Verifique o '@'.", "⚠️");
        return; 
    }
    
    if (!empresaid) {
        mostrarAlerta("Vínculo necessário", "O ID da empresa é obrigatório", "⚠️");
        return;
    }
    
    console.log("Dados validados localmente");
    mostrarAlerta("Sucesso!!", "Dados validados! Em breve faremos a conexão com o servidor.", "✅");
} // <--- Faltava fechar essa chave!

// Função de carregar os pacientes
function carregarListaPsicologos() {
    const tabela = document.querySelector("#tabela tbody");
    if (!tabela) return;

    fetch('/api/psicologos')
        .then(res => res.json())
        .then(dados => {
            tabela.innerHTML = "";
            dados.forEach(p => {
                tabela.innerHTML += `<tr><td>${p.nome}</td><td>${p.email}</td><td>${p.crp}</td></tr>`;
            });
        })
        .catch(err => console.log("Aguardando API de psicólogos..."));
}


// === FUNÇÕES DO PACIENTE ===


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