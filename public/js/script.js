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

/*ymaps*/

/*
ymaps.ready(function() {
	var myMap = new ymaps.Map('map', {
		center: [59.897812, 30.405960],
		zoom: 16
	});
});
*/

/*Slider*/
