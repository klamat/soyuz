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


	/*Slider all*/
	showSlides(0);
	window.currentSlide = (num) => {
		/* = +num; //перевести в число*/
		showSlides(+num);//запустить функцию показа слайдов
	};
	window.plusSlides = (num) => {

	let dots = document.querySelector('.slider-nav-but .active').dataset.num
		console.log('\n ', +dots);
		showSlides(+dots + +num);//запустить функцию показа слайдов
		// console.log('\n num', +num);
	}

	//функция показа слайдов
	function showSlides(n) {
		let slides = document.querySelectorAll(".mySlides");
		// console.log(
		// 	'\n slides', slides,
		// );
		let dots = "";

		slides.forEach((el,id) => {

			let dot = "";

			if (id !== n) {

				el.style.display = "";
				dot += '<span class="dot" data-num="' + id + '" onclick="currentSlide(' + id + ')"></span>';
			}
			else {

				el.style.display = "block";
				dot += '<span class="dot active" data-num="' + id + '" onclick="currentSlide(' + id + ')"></span>';
			}
			dots += dot;
		});



		document.querySelector('.slider-nav-but [type="dots"]').innerHTML = dots;
	}
	/*setInterval(showSlides, 2000, 1);*/ // call plusSlider, with 1 as parameter
});


