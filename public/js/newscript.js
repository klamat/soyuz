window.addEventListener('load',() => {

    let showSlide = 0;


    let slides = document.querySelectorAll('.slide');
    // console.log('\n slides', slides);

    window.clickLeft = () => { // запускаем функцию clickLeft из DOM дерева
        showSlide = showSlide - 1; // берем объявленную переменную showSlide и вычитаем из нее 1
        checkLengthSlides(showSlide); // запускаем функцию checkLengthSlides и передаем в нее результат манипуляций с showSlide
    }
    window.clickRight = () => { // запускаем функцию clickRight из DOM дерева
        showSlide = showSlide + 1; // берем объявленную переменную showSlide и прибавляем к ней 1
        checkLengthSlides(showSlide); // запускаем функцию checkLengthSlides и передаем в нее результат манипуляций с showSlide
    }


    const checkLengthSlides = () => { // запускаем функцию checkLengthSlides из JS, где num, это число переданное в эту функцию из строк 30, 34 - результат манипуляций с showSlide

        // console.log('\n ', slides,num);

        // console.log('\n start', showSlide,showSlide < 0);

        if (showSlide < 0) showSlide = (slides.length - 1); // иначе если num меньше 0, то showSlide = количеству слайдов
        else if (showSlide > (slides.length - 1)) showSlide = 0; // если num больше количества слайдов, то showSlide = 0

        // console.log('\n end', showSlide); // выводим в консоль результат

        slides.forEach((slide, id) => {
            slide.classList.add('hidden'); // всем добавил hidden
            if (showSlide === id) slide.classList.remove('hidden'); // тот что соответствует выбранному числу showSlide убираем hidden
            console.log('\n slide', slide,);
        })
    }

    let dots = '';
    slides.forEach((slide, id) =>{

        dots +='<span type="dots1" class="dot"></span>';

    });
    console.log(
        '\n dots', dots,
    );
    document.querySelector('.dotsArea').innerHTML = dots;
    // let slidesLength = slides.length;ы

    checkLengthSlides(showSlide);

    // document.querySelector('.buttonArea [type="dots1"]').innerHTML = slidesLength;

});