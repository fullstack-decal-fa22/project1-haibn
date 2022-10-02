function moveLeft() {
    let headerText = document.querySelector('.header-container');
    let aboutText = document.querySelectorAll('.aHead, .aBody, .wHead, .wBody');
    let contactImgs = document.querySelectorAll('.github, .linkedin, .instagram');
    let btn = document.querySelector('.btn');
    let moreAboutMe = document.querySelector('.more-about-me-container');
    console.log(aboutText)
    if (headerText.style.left === "30.1%") {
        headerText.style.left = "50%";

        // .aHead
        aboutText[0].style.transition = "left 0.9s ease-out 100ms, opacity 0.8s ease-out 0.10s, visibility 1s ease-in-out";
        // .aBody
        aboutText[1].style.transition = "left 1s ease-out 100ms, opacity 0.7s ease-out 0.08s, visibility 1s ease-in-out";
        // .wHead
        aboutText[2].style.transition = "left 1.2s ease-out 100ms, opacity 0.6s ease-out 0.04s, visibility 1s ease-in-out";
        // .wBody
        aboutText[3].style.transition = "left 1.3s ease-out 100ms, opacity 0.5s ease-out 0.03s, visibility 1s ease-in-out";
        // github 
        contactImgs[0].style.transition = "left 0.9s ease-out 100ms, opacity 0.7s, visibility 1s ease-in-out";
        // linkedin 
        contactImgs[1].style.transition = "left 0.8s ease-out 100ms, opacity 0.6s, visibility 1s ease-in-out";
        // instagram 
        contactImgs[2].style.transition = "left 0.7s ease-out 100ms, opacity 0.5s, visibility 1s ease-in-out";
        
        btn.classList.remove('btn--show');
        moreAboutMe.style.display = 'none';
    } else {
        headerText.style.left = "30.1%";
        
        // .aHead
        aboutText[0].style.transition = "left 0.9s ease-out 100ms, opacity 1.8s, visibility 1s ease-in-out";
        // .aBody
        aboutText[1].style.transition = "left 1s ease-out 100ms, opacity 1.9s, visibility 1s ease-in-out";
        // .wHead
        aboutText[2].style.transition = "left 1.2s ease-out 100ms, opacity 2s, visibility 1s ease-in-out";
        // .wBody
        aboutText[3].style.transition = "left 1.3s ease-out 100ms, opacity 2.1s, visibility 1s ease-in-out";
        // github 
        contactImgs[0].style.transition = "left 0.7s ease-out 100ms, opacity 2.8s ease-out 0.03s, visibility 1s ease-in-out";
        // linkedin 
        contactImgs[1].style.transition = "left 0.8s ease-out 100ms, opacity 2.9s ease-out 0.08s, visibility 1s ease-in-out";
        // instagram 
        contactImgs[2].style.transition = "left 0.9s ease-out 100ms, opacity 3s ease-out 0.13s, visibility 1s ease-in-out";
        
        btn.classList.add('btn--show');
        moreAboutMe.style.display = 'grid';
    }

    for (i=0; i<aboutText.length; i++) {
        if (headerText.style.left === "30.1%") {
            aboutText[i].style.left = "45%";
            aboutText[i].classList.add('text--show');
        } else {
            aboutText[i].style.left = "35%";
            aboutText[i].classList.remove('text--show');
        }        
    }

    for (i=0; i<contactImgs.length; i++) {
        if (headerText.style.left === "30.1%") {
            contactImgs[i].style.left = "-20.1%";
            contactImgs[i].classList.add('img--show');
        } else {
            contactImgs[i].style.left = "-5%";
            contactImgs[i].classList.remove('img--show');
        }        
    }
}

function changeTheme() {
    let docBody = document.body
    let textColor = document.querySelectorAll('#header, .about, .work');
    let gitImg = document.getElementById('git');
    let instagramImg = document.getElementById('ig');
    let btn = document.querySelector('button');
    let moreAboutMeText = document.querySelectorAll('.text');
    if (docBody.style.backgroundColor === 'white') {
        docBody.style.backgroundColor = 'black';
        gitImg.src = 'imgs/githubWhite.png';
        instagramImg.src = 'imgs/igWhite.png';
        btn.style.backgroundColor = 'white';
    } else {
        docBody.style.backgroundColor = 'white';
        gitImg.src = 'imgs/github.png';
        instagramImg.src = 'imgs/ig.png';
        btn.style.backgroundColor = 'black';
    }
    
    for (i=0; i<moreAboutMeText.length; i++) {
        if (docBody.style.backgroundColor === 'white') {
            moreAboutMeText[i].style.color = 'black';
        } else {
            moreAboutMeText[i].style.color = 'white';
        }
    }
    
    for (i=0; i<textColor.length; i++) {
        if (docBody.style.backgroundColor === 'white') {
            textColor[i].style.color = 'black';
        } else {
            textColor[i].style.color = 'white';
        }
    }
}