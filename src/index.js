console.log("Hello from Rafa prof!");

// selecting an element
const p = document.querySelector('p');
const anakin = document.querySelector('#anakin');

// checking its properties
console.log(p.innerText)
console.log(anakin.innerText)

// selecting several elements
const lis = document.querySelectorAll('#fifa-wins li')
lis[3].insertAdjacentHTML('afterend', '<li style="color: blue">France (2 wins)</li>')

lis.forEach((li) => {
  li.style.color = 'blue';
})

// manipulating the object's properties
// - display
// p.style.display = 'none'

// - classes
anakin.classList.add('big');
anakin.classList.remove('red');
anakin.classList.toggle('red'); // toggles the class on/off 

// - inputs
const input = document.querySelector('input');
input.value = 'Piccin'

// - text/html
p.innerText = "Batch #616 <b>rocks</b>!"
// p.innerHTML = "Batch #616 <b>rocks</b>!"

// - datasets


// events

// metodo 4 passos do apocalipse
// 1 - pegar os elementos
const imgs = document.querySelectorAll('img');

// 2 - qual acao devemos prestar atencao
const eventType = 'click';

// 3 - o que deve acontecer quando a acao for ativada
const action = (event) => {
  event.currentTarget.classList.toggle('img-circle');
}

// opt - forEach (caso tenhamos selecionado varios elementos no passo 1)
imgs.forEach((img) => {
  // 4 - junta tudo (1.addEventListener(2, 3))
  img.addEventListener(eventType, action);
})

// metodo tudo junto misturado

// imgs.forEach((img) => {
//   img.addEventListener('click', (event) => {
//     event.currentTarget.classList.toggle('img-circle');
//   })
// })
