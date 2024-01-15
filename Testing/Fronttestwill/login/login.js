const uri = 'http://localhost:3000/cliente'
function login() {
    const userName = document.querySelector('#user')
    const password = document.querySelector('#password');

    const body = {
        "email": userName.value,
        "senha": password.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/login', options)
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
            localStorage.setItem(
                `[lavarapido-email]`,
                resp.email,
            )
            localStorage.setItem(
                `[lavarapido-id]`,
                resp.id,
            )
            localStorage.setItem(
                `[lavarapido-nome]`,
                resp.nome,
            )
            
            window.location.href = '../home/';
        })
        .catch(err => console.log(err))
}

const button = document.querySelector("#botaoLogin")
button.addEventListener('click', e => {
    login()
})

