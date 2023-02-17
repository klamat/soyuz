/*Slider All*/
window.addEventListener('load',() => {
    let showSlide = 0;
    let slides = document.querySelectorAll('.slide');
    // console.log('\n slides', slides);
    window.clickLeft = () => { // запускаем функцию clickLeft из DOM дерева
        showSlide = showSlide - 1; // берем объявленную переменную showSlide и вычитаем из нее 1
        activeSlide(showSlide); // запускаем функцию activeSlide и передаем в нее результат манипуляций с showSlide
    }
    window.clickRight = () => { // запускаем функцию clickRight из DOM дерева
        showSlide = showSlide + 1; // берем объявленную переменную showSlide и прибавляем к ней 1
        activeSlide(showSlide); // запускаем функцию activeSlide и передаем в нее результат манипуляций с showSlide
    }
    window.currentSlide = (n) => {
        showSlide = +n;
        activeSlide(showSlide);
    }
    const activeSlide = () => { // запускаем функцию activeSlide из JS, где num, это число переданное в эту функцию из строк 30, 34 - результат манипуляций с showSlide
        let dots = '';
        if (showSlide < 0) showSlide = (slides.length - 1); // иначе если num меньше 0, то showSlide = количеству слайдов
        else if (showSlide > (slides.length - 1)) showSlide = 0; // если num больше количества слайдов, то showSlide = 0
        // console.log('\n end', showSlide); // выводим в консоль результат
        slides.forEach((slide, id) => {
            if (showSlide === id) {
                slide.classList.remove('hidden'); // тот что соответствует выбранному числу showSlide убираем hidden
                dots +='<span type="dots1" class="dot active" onclick="currentSlide(' + id + ')"></span>';
            }
            else{
                slide.classList.add('hidden');// всем добавил hidden}
                dots +='<span type="dots1" class="dot" onclick="currentSlide(' + id + ')"></span>';
            }
            // console.log('\n slide', slide,);
        });
        document.querySelector('.dotsArea').innerHTML = dots;
    }
    activeSlide(showSlide);

    setInterval(() =>{
        showSlide = showSlide + 1;
    activeSlide(showSlide);}, 3000)// call plusSlider, with 1 as parameter
});
/*end Slider All*/