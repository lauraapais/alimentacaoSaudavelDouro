var currentVideo = 0;
var videoMain = document.getElementById('videoMain');
var explorarBackground = document.getElementById('explorarBackground');
var infoVideo = document.querySelectorAll('.exploreInfo');
var exploreVideo = document.querySelectorAll('.video_plus_info video');
var videos = document.querySelectorAll('.exploreInfo');
var arrow = document.querySelectorAll('.arrow');
var arrowMobile = document.getElementById('arrowMobile');

var exploreInfoH3 = document.querySelectorAll('.exploreInfo h3');
var exploreInfop = document.querySelectorAll('.exploreInfo p');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');
var arrowLeftMobile = document.getElementById('arrowLeftMobile');
var arrowRightMobile = document.getElementById('arrowRightMobile');

function showVideo(index) {
    infoVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            video.style.opacity = 1;
        } else {
            video.style.opacity = 0;
            video.style.display = 'none';
        }
    });

    exploreVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            video.style.opacity = 1;
            video.play();
        } else {
            video.style.opacity = 0;
            video.pause();
            video.currentTime = 0;
            video.style.display = 'none';
        }
    });

    // Ocultar ou mostrar as setas dependendo do índice
    arrowLeft.style.display = (index === 0) ? 'none' : 'block';
    arrowRight.style.display = (index === videos.length - 1) ? 'none' : 'block';
    arrowLeftMobile.style.display = (index === 0) ? 'none' : 'block';
    arrowRightMobile.style.display = (index === videos.length - 1) ? 'none' : 'block';
}

function changeBackgroundColor(index) {
    let backgroundColor;
    let color;

    switch (true) {
        case index < 2:
            backgroundColor = "#F3822B";
            break;
        case index >= 2 && index <= 5:
            backgroundColor = "#F1A6CB";
            break;
        case index == 6:
            backgroundColor = "#A7A53E";
            break;
        case index == 7:
            backgroundColor = "#F1A6CB";
            break;
        case index == 8:
            backgroundColor = "#65AEDE";
            break;
        case index == 9:
            backgroundColor = "#C6B8CE";
            break;
        case index == 10:
            backgroundColor = "#F1492A";
            break;
        case index == 11:
            backgroundColor = "#993DA6";
            break;
        case index == 12:
            backgroundColor = "#4874BA";
            break;
    }

    explorarBackground.style.transition = 'background-color 1s ease';
    explorarBackground.style.backgroundColor = backgroundColor;
    arrowMobile.style.transition = 'background-color 1s ease';
    arrowMobile.style.backgroundColor = backgroundColor;

    exploreInfoH3.forEach(exploreInfo_H3 => {
        exploreInfo_H3.style.transition = 'color 1s ease';
        exploreInfo_H3.style.color = color;
    });
    exploreInfop.forEach(exploreInfo_p => {
        exploreInfo_p.style.transition = 'color 1s ease';
        exploreInfo_p.style.color = color;
    });
}

function handleArrowRightClick() {
    if (currentVideo < videos.length - 1) {
        currentVideo++;
    }
    showVideo(currentVideo);
    changeBackgroundColor(currentVideo);
}

function handleArrowLeftClick() {
    if (currentVideo > 0) {
        currentVideo--;
    }
    showVideo(currentVideo);
    changeBackgroundColor(currentVideo);
}

arrowRight.addEventListener('click', handleArrowRightClick);
arrowLeft.addEventListener('click', handleArrowLeftClick);

arrowRightMobile.addEventListener('click', handleArrowRightClick);
arrowLeftMobile.addEventListener('click', handleArrowLeftClick);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && currentVideo < videos.length - 1) {
        handleArrowRightClick();
    } else if (event.key === 'ArrowLeft' && currentVideo > 0) {
        handleArrowLeftClick();
    }
});

showVideo(currentVideo);
