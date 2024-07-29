// First Box

const box = document.getElementById('box')
function openBox(){
    box.style.display = 'flex';
}


function closeBox(){
    box.style.display = 'none';
}



// Second box
const boxs = document.getElementById('boxs')
function openBoxs(){
    boxs.style.display = 'flex';
}

function closeBoxs(){
    boxs.style.display = 'none';

}



// Third Box

const boxss = document.getElementById('boxss')
function openBoxss(){
    boxss.style.display = 'flex';
}

function closeBoxss(){
    boxss.style.display = 'none';
}




// Third Box
const boxsss = document.getElementById('boxsss')

function openBoxsss(){
    boxsss.style.display = 'flex';
}
function closeBoxsss(){
    boxsss.style.display = 'none';
    
}

// Third Box
const boxssss = document.getElementById('boxssss')

function openBoxssss(){
    boxssss.style.display = 'flex';
}
function closeBoxssss(){
    boxssss.style.display = 'none';
    
}



// for Scorlling left to right

let left_scrolls = document.getElementById('left_scrolls');
let right_scroll = document.getElementById('right_scrolls');

let move = document.getElementsByClassName('column')[0];

left_scrolls.addEventListener('click', ()=>{
    move.scrollLeft -=400;
});

right_scroll.addEventListener('click', ()=>{
    move.scrollLeft +=350;
});



// for Scorlling left to right
let left_scroll1 = document.getElementById('left_scrolls1');
let right_scroll1 = document.getElementById('right_scrolls1');

let move1 = document.getElementsByClassName('column1')[0];

left_scroll1.addEventListener('click', ()=>{
    move1.scrollLeft -=400;
});

right_scroll1.addEventListener('click', ()=>{
    move1.scrollLeft +=350;
});






