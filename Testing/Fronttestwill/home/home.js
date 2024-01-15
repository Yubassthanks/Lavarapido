const userDoLocalStorage = localStorage.getItem("[lavarapido-nome]");
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const interval = 4000; // Tempo em milissegundos entre os slides

function nextSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
    
}

function startCarousel() {
    slides[currentIndex].style.opacity = 1;
    nextSlide(); // Chame nextSlide uma vez imediatamente
    setInterval(nextSlide, interval);
}

startCarousel();
$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

//   const div = document.querySelector('.btn')
//   div.onclick = function() {
//     document.documentElement.classList.toggle('clean')
//     if(div.innerText == 'CLEAN') {
//       div.innerText = 'WASH'  
//     } else {
//       div.innerText = 'CLEAN'
//     }
//   }

function verificaLogin() {
    if (userDoLocalStorage) {
        console.log("Usuario logado: " + userDoLocalStorage)
        const linkLogin = document.querySelector("#link-login")
        linkLogin.innerHTML = userDoLocalStorage
        const linkLogout = document.querySelector("#link-logout")
        linkLogout.classList.remove('hide')
        const linkCadastro = document.querySelector("#link-cadastro");
        linkCadastro.style.display = 'none';
    } else {
        console.log("Usuario não logado.");
    }
}

verificaLogin();

function logout() {
    localStorage.removeItem('[lavarapido-nome]');
    window.location.reload();
}

function getMensagem() {
    
}
