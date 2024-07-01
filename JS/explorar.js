var currentVideo = 0;
var videoMain = document.getElementById('videoMain');
var explorarBackground = document.getElementById('explorarBackground');
var infoVideo = document.querySelectorAll('.exploreInfo');
var exploreVideo = document.querySelectorAll('.video_plus_info video');
var videos = document.querySelectorAll('.exploreInfo');
var arrow = document.querySelectorAll('.arrow');

var exploreInfoH3 = document.querySelectorAll('.exploreInfo h3');
var exploreInfop = document.querySelectorAll('.exploreInfo p');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');

function showVideo(index) {
    // Hide and pause all videos first
    infoVideo.forEach((video) => {
        video.style.display = 'none';
        video.style.opacity = 0;
    });

    exploreVideo.forEach((video) => {
        video.style.display = 'none';
        video.style.opacity = 0;
        video.pause();
    });

    // Display the selected info video
    if (infoVideo[index]) {
        infoVideo[index].style.display = 'flex';
        infoVideo[index].style.opacity = 1;
    }

    // Display and play the selected explore video
    if (exploreVideo[index]) {
        exploreVideo[index].style.display = 'flex';
        exploreVideo[index].style.opacity = 1;
        exploreVideo[index].play().catch(error => {
            console.log('Play request was interrupted:', error);
        });
    }
}

function changeBackgroundColor(index) {
    let backgroundColor;
    let color;

    switch (true) {
        case index < 1:
            backgroundColor = "#F3822B";
            break;
        case index >= 1 && index <= 4 :
            backgroundColor = "#F1A6CB";
            break;
        case index ==5:
            backgroundColor = "#A7A53E";
            break;
            case index ==6:
            backgroundColor = "#A7A53E";
            break;
            case index ==7:
            backgroundColor = "#A7A53E";
            break;
        case index == 8:
            backgroundColor = "#F1A6CB";
            break;
        case index == 9:
            backgroundColor = "#65AEDE";
            break;
        case index == 10:
            backgroundColor = "#C6B8CE";
            break;
        case index == 11:
            backgroundColor = "#F1492A";
            break;
        case index == 12:
            backgroundColor = "#993DA6";
            break;
            case index == 13:
            backgroundColor = "#4874BA";
            break;
    }

    explorarBackground.style.transition = 'background-color 1s ease';
    explorarBackground.style.backgroundColor = backgroundColor;


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
    currentVideo = (currentVideo + 1) % videos.length;
    showVideo(currentVideo);
    changeBackgroundColor(currentVideo);
}

function handleArrowLeftClick() {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    showVideo(currentVideo);
    changeBackgroundColor(currentVideo);
}

arrowRight.addEventListener('click', handleArrowRightClick);
arrowLeft.addEventListener('click', handleArrowLeftClick);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        handleArrowRightClick();
    } else if (event.key === 'ArrowLeft') {
        handleArrowLeftClick();
    }
});

showVideo(currentVideo);