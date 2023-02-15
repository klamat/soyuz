window.addEventListener('load',() => {

    let showSlide = 0;


    window.currentSlide = (n) => {
        showSlide(+n);
    };

    let slides = document.querySelectorAll('.slide');
    console.log('\n slides', slides);

    window.clickLeft = () => { // запускаем функцию clickLeft из DOM дерева
        showSlide = showSlide - 1; // берем объявленную переменную showSlide и вычитаем из нее 1
        checkLengthSlides(showSlide); // запускаем функцию checkLengthSlides и передаем в нее результат манипуляций с showSlide
    }
    window.clickRight = () => { // запускаем функцию clickRight из DOM дерева
        showSlide = showSlide + 1; // берем объявленную переменную showSlide и прибавляем к ней 1
        checkLengthSlides(showSlide); // запускаем функцию checkLengthSlides и передаем в нее результат манипуляций с showSlide
    }

    classList.remove('hidden')

    const checkLengthSlides = (num) => { // запускаем функцию checkLengthSlides из JS, где num, это число переданное в эту функцию из строк 30, 34 - результат манипуляций с showSlide
        
        // console.log('\n ', slides,num);
        
        if (num > (slides.length - 1)) showSlide = 0; // если num больше количества слайдов, то showSlide = 0
        else if (num < 0) showSlide = (slides.length - 1); // иначе если num меньше 0, то showSlide = количеству слайдов
        
        console.log('\n ', showSlide); // выводим в консоль результат
    }


});