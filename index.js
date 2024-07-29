let left_scroll = document.getElementById('left_scrolls');
let right_scroll = document.getElementById('right_scrolls');

let playlist = document.getElementsByClassName('playlist')[0];

left_scroll.addEventListener('click', () => {
    playlist.scrollLeft -= 100;
});

right_scroll.addEventListener('click', () => {
    playlist.scrollLeft += 100;
});




let left_scrollss = document.getElementById('left_scrollss');
let right_scrollss = document.getElementById('right_scrollss');

let male = document.getElementsByClassName('playlists')[0];

left_scrollss.addEventListener('click', () => {
    male.scrollLeft -= 100;
});

right_scrollss.addEventListener('click', () => {
    male.scrollLeft += 100;
});




let left_scrolls = document.getElementById('scroll_lefts1');
let right_scrolls = document.getElementById('scroll_rights1');

let female = document.getElementsByClassName('playlist1')[0];

left_scrolls.addEventListener('click', () => {
    female.scrollLeft -= 100;
});

right_scrolls.addEventListener('click', () => {
    female.scrollLeft += 100;
});



let left_list = document.getElementById('left_list');
let right_list = document.getElementById('right_list');

let lists = document.getElementsByClassName('list')[0];

left_list.addEventListener('click', () => {
    lists.scrollLeft -= 100;
});

right_list.addEventListener('click', () => {
    lists.scrollLeft += 100;
});


let left_song = document.getElementById('left_song');
let right_song = document.getElementById('right_song');

let songs = document.getElementsByClassName('songs')[0];

left_song.addEventListener('click', () => {
    songs.scrollLeft -= 100;
});

right_song.addEventListener('click', () => {
    songs.scrollLeft += 100;
});



let left_podcast = document.getElementById('left_scroll4');
let right_podcast = document.getElementById('right_scroll4');

let podcast = document.getElementsByClassName('podcast')[0];

left_podcast.addEventListener('click', () => {
    podcast.scrollLeft -= 100;
});

right_podcast.addEventListener('click', () => {
    podcast.scrollLeft += 100;
});



let left_band = document.getElementById('left_scroll6');
let right_band = document.getElementById('right_scroll6');

let band = document.getElementsByClassName('band')[0];

left_band.addEventListener('click', () => {
    band.scrollLeft -= 100;
});

right_band.addEventListener('click', () => {
    band.scrollLeft += 100;
});

let left_dj = document.getElementById('left_scroll7');
let right_dj = document.getElementById('right_scroll7');

let dj = document.getElementsByClassName('dj')[0];

left_dj.addEventListener('click', () => {
    dj.scrollLeft -= 100;
});

right_dj.addEventListener('click', () => {
    dj.scrollLeft += 100;
});


let left_maroc = document.getElementById('left_maroc');
let right_maroc = document.getElementById('right_maroc');

let maroc = document.getElementsByClassName('maroc')[0];

left_maroc.addEventListener('click', () => {
    maroc.scrollLeft -= 100;
});

right_maroc.addEventListener('click', () => {
    maroc.scrollLeft += 100;
});



let left_marocs = document.getElementById('left_marocs');
let right_marocs = document.getElementById('right_marocs');

let marocs = document.getElementsByClassName('marocs')[0];

left_marocs.addEventListener('click', () => {
    marocs.scrollLeft -= 100;
});

right_marocs.addEventListener('click', () => {
    marocs.scrollLeft += 100;
});






let ads = document.getElementById('adss');
// setTimeout(function() => {
//     ads.style.display = 'none';
// }, 5000);



function out() {
    ads.style.display = 'none';
    ads.style.transition = 3;
}

const myTime = setTimeout(out, 6000);







const open = document.getElementById('open');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');



function clickMe() {
    open.play();
    open.style.display = 'block';
};



function clickMe1() {
    open1.play();
    open1.style.display = 'block';
};


function clickMe2() {
    open2.play();
    open2.style.display = 'block';
};



function clickMe3() {
    open3.play();
    open3.style.display = 'block';
};


function clickMe4() {
    open4.play();
    open4.style.display = 'block';
};


function clickMe5() {
    open5.play();
    open5.style.display = 'block';
};





// Pop ups

const popUp = document.getElementById('pop');
const close = document.getElementById('close');



close.onclick = function () {
    popUp.style.display = 'none';
}

function selina() {
    popUp.style.display = 'block';
}



const popUp2 = document.getElementById('pop2');
const close2 = document.getElementById('close2');

const popUp3 = document.getElementById('pop3');
const close3 = document.getElementById('close3');


close2.onclick = function () {
    popUp2.style.display = 'none';
}

// function kara(){
//     popUp2.style.display = 'block';
// }


const kara = document.getElementById('kara');

kara.addEventListener('click', () => {
    popUp2.style.display = 'block';
});




const bad = document.getElementById('bad');

close3.onclick = function () {
    popUp3.style.display = 'none';
}

bad.addEventListener('click', () => {
    popUp3.style.display = 'block';
});



const showMe = document.getElementById('showMe');
const closeUp = document.getElementById('closeUp');
const show = document.getElementById('showUp');

showMe.onclick = function () {
    show.style.display = 'block';
    closeUp.style.display = 'block';
    showMe.style.display = 'none';
}

closeUp.addEventListener('click', () => {
    show.style.display = 'none';
    closeUp.style.display = 'none';
    showMe.style.display = 'block';
});








// Musiiiiic



const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackTitle = document.getElementById('trackTitle');
const artistName = document.getElementById('artistName');
const cover = document.getElementById('cover');
const slider = document.querySelector('.slider');
const sliderThumb = document.querySelector('.slider-thumb');
const progress = document.querySelector('.progress');
const time = document.getElementById('time');
const fullTime = document.getElementById('fullTime');

// const vSlider = document.querySelector('.slider');
// const vProgress = document.querySelector('.progress');
// const vIcon = document.querySelector('.v-icon');



// Is track Playing
let trackPlaying = false;

// Is the Valume Muted
// let volumeMuted = false;

// which Track is currently loaded (based on the numerical id)
let trackId = 0;


// data
// Track names
const tracks = [
    'Austin',
    'Lose Control',
    // 'Foolish',
    'ADHD',
    'Unsure',
    'Love Alone',
    "Love Just Ain't Enough",
    'Bad guy',
    'Foolish',
];


// Artists names
const artists = [
    'Dasha',
    'Teddy Swims',
    // 'AJ Mitchell',
    'kara Marni',
    'Alan Walker ft. Kylie Cantrall',
    'Mokita',
    "Kara Marni",
    'Billie Eilish',
    'AJ Mitchell',
];

// Covers
const covers = [
    'Dasha',
    'cover9',
    // 'play3',
    'sel',
    'cover1',
    'cover1',
    'cover1',
    'cover1',
    'play3'
];

playBtn.innerHTML = "<i class='doit do play-pause fas fa-play'></i>";

playBtn.addEventListener('click', playTrack);

// play track function
function playTrack() {

    // if the audio is not playing
    if (trackPlaying === false) {

        // play the audio
        audio.play();

        // add a pause icone inside the button
        playBtn.innerHTML = `
            <i class="doit  play-pause fas fa-pause"></i>
        `;


        // the trackPlaying is true cuz its playing
        trackPlaying = true;

    } else {
        // pause the audio
        audio.pause();

        // play icon return
        playBtn.innerHTML = '<i class="doit do play-pause fas fa-play"></i>';


        // the TrackPlaying to false cuz its paused
        trackPlaying = false;

    }

}


// Switching Tracks function
function switchTrack() {
    // if audio is playing
    if (trackPlaying === true) {
        // keep playing audio
        audio.play();

    }

}


// get the track source
const trackSrc = '\music/' + tracks[trackId] + ".mp3";

// load track function
function loadTrack() {
    // Set the audio track source
    audio.src = '\music/' + tracks[trackId] + '.mp3';
    // Re-load the audio track
    audio.load();
    // track title
    trackTitle.innerHTML = tracks[trackId];
    // artist name
    artistName.innerHTML = artists[trackId];
    // cover image
    cover.src = '\songs/' + covers[trackId] + '.jpg';
    // timeline slide to beginning
    progress.style.width = 0;
    sliderThumb.style.left = 0;
    // cover.style.rotate = "90deg";

    // wait for the audio data to load
    audio.addEventListener('loadeddata', () => {
        // display the duration of the audio
        setTime(fullTime, audio.duration);
        // max Value to slider
        slider.setAttribute('max', audio.duration);
        //    progress.setAttribute('max', audio.duration);
    });
}

// loading the track
loadTrack();

// click event for previous btn
prevBtn.addEventListener('click', () => {
    trackId--;

    if (trackId < 0) {
        trackId = tracks.length - 1;
    }

    // load the track
    loadTrack();
    // run SwitchTrack Function
    switchTrack();
});

// click event for next btn
nextBtn.addEventListener('click', nextTrack);

function nextTrack() {
    trackId++;

    if (trackId > tracks.length - 1) {
        // go to the first track
        trackId = 0;
    }

    // load the track
    loadTrack();
    // run SwitchTrack Function
    switchTrack();
}

audio.addEventListener('ended', nextTrack);


// format the time
function setTime(output, input) {
    // Calculate minutes from input
    const minutes = Math.floor(input / 60);
    // Calculate secondes from input
    const seconds = Math.floor(input % 60);

    // if Seconds under 10
    if (seconds < 10) {
        // add a zero before the forst number
        output.innerHTML = minutes + ':0' + seconds;
        // if is over 10
    } else {
        // output the time a zero
        output.innerHTML = minutes + ':' + seconds;
    }

}


// output the audio track durtion
setTime(fullTime, audio.duration);


// when the time changes on audio track
audio.addEventListener('timeupdate', () => {

    // get the current audio time
    const currentAudioTime = Math.floor(audio.currentTime);

    // get the Percentage
    const timePercentage = Math.floor(currentAudioTime / audio.duration) * 100 + '%';

    // output the current audio time
    setTime(time, currentAudioTime);
    // set the slider progress to the percantage
    progress.style.width = -timePercentage;
    sliderThumb.style.left = -timePercentage;

});

// for slider values
function customeSlider() {
    const val = (slider.value / audio.duration) * 100 + '%';

    // the thumb and progress in the current values
    progress.style.width = val;
    sliderThumb.style.left = val;

    // output the audio to current time
    setTime(time, slider.value);
    // set audio to current time
    audio.currentTime = slider.value;
}

// Calling the function
customeSlider();

slider.addEventListener('input', customeSlider);



// let val;
// // volume Slider
// function customeVolumeSlider(){
//     // get max attribute value for slider
//     const maxVal = vSlider.getAttribute('max');
//     // get the percentage
//     val = (vSlider.value / maxVal) * 100 + '%';
//     // set the thumb and progress to the current value
//     vProgress.style.width = val;
//     // set the audio volume to current value
//     audio.volume = vSlider.value / 100;
//     // change volume icons
//     // if the volume is high
//     if(audio.volume > 0.5){
//         // set the volume up icon
//         vIcon.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
//         // if the volume is muted
//     }else if(audio.volume === 0){
//         // set the mute icone
//         vIcon.innerHTML = `<i class="fa-solid fa-volume-mute"></i>`;
//     // }if the volume is low
//     }else{
//         vIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
//     }
// }

// // let's run volume slider
// customeVolumeSlider();
// // let's run volume slider
// vSlider.addEventListener('input', customeVolumeSlider);

// // a click for the volume icon
// vIcone.addEventListener('click', () => {
//     // if the volume is muted
//     if(volumeMuted ===false){
//         vIcon.innerHTML = `<i class="fa-solid fa-volume-mute"></i>`;
//         // mute the audio
//         audio.volume - 0;
//         // set the volume slider to zero
//         vProgress.style.width = 0;
//         // set the volumeMuted to True, cuz its muted
//         volumeMuted = true;
//         // if the volume is muted
//     }else{
//         vIcon.innerHTML = `<i class="fa-solid fa-volume-low"></i>`;
//         // unmute the volume by setting it to above zero
//         audio.volume = 0.5;
//         // set the volume progress slider to the current value
//         vProgress.style.width = val;
//         // set the volumeMuted to false cuz its no longer muted
//         volumeMuted = false;

//     }
// })



let drag_left = document.getElementById('drag-left2');
let drag_right = document.getElementById('drag-right2');

let drag = document.getElementsByClassName('drag2')[0];

drag_left.addEventListener('click', ()=>{
    drag.scrollLeft -=100;
});

drag_right.addEventListener('click', ()=>{
    drag.scrollLeft +=100;
});



let drag_left2 = document.getElementById('drag-left');
let drag_right2 = document.getElementById('drag-right');

let drag2 = document.getElementsByClassName('drag')[0];

drag_left2.addEventListener('click', ()=>{
    drag2.scrollLeft -=100;
});

drag_right2.addEventListener('click', ()=>{
    drag2.scrollLeft +=100;
});


const center = document.getElementById('center');
const center2 = document.getElementById('center2');
const dragon = document.getElementById('dragon');
const back = document.getElementById('back');
const return1 = document.getElementById('return');
const head = document.getElementById('head');



dragon.onclick = function(){
    center.style.display = 'none';
    head.style.display = 'none';
    center2.style.display = 'flex';
}

return1.onclick = function(){
    center.style.display = 'none';
    head.style.display = 'none';
    center2.style.display = 'flex';
}

back.addEventListener('click' , () => {
    center2.style.display = 'none';
    center.style.display = 'flex';
    head.style.display = 'flex';
    
});



