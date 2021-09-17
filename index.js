
function pauseFunc() {
    document.getElementById('box').style.animationPlayState = "paused";
    console.log('Paused'),false
}

function playFunc(){
    document.getElementById('box').style.animationPlayState = 'running'
    console.log('Played'),false
}