function moveLeft() {
    let headerText = document.querySelector('#header');
    let aboutText = document.querySelectorAll('.aHead, .aBody, .wHead, .wBody');
    let contactImgs = document.querySelectorAll('.github, .linkedin, .email');
    let btn = document.querySelector('button');
    console.log(aboutText)
    if (headerText.style.left === "30%") {
        headerText.style.left = "50%";

        // .aHead
        aboutText[0].style.transition = "left 0.9s ease-out 100ms, opacity 0.8s ease-out 0.10s";
        // .aBody
        aboutText[1].style.transition = "left 1s ease-out 100ms, opacity 0.7s ease-out 0.08s";
        // .wHead
        aboutText[2].style.transition = "left 1.2s ease-out 100ms, opacity 0.6s ease-out 0.04s";
        // .wBody
        aboutText[3].style.transition = "left 1.3s ease-out 100ms, opacity 0.5s ease-out 0.03s";
        // github 
        contactImgs[0].style.transition = "left 0.9s ease-out 100ms, opacity 0.7s";
        // linkedin 
        contactImgs[1].style.transition = "left 0.8s ease-out 100ms, opacity 0.6s";
        // email 
        contactImgs[2].style.transition = "left 0.7s ease-out 100ms, opacity 0.5s";
    } else {
        headerText.style.left = "30%";
        
        // .aHead
        aboutText[0].style.transition = "left 0.9s ease-out 100ms, opacity 1.8s";
        // .aBody
        aboutText[1].style.transition = "left 1s ease-out 100ms, opacity 1.9s";
        // .wHead
        aboutText[2].style.transition = "left 1.2s ease-out 100ms, opacity 2s";
        // .wBody
        aboutText[3].style.transition = "left 1.3s ease-out 100ms, opacity 2.1s";
        // github 
        contactImgs[0].style.transition = "left 0.7s ease-out 100ms, opacity 2.8s ease-out 0.03s";
        // linkedin 
        contactImgs[1].style.transition = "left 0.8s ease-out 100ms, opacity 2.9s ease-out 0.08s";
        // email 
        contactImgs[2].style.transition = "left 0.9s ease-out 100ms, opacity 3s ease-out 0.13s";
        
        btn.style.visibility = 'visible';
        btn.style.transition = "opacity 3s";
        btn.style.opacity = '1';
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

function changeTheme() {
    let docBody = document.body
    let textColor = document.querySelectorAll('#header, .about, .work');
    let gitImg = document.getElementById('git');
    let emailImg = document.getElementById('em');
    let btn = document.querySelector('button');
    if (docBody.style.backgroundColor === 'white') {
        docBody.style.backgroundColor = 'black';
        gitImg.src = 'imgs/githubWhite.png';
        emailImg.src = 'imgs/emailWhite.png';
        btn.style.backgroundColor = 'white';
    } else {
        docBody.style.backgroundColor = 'white';
        gitImg.src = 'imgs/github.png';
        emailImg.src = 'imgs/email.png';
        btn.style.backgroundColor = 'black';
    }
    
    for (i=0; i<textColor.length; i++) {
        if (docBody.style.backgroundColor === 'white') {
            textColor[i].style.color = 'black';
        } else {
            textColor[i].style.color = 'white';
        }
    }
}