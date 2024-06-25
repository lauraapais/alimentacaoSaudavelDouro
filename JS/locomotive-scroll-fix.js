const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

window.addEventListener('load', (event) => {
    scroller.start();
});

scroller.stop();

scroller.on('scroll', (instance) => {
    onScrollMenu(instance.scroll.y);
});

window.onload = function() {
    scroller.update();
}

function scrollerMenu() {
    if (!menu.classList.contains("active")) {
        scroller.start();
        onScrollMenu(scroller.scroll.instance.scroll.y);
    } else {
        scroller.stop();
        if (nav.classList.contains("scroll")) {
            nav.classList.remove("scroll");
        }
    }
}