showSlide = 0;

let n = 0;
window.currentSlide = (n) => {
    showSlide(+n);
};

let i = document.querySelectorAll('.slide');
console.log('\n i', i);

document.addEventListener("click", function(e) {
    if (e.target.className=="button-right") {
        n = n + 1;
    }

    if (e.target.className=="button-left") {
        n = n - 1;
    }

    showSlide = n;
    console.log('\n n', n);
    console.log('\n showSlide', showSlide);

});