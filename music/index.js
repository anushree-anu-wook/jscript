window.addEventListener("load", () => {
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector('.visual');
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60d394"
    
];



//Lets get going with the sound here
pads.forEach((pad,index) => {
    pad.addEventListener("click",function()
    {
        sounds[index].currentTime = 0;
        sounds[index].play();
        
    });
});
});