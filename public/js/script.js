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


/*accordeon услуги*/
document.addEventListener('alpine:init', () => {
	Alpine.store('accordion', {
		tab: 0
	});

	Alpine.data('accordion', (idx) => ({
		init() {
			this.idx = idx;
		},
		idx: -1,
		handleClick() {
			this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
		},
		handleRotate() {
			return this.$store.accordion.tab === this.idx ? 'rotate-180' : '';
		},
		handleToggle() {
			return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
		}
	}));
}, 'alpine:init')

	/*Slider all*/
	let slideIndex = 0;
	showSlides(slideIndex);

	// function plusSlides(n) {
	// 	showSlides(slideIndex += n);
	// }
	// function currentSlide(n) {
	// 	showSlides(slideIndex = n);
	// }
	window.currentSlide = (num) => {

		slideIndex = +num;
		showSlides(slideIndex);
	};
	function showSlides(n) {

		let i;
		// let slides = document.getElementsByClassName("mySlides");
		let slides = document.querySelectorAll(".mySlides");
		console.log('\n slides ', slides, slides.length, slides[n]);
		// let dots = document.getElementsByClassName("dot");
		let dots = "";
		// console.log('\n dots ', dots, dots[n]);
		// let slidericons = document.getElementsByClassName("slidericon");

		// if (n > slides.length) slideIndex = 1;
		// console.log('\n {slideIndex = 1}', `{slideIndex = 1}`);
		// else if (n < 1) {slideIndex = slides.length}

		// for (i = 0; i < slides.length; i++) {
		// 	// slides[i].style.display = "none";
		// 	slides[i].classList.add('hidden');
		// }

		slides.forEach((el,id) => {

			let dot = "";

			if (id !== n) {
				
				console.log('\n ', el.style);

				// el.classList.add("hidden");
				el.style.display = "";

				dot += '<span class="dot" onclick="currentSlide(' + id + ')"></span>';
			}
			else {

				// el.classList.remove("hidden");
				el.style.display = "block";

				dot += '<span class="dot active" onclick="currentSlide(' + id + ')"></span>';
			}



			dots += dot;
		});

		// for (i = 0; i < dots.length; i++) {
		// 	console.log('\n i', i,dots[i],dots[i].classList);
		// 	dots[i].classList.remove("active");
		// 	// dots[i].className = dots[i].className.replace(" active", "");
		// }

		// for (i = 0; i < slidericons.length; i++) {
		// 	slidericons[i].className = slidericons[i].className.replace(" active", "");
		// }

		// console.log('\n dots[slideIndex-1]', dots[slideIndex-1]);
		// console.log('\n slideIndex', slideIndex);
		// console.log('\n slides', slides);

		// slides[slideIndex-1].style.display = "block";
		// dots[slideIndex-1].className += " active";
		/*	slidericons[slideIndex-1].className += " active";*/

		document.querySelector('.slider-nav-but [type="dots"]').innerHTML = dots;
	}
	/*setInterval(showSlides, 2000, 1);*/ // call plusSlider, with 1 as parameter

});


