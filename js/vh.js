let hv = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

hv();

window.addEventListener('resize', () => {
    hv();
});