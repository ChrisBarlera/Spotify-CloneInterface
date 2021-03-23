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