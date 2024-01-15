const uriCliente = 'http://localhost:3000/cliente';
const uriAutomovel = 'http://localhost:3000/automovel';
const alterarCadastro = document.getElementById("alterar");



alterar.addEventListener("submit", function (e) {
    e.preventDefault();

    const idDoCliente = localStorage.getItem('[lavarapido-id]'); // Obtendo o ID do localStorage

    const alterarClienteAutomovel = {
        nome: alterarCadastro.nome.value,
        endereco: alterarCadastro.endereco.value,
        telefone: alterarCadastro.telefone.value,
        email: alterarCadastro.email.value,
        senha: alterarCadastro.senha.value,
        modelo: alterarCadastro.modelo.value,
        placa: alterarCadastro.placa.value,
        marca: alterarCadastro.marca.value,
    };

    const optionsAlterarClienteAutomovel = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alterarClienteAutomovel)
    };

    fetch(`${uriCliente}/${idDoCliente}`, optionsAlterarClienteAutomovel)
        .then(resp => resp.json())
        .then(resp => {
            if (resp === 202) {
                console.log("Cliente alterado com sucesso");
            } else {
                alert('Erro ao enviar dados do cliente');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar dados do cliente');
        });
});

