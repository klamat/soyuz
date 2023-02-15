window.addEventListener('load',() => {

    showSlide = 0;

    let n = 0;
    window.currentSlide = (n) => {
        showSlide(+n);
    };

    let slides = document.querySelectorAll('.slide');
    console.log('\n slides', slides);

    // document.addEventListener("click", function(e) {
    //     if (e.target.className=="button-right") {
    //         n = n + 1;
    //     }
    //
    //     if (e.target.className=="button-left") {
    //         n = n - 1;
    //     }
    //
    //     showSlide = n;
    //     console.log('\n n', n);
    //     console.log('\n showSlide', showSlide);
    //
    // });

    window.clickLeft = () => {
        showSlide = showSlide - 1;
        checkLengthSlides(showSlide);
    }
    window.clickRight = () => {
        showSlide = showSlide + 1;
        checkLengthSlides(showSlide);
    }
    
    const checkLengthSlides = (num) => {
        
        console.log('\n ', slides,num);
        
        if (num > (slides.length - 1)) showSlide = 0;
        else if (num < 0) showSlide = (slides.length - 1);
        
        console.log('\n ', showSlide);
    }
});