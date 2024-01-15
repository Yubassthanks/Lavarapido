const uriCliente = 'http://localhost:3000/cliente';
const uriAutomovel = 'http://localhost:3000/automovel';
const cadastro = document.querySelector('#cadastro');

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const clienteAutomovel = {
        nome: cadastro.nome.value,
        endereco: cadastro.endereco.value,
        telefone: cadastro.telefone.value,
        email: cadastro.email.value,
        senha: cadastro.senha.value,
        modelo: cadastro.modelo.value,
        placa: cadastro.placa.value,
        marca: cadastro.marca.value,
    };

    const optionsClienteAutomovel = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clienteAutomovel)
    };
    
    
    fetch(uriCliente + '/criar', optionsClienteAutomovel)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) {
                console.log(resp)
                window.location.href = '../home/';
            } else {
                alert('Erro ao enviar dados do cliente');
            }
        });

});
