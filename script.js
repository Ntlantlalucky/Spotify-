console.log("Welcome to Spotify");

// Initialize the Variables
let songsIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
    {songName: "", filePath: "", coverPath: ""},
]

// audioElement.play()

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
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
        gif.style.opacity = 0 ;
       
    }

})
// Listen to Events 
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   console.log(progress);
   myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).array.forEach(element => {
    element.addEventListener('click', (e)=>{
      console.log(e.target);
    })
});