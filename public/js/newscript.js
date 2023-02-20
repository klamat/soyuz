/*Slider All*/
window.addEventListener('load',() => {
   /* let showSlide = 0;
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

*/



    /*------------------------------------ChatGPT-------------------------------------*/
/*------------------------------------Accordion------------------------------------*/
    // select all accordion items
    const accordionItems = document.querySelectorAll('.accordion-item');

// add click event listener to each accordion item
    accordionItems.forEach((accordionItem) => {
        const accordionTitle = accordionItem.querySelector('.accordion-item-header');
        accordionTitle.addEventListener('click', function() {
            // select the content section of the clicked accordion item
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // toggle the active class on the accordion item
            accordionItem.classList.toggle('active');

            // toggle the rotation of the arrow
            const accordionArrow = accordionItem.querySelector('.accordion-arrow');
            accordionArrow.classList.toggle('active-acord-arrow');

            if (accordionItem.classList.contains('active')) {
                // if accordion item is active, expand the content section
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

                // close any other open accordion items
                const openAccordionItems = document.querySelectorAll('.accordion-item.active');
                openAccordionItems.forEach((openAccordionItem) => {
                    if (openAccordionItem !== accordionItem) {
                        openAccordionItem.classList.remove('active');
                        openAccordionItem.querySelector('.accordion-content').style.maxHeight = null;
                        openAccordionItem.querySelector('.accordion-arrow').classList.remove('active');
                    }
                });
            } else {
                // if accordion item is inactive, collapse the content section
                accordionContent.style.maxHeight = null;
            }
        });
    });
    /*------------------------------------ end Accordion------------------------------------*/
});
/*end Slider All*/


