const reviews = [
  {
    id: 1,
    name: 'Fatoumata',
    job: 'friend',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "She's very smart, friendly,and nice. She can be agressive but she has potential and she's a real one.",
  },
  {
    id: 2,
    name: 'Mr. Latortue',
    job: 'Teacher',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Fatima is a hardworking and a very bright student. She takes her learning seriously and uses creative strategies to enhance her learning skills.'"


',
  },
  {
    id: 3,
    name: 'Ms. Russiello',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'She's a bright, honest, caring young lady. Who prioritizes future endeavors, and i have a lot of respect for fatima and i'm glad to watch her grow from a teenager to a young lady.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});




























































] ;
//select items
const img = document.getElementById ('person-img');
const author = document.getElementById ('author');
const job = document.getElementById ('job');
const info = document.getElementById ('info');

const prevBtn = document.querySelector('.prev-btn');
const prevBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    const item = reviews [currentItem]; 
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function(){
     currentItem++;
     if (currentItem > reviews.length -1){
        currentItem = 0;
     }
     showPerson(currentItem);

     prevBtn.addEventListener('click', function)
     currentItem--;
     if (currentItem) > reviews.length - 1{
        currentItem = 0;   
     }
     showPerson (currentItem);

nextBtn.addEventListener('click', function(){
     currentItem++;
     if (currentItem > reviews.length -1){
        currentItem = 0;
     }
     showPerson(currentItem);

     prevBtn.addEventListener('click', function)
     currentItem--;
     if (currentItem) > reviews.length - 1{
        currentItem = 0;   
     }
     showPerson (currentItem);

        
     }



