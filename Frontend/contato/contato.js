document.getElementById("link-cadastro").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../cadastro"; // Substitua com o caminho correto para a página de cadastro
});

function openSocialMedia(url) {
    window.open(url, '_blank');
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Aqui você pode adicionar a lógica para enviar o formulário, como usando AJAX para enviar para um servidor.
    // Por exemplo:
    // var formData = new FormData(this);
    // ... lógica AJAX para enviar o formulário ...
});