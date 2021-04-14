window.addEventListener('scroll', event_reveal => {

    const reveal = document.querySelector('.reveal');

    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 150) {
        
        reveal.classList.add('active');
    } 
    else {
        reveal.classList.remove('active');
    }

    console.log(windowHeight)
    console.log(revealTop)
});

// const reveal = document.querySelector('.reveal');
// console.log(revealTop = reveal.getBoundingClientRect().top)