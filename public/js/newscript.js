window.addEventListener('load', () => {

    showSlide = 0;

    let n = 0;
// window.currentSlide = (n) => {
//     showSlide(+n);
// }; Это вызов фунции из DOM, но там ее ничего не вызывает

    let i = document.querySelectorAll('.slide');
    console.log('\n i', i);

    document.addEventListener("click", function(e) {
        if (e.target.className=="button-right") {
            n = n + 1;
        }

        if (e.target.className=="button-left") {
            n = n - 1;
        }

        if (n < 0) n = (i.length - 1); // переброс на последний слайд
        else if (n > (i.length - 1)) n = 0; // переброс на первый слайд

        showSlide = n;
        console.log('\n n', n);
        console.log('\n showSlide', showSlide);

    });
});