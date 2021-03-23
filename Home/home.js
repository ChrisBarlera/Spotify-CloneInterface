const albums = document.querySelectorAll('.album button')
albums.forEach(albumListener);
function albumListener(item){
    item.addEventListener("click", function() {
        window.location.href = '../AlbumPage/album.html'
    })
}

const artists = document.querySelectorAll('.artist button')
artists.forEach(artistsListener);
function artistsListener(item){
    item.addEventListener("click", function() {
        window.location.href = '../ArtistPage/artist.html'
    })
}

const podcasts = document.querySelectorAll('.podcast button')
podcasts.forEach(podcastsListener);
function podcastsListener(item){
    item.addEventListener("click", function() {
        console.log("podcast");
    })
}

const playpause = document.getElementById("playpauseBT")
playpause.addEventListener("click", function() {
    let ready2play = false;
    for (let index = 0; index < this.classList.length; index++) {
        const element = this.classList[index];
        if (element == "pause") {
            ready2play = true;
        }
    }

    if (ready2play) {
        this.classList.remove("pause")
        this.classList.add("play")
    } else {
        this.classList.remove("play")
        this.classList.add("pause")
    }
});

const likeBT = document.getElementById("likeBT")
likeBT.addEventListener("click", function() {
    let ready2like = true;
    for (let index = 0; index < this.classList.length; index++) {
        const element = this.classList[index];
        if (element == "liked") {
            ready2like = false;
        }
    }

    if (ready2like) {
        this.classList.remove("disliked")
        this.classList.add("liked")
    } else {
        this.classList.remove("liked")
        this.classList.add("disliked")
    }
});


const config = document.getElementById("config-bt")
config.addEventListener("click", function() {
    console.log("config");
})