console.log("he")
let songIndex = 0;
let audioElement = new Audio('Is this Love.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Is This Love", filePath: "Is this Love.mp3" },
    {songName: "Hasi", filePath: "Hasi.mp3"},
    {songName: "Chand sifarish", filePath: "Chand sifarish.mp3"},
    {songName: "Iktara", filePath: "Iktara.mp3"},
    {songName: "Deewani Mastani", filePath: "Deewani Mastani.mp3"},
    {songName: "Mai agar kahoon", filePath: "Mai agar kahoon.mp3"},
    {songName: "Main rang sharbotan ka", filePath: "Main rang sharbotan ka.mp3"},
    {songName: "Tere Sang Yaara", filePath: "Tere Sang Yaara.mp3"},
    {songName: "Tu Jane na", filePath: "Tu Jane na.mp3"},
    {songName: "Tum se hi", filePath: "Tum se hi.mp3"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id) - 1; // Subtracting 1 because array indices start from 0
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;

        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// Update the currently playing song name at the bottom
audioElement.addEventListener('play', () => {
    masterSongName.innerText = songs[songIndex].songName;
});

// Update the song name when the next or previous buttons are clicked
document.getElementById('next').addEventListener('click', () => {
    // Your existing code to play the next song goes here

    // Update the song name
    masterSongName.innerText = songs[songIndex].songName;
});

document.getElementById('previous').addEventListener('click', () => {
    // Your existing code to play the previous song goes here

    // Update the song name
    masterSongName.innerText = songs[songIndex].songName;
});
audioElement.addEventListener('play', () => {
    console.log('Audio is playing');
    masterSongName.innerText = songs[songIndex].songName;
});

document.getElementById('next').addEventListener('click', () => {
    console.log('Next button clicked');
    // Your existing code to play the next song goes here

    // Update the song name
    masterSongName.innerText = songs[songIndex].songName;
});

document.getElementById('previous').addEventListener('click', () => {
    console.log('Previous button clicked');
    // Your existing code to play the previous song goes here

    // Update the song name
    masterSongName.innerText = songs[songIndex].songName;
});

