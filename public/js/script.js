/*Переключатель приемуществ*/
window.addEventListener('load', function() {

	let getButtons = document.querySelectorAll('[data-type="ml"] button');
	let getLayers = document.querySelectorAll('[data-type="cl"] [data-id]');

	getButtons.forEach((el) => {

		el.addEventListener('click', () => {

			getLayers.forEach((layer) => {

				if (layer.dataset.id === el.dataset.id) layer.classList.remove('hidden');
				else layer.classList.add('hidden');
			});
		});
	});

	/*Slider All*/

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
				slide.classList.remove('hidden');// тот что соответствует выбранному числу showSlide убираем hidden
				slide.classList.remove('slideTranslate');
				// slide.classList.add('fade');

				dots += '<span type="dots1" class="dot active" onclick="currentSlide(' + id + ')"></span>';
			} else {
				slide.classList.add('hidden');// всем добавил hidden
				// slide.classList.add('slideTranslate');
				slide.classList.add('fade');
				// slide.classList.add('z-[900]');
				dots += '<span type="dots1" class="dot" onclick="currentSlide(' + id + ')"></span>';
			}
			// console.log('\n slide', slide,);
		});
		document.querySelector('.dotsArea').innerHTML = dots;
	}
	activeSlide(showSlide);

	setInterval(() => {
		showSlide = showSlide + 1;
		activeSlide(showSlide);
	}, 8000)
});// call plusSlider, with 1 as parameter

/*end Slider All*/

