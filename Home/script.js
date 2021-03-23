function toggleclick(item){
    let teste = false;
    for (let index = 0; index < item.classList.length; index++) {
        const element = item.classList[index];
        if (element == "enabled") {
            teste = true;
        }
    }

    if (teste) {
        item.classList.remove("enabled");
        item.classList.add("disabled");
    } else {
        item.classList.remove("disabled");
        item.classList.add("enabled");
    }
}