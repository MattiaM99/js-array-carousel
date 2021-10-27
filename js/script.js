const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector(".carosello-left");
const sliderRight = document.querySelector(".carosello-right")
let contatore = 0;
let contatoreRight = 0;

// CICLO SLIDER LEFT
for(let i = 0; i < items.length; i++){
  const box = document.createElement("div");
  box.className = 'box';

  if( i === contatore){
    box.classList.add("active")
  }
  box.innerHTML =
   `<img src="${items[i]}">
   <div class="titolo"><h3>${title[i]}</h3></div>
   <div class="caption"><p>${text[i]}</p></div>
   `
   slider.append(box);
}

// CICLO SLIDER RIGHT
for(let i = 0; i < items.length; i++){
  const boxRight = document.createElement("div");
  boxRight.className = 'box-right';

  if( i === contatoreRight){
    boxRight.classList.add("active-thumb")
  }
  boxRight.innerHTML =
   `<img src="${items[i]}">`
   sliderRight.append(boxRight);
}


const immagini = document.getElementsByClassName('box');

prev.addEventListener('click',function(){
  immagini[contatore].classList.remove('active');
  console.log(immagini[contatore]);

  contatore--;
  // una volta che il contatore raggiunge lo 0, torna a lenght-1 al posto di andare sotto lo 0
  if(contatore < 0) contatore = immagini.length - 1;
  immagini[contatore].classList.add('active');
  console.log(immagini[contatore]);
});

next.addEventListener('click',function(){
  immagini[contatore].classList.remove('active');
  contatore++;
  // una volta raggiunto il limite della lunghezza dell'array ricomincio da 0
  if(contatore > immagini.length - 1) contatore = 0;
  immagini[contatore].classList.add('active');
});



const thumbnail = document.getElementsByClassName('box-right');

prev.addEventListener('click',function(){
  thumbnail[contatoreRight].classList.remove('active-thumb');
  console.log(thumbnail[contatoreRight]);

  contatoreRight--;
  // una volta che il contatore raggiunge lo 0, torna a lenght-1 al posto di andare sotto lo 0
  if(contatoreRight < 0) contatoreRight = thumbnail.length - 1;
  thumbnail[contatoreRight].classList.add('active-thumb');
  console.log(thumbnail[contatoreRight]);
});

next.addEventListener('click',function(){
  thumbnail[contatoreRight].classList.remove('active-thumb');
  contatoreRight++;
  // una volta raggiunto il limite della lunghezza dell'array ricomincio da 0
  if(contatoreRight > thumbnail.length - 1) contatoreRight = 0;
  thumbnail[contatoreRight].classList.add('active-thumb');
});