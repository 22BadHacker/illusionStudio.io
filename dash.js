

const left_scroll = document.getElementById('left_scroll');
const right_scroll = document.getElementById('right_scroll');
const move = document.getElementsByClassName('move')[0];

left_scroll.addEventListener('click', ()=>{
    move.scrollLeft -=100;
});

right_scroll.addEventListener('click', ()=>{
    move.scrollLeft +=100;
});



const left_scroll2 = document.getElementById('left_scroll2');
const right_scroll2 = document.getElementById('right_scroll2');
const move2 = document.getElementsByClassName('move2')[0];

left_scroll2.addEventListener('click', ()=>{
    move2.scrollLeft -=100;
});

right_scroll2.addEventListener('click', ()=>{
    move2.scrollLeft +=100;
});

const left_scroll3 = document.getElementById('left_scroll3');
const right_scroll3 = document.getElementById('right_scroll3');
const move3 = document.getElementsByClassName('inline')[0];

left_scroll3.addEventListener('click', ()=>{
    move3.scrollLeft -=100;
});

right_scroll3.addEventListener('click', ()=>{
    move3.scrollLeft +=100;
});





let number = document.getElementById('number');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let counter = 0;
let counter1 = 0;
let counter2 = 0;

// setInterval(() => {

//     if(counter == 90){
//         clearInterval();
//     }else{
//         counter+= 1;
//         number.innerHTML = counter + '%';

//     }

// }, 45);

// setInterval(() => {

//     if(counter1 == 50){
//         clearInterval();
//     }else{
//         counter1+= 1;
//         number2.innerHTML = counter + '%';

//     }

// }, 45);

// setInterval(() => {

//     if(counter2 == 75){
//         clearInterval();
//     }else{
//         counter2+= 1;
//         number3.innerHTML = counter + '%';

//     }

// }, 45);



// let del = document.getElementById('del');
// let sure = document.querySelector('sure');
// let no = document.getElementById('no');

// del.onclick = function() => {
//     sure.style.display = flex;
// }


// del.addEventListener('click', ()=>{
//     sure.style.display = 'flex';
    
// });

// no.addEventListener('click', ()=>{
//     sure.style.display = 'none';

// });



// del.onclick = function(){
//     sure.style.display = 'flex';
// }


// function del(){
//     sure.style.display = 'flex';
// }


