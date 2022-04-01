function playGif (event) {
    let id = event.target.id
    event.target.src = projects[id].gif
    // console.log(event.target.src);
    event.target.style.transform = 'scale(1.2)'
}

function stopGif (event) {
    let id = event.target.id
    event.target.src = projects[id].pic
    event.target.style.transform = 'scale(1)'
}