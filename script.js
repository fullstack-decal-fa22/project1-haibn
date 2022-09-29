function moveLeft() {
    var headerText = document.querySelector('#header');
    var aboutText = document.querySelectorAll('.aHead, .aBody, .wHead, .wBody');
    var contactImgs = document.querySelectorAll('.github, .linkedin, .email');
    console.log(aboutText)
    if (headerText.style.left === "30%") {
        headerText.style.left = "50%";

        // .aHead
        aboutText[0].style.transition = "left 0.9s ease-out 100ms, opacity 0.8s ease-out 0.21s";
        // .aBody
        aboutText[1].style.transition = "left 1s ease-out 100ms, opacity 0.7s ease-out 0.18s";
        // .wHead
        aboutText[2].style.transition = "left 1.2s ease-out 100ms, opacity 0.6s ease-out 0.13s";
        // .wBody
        aboutText[3].style.transition = "left 1.3s ease-out 100ms, opacity 0.5s ease-out 0.03s";
        
        contactImgs[0].style.transition = "left 0.9s ease-out 100ms, opacity 0.7s";
        contactImgs[1].style.transition = "left 0.8s ease-out 100ms, opacity 0.6s";
        contactImgs[2].style.transition = "left 0.7s ease-out 100ms, opacity 0.5s";
    } else {
        headerText.style.left = "30%";
        
        // .aHead
        aboutText[0].style.transition = "left 0.9s ease-out 100ms, opacity 2.8s ease-out 0.03s";
        // .aBody
        aboutText[1].style.transition = "left 1s ease-out 100ms, opacity 2.9s ease-out 0.13s";
        // .wHead
        aboutText[2].style.transition = "left 1.2s ease-out 100ms, opacity 3s ease-out 0.23s";
        // .wBody
        aboutText[3].style.transition = "left 1.3s ease-out 100ms, opacity 3.1s ease-out 0.33s";

        contactImgs[0].style.transition = "left 0.7s ease-out 100ms, opacity 2.8s ease-out 0.03s";
        contactImgs[1].style.transition = "left 0.8s ease-out 100ms, opacity 2.9s ease-out 0.13s";
        contactImgs[2].style.transition = "left 0.9s ease-out 100ms, opacity 3s ease-out 0.23s";
    }

    for (i=0; i<aboutText.length; i++) {
        if (headerText.style.left === "30%") {
            aboutText[i].style.left = "50%";
            aboutText[i].style.opacity = "1";
        } else {
            aboutText[i].style.left = "35%";
            aboutText[i].style.opacity = "0";
        }        
    }

    for (i=0; i<contactImgs.length; i++) {
        if (headerText.style.left === "30%") {
            contactImgs[i].style.left = "-20.1%";
            contactImgs[i].style.opacity = "1";
            // contactImgs[i].style.transition = "opacity 1s"
        } else {
            contactImgs[i].style.left = "-5%";
            contactImgs[i].style.opacity = "0";
            // contactImgs[i].style.transition = "left 0.9s ease-out 100ms, opacity 1s ease-out 100ms";
        }        
    }
}