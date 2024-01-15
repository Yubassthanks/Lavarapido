
const div = document.querySelector('.btn')
div.onclick = function() {
  document.documentElement.classList.toggle('clean')
  if(div.innerText == 'CLEAN') {
    div.innerText = 'WASH'  
  } else {
    div.innerText = 'CLEAN'
  }
}