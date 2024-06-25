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
    infoVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            setTimeout(() => {
                video.style.opacity = 1;
            }, 50);
        } else {
            video.style.opacity = 0;
            setTimeout(() => {
                video.style.display = 'none';
            }, 500);
        }
    });

    exploreVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            setTimeout(() => {
                video.style.opacity = 1;
            }, 50);
        } else {
            video.style.opacity = 0;
            setTimeout(() => {
                video.style.display = 'none';
            }, 500);
        }
    });
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




function checkOverflowAndAddScroll() {
    const elements = document.querySelectorAll('.exploreInfo');

    elements.forEach(element => {
        if (element.scrollHeight > element.clientHeight) {
            element.style.overflowY = 'scroll';
        } else {
            element.style.overflowY = 'auto';
        }
    });
}

checkOverflowAndAddScroll();