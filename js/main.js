const isJavaScriptScroll = true;

let elemSetWidth = (eClass, width) => {
    let e = document.querySelectorAll(`.${eClass}`);

    for (const el of e) {
        el.style.width = `${width}`;
    }
}

let setOfferWidth = (width) => {
    elemSetWidth('offer__title', `${width}`);
    elemSetWidth('offer__text', `${width}`);
    elemSetWidth('offer__table', `${width}`);
    elemSetWidth('try__title', `${width}`);
    elemSetWidth('try__text', `${width}`);
    elemSetWidth('try__btn-container', `${width}`);
    elemSetWidth('try__info', `${width}`);
    elemSetWidth('offer__btn-container', `${width}`);
    elemSetWidth('optimal__title', `${width}`);
}

let adaptive = () => {
    let h = window.innerHeight,
        w = window.innerWidth,
        vh = h / 100;

    let optimalOffer = document.querySelector('.optimal .offer'),
        nav = document.getElementsByTagName("nav")[0],
        headerNavBtn = document.querySelector('.header__nav-btn'),
        giftOffer = document.querySelector('.gift .offer');

    if (vh * 5.4 < (vh * 4.5) + 12){
        nav.style.top = '36px';
        headerNavBtn.style.top = '15px';
    }
    else {
        nav.style.top = 'calc(var(--vh, 1vh) * 5.4)';
        headerNavBtn.style.top = 'calc(var(--vh, 1vh) * 2.25)';
    }

    if (h > 2.88*w){
        giftOffer.style.paddingTop = 'calc(var(--vh, 1vh) * 7.8)';
    }
    else if (h > 2.29*w){
        giftOffer.style.paddingTop = 'calc(var(--vh, 1vh) * 10)';
    }
    else{
        giftOffer.style.paddingTop = 'calc(var(--vh, 1vh) * 13.8)';
    }

    if (h > 2.74*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 1.34)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 1.34)';
        setOfferWidth('100%');
    }
    else if (h > 2.73*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 3)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 3)';
        setOfferWidth('100%');
    }
    else if (h > 2.71*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 4)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 5.34)';
        setOfferWidth('100%');
    }
    else if (h > 2.25*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 6)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 10)';
        setOfferWidth('100%');
    }
    else if (h > 2.13*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 6)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 16.34)';
        setOfferWidth('100%');
    }
    else if (h > 2.02*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 6)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 16.34)';
        setOfferWidth('95%');
    }
    else if (h > 1.9*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 6)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 16.34)';
        setOfferWidth('90%');
    }
    else if (h > 1.78*w){
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 6)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 16.34)';
        setOfferWidth('85%');
    }
    else {
        optimalOffer.style.marginBottom = 'calc(var(--vh, 1vh) * 6)';
        optimalOffer.style.marginTop = 'calc(var(--vh, 1vh) * 16.34)';
        setOfferWidth('80%');
    }
}

adaptive();

let index = 0,
    sections = document.querySelectorAll('.section'),
    numberOfSections = document.querySelectorAll('.section').length,
    isAnimate = false,
    animationTime = 2000;
const screen = document.querySelector('.scroll');

let screenDown = () => {
    const h = window.innerHeight;

    if(index < numberOfSections - 1){
        index++;
        screen.style.transform = `translate(0, ${-index * h}px)`;
        screen.style.transition = `all ${animationTime}ms ease 0s`;
    }

    animationTimer();
}

let screenUp = () => {
    const h = window.innerHeight;

    if(index > 0){
        index--;
        screen.style.transform = `translate(0, ${-index * h}px)`;
        screen.style.transition = `all ${animationTime}ms ease 0s`;
    }

    animationTimer();
}

let animationTimer = () => {
    isAnimate = true;

    let animationStart = Date.now();

    let timer = setTimeout(() => {
        let timePassed = Date.now() - animationStart;

        if (timePassed >= animationTime){
            clearTimeout(timer);
            isAnimate = false;
        }
    }, animationTime);
}

let animationSectionSetTime = (animationClass) => {

    let element = document.querySelector(`.${animationClass}`);

    element.style.msTransition = `width ${animationTime}ms ease, height ${animationTime}ms ease, opacity ${animationTime}ms ease-out`;
    element.style.webkitTransition = `width ${animationTime}ms ease, height ${animationTime}ms ease, opacity ${animationTime}ms ease-out`;
    element.style.MozTransition = `width ${animationTime}ms ease, height ${animationTime}ms ease, opacity ${animationTime}ms ease-out`;
    element.style.oTransition = `width ${animationTime}ms ease, height ${animationTime}ms ease, opacity ${animationTime}ms ease-out`;
    element.style.transition = `width ${animationTime}ms ease, height ${animationTime}ms ease, opacity ${animationTime}ms ease-out`;
}

animationSectionSetTime('show_off');

window.addEventListener('resize', () => {
    adaptive();
    if (isJavaScriptScroll){
        fullScreenScroll();
    }
});

let fullScreenScroll = () => {
    const h = window.innerHeight;

    sections = document.querySelectorAll('.section');
    numberOfSections = document.querySelectorAll('.section').length;

    for (let i = 0; i < numberOfSections; i++) {
        sections[i].style.top = `${i * h}px`;
        sections[i].style.left = '0';
    }

    screen.style.transform = `translate(0, ${-index * h}px)`;
    screen.style.transition = 'all 0ms ease 0s';
}

let onWheel = (e) => {

    e = e || window.event;

    let delta = e.deltaY || e.detail || e.wheelDelta;

    if (!isAnimate){
        if (delta > 0){
            screenDown();
        }
        else {
            screenUp();
        }
    }
}

let sectionPosition = () => {
    let allSections = document.querySelectorAll('.section');

    for (const allSection of allSections) {
        allSection.style.position = 'relative';
    }
}

if (isJavaScriptScroll) {
    fullScreenScroll();

    if (window.addEventListener) {
        if ('onwheel' in document) {
            window.addEventListener("wheel", (e) => {
                onWheel(e);
            });
        } else if ('onmousewheel' in document) {
            window.addEventListener("mousewheel", (e) => {
                onWheel(e);
            });
        } else {
            window.addEventListener("MozMousePixelScroll", (e) => {
                onWheel(e);
            });
        }
    } else {
        window.attachEvent("onmousewheel", (e) => {
            onWheel(e);
        });
    }

    let startPositionY, startPositionX;

    screen.addEventListener('touchstart', (e) => {
        startPositionX = e.touches[0].pageX;
        startPositionY = e.touches[0].pageY;
    }, false);

    screen.addEventListener('touchmove', (e) => {
        let endPositionX = e.changedTouches[0].pageX,
            endPositionY = e.changedTouches[0].pageY,
            deltaX = endPositionX - startPositionX,
            deltaY = endPositionY - startPositionY,
            h =  window.innerHeight,
            angel = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

        if (!isAnimate){
            if (Math.abs(deltaY) < h/10) {
                return 0;
            }
            else if (angel >= 45 && angel < 135){
                screenUp();
            }
            else if (angel >= -135 && angel < -45){
                screenDown();
            }
        }
    }, false)

    document.addEventListener('keydown', (e) => {
        e.preventDefault();

        if (!isAnimate){
            switch (e.code){
                case 'ArrowDown':
                    screenDown();
                    break;
                case 'ArrowUp':
                    screenUp();
                    break;
                case 'Home':
                    window.location.href = 'https://megogo.net/ua';
                    break;
                case 'PageUp':
                    while (index > 0){
                        screenUp();
                    }
                    break;
                case 'End':
                case 'PageDown':
                    while (index < numberOfSections - 1){
                        screenDown();
                    }
                    break;
            }
        }
    })
}
else {
    const scroll = document.querySelector('.scroll'),
        containers = document.querySelectorAll('.container'),
        html = document.getElementsByTagName('html')[0];

    scroll.style.scrollSnapType = 'y mandatory';
    scroll.style.msOverflowY = 'scroll';
    scroll.style.overflowY = 'scroll';

    sectionPosition();

    for (const container of containers) {
        container.style.scrollSnapAlign = 'start';
    }

    html.style.scrollBehavior = 'smooth';
}

let hScroll = (elementClass) => {
    let element = document.querySelector(`.${elementClass}`);

    element.style.width = '100%';
    element.style.filter = 'alpha(opacity=100)';
    element.style.opacity = '1';
    element.style.msTransition = `width 0ms ease, height ${animationTime}ms ease, opacity 0ms ease-out`;
    element.style.webkitTransition = `width 0ms ease, height ${animationTime}ms ease, opacity 0ms ease-out`;
    element.style.MozTransition = `width 0ms ease, height ${animationTime}ms ease, opacity 0ms ease-out`;
    element.style.oTransition = `width 0ms ease, height ${animationTime}ms ease, opacity 0ms ease-out`;
    element.style.transition = `width 0ms ease, height ${animationTime}ms ease, opacity 0ms ease-out`;
}

const showBtn = (btnClass, showItemClass, isSection, typeOfScroll) => {
    if (isSection === true){

        const btns = document.querySelectorAll(`.${btnClass}`);
        const item = document.querySelector(`.${showItemClass}`);

        for (const btn of btns) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.toggle('show_on');
                item.classList.toggle('show_off');
                btns[0].classList.toggle('hidden');
                btns[0].classList.toggle('visible');
                if (isJavaScriptScroll){
                    if (item.classList.contains('show_on')){
                        if (typeOfScroll !== 'hScroll'){
                            animationSectionSetTime('show_on');
                        }
                        else{
                            hScroll('show_on');
                        }
                        screenDown();
                        item.classList.add('section');
                        fullScreenScroll();
                        animationTimer();
                    }
                    else {
                        if (typeOfScroll !== 'hScroll'){
                            animationSectionSetTime('show_off');
                        }
                        else{
                            hScroll('show_off');
                        }

                        screenUp();

                        isAnimate = true;

                        let animationStart = Date.now();

                        let timer = setTimeout(() => {
                            let timePassed = Date.now() - animationStart;

                            if (timePassed >= animationTime){
                                clearTimeout(timer);
                                isAnimate = false;
                                item.classList.remove('section');
                                if (typeOfScroll === 'hScroll'){
                                    let elem = document.querySelector('.show_off');

                                    elem.style.width = '0';
                                    elem.style.filter = 'alpha(opacity=0)';
                                    elem.style.opacity = '0';
                                }
                                fullScreenScroll();
                            }
                        }, animationTime);
                    }
                }
                else {
                    item.classList.toggle('section');
                    sectionPosition();
                }
            });
        }
    }
    else {
        const btn = document.querySelector(`.${btnClass}`);
        const item = document.querySelector(`.${showItemClass}`);

        if (typeOfScroll === 'wScroll') {
            item.classList.add('no-show');
            item.classList.remove('hidden');
        }

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeOfScroll === 'wScroll'){
                item.classList.toggle('no-show');
                item.classList.toggle('show');
            }
            else {
                item.classList.toggle('hidden');
                item.classList.toggle('visible');
            }
        });
    }
}

showBtn('header__nav-btn','header__nav', false, 'wScroll');
showBtn('header__scroll-btn','no-section', true, 'hScroll');