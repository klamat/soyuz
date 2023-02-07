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
})

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
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	let slidericons = document.getElementsByClassName("slidericon");

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	for (i = 0; i < slidericons.length; i++) {
		slidericons[i].className = slidericons[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	slidericons[slideIndex-1].className += " active";
}





