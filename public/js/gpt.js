window.addEventListener('DOMContentLoaded', function() {

		window.addEventListener('scroll', () => {
		let blocks = document.querySelectorAll('.block');
		blocks.forEach((block) => {
		let blockTop = block.getBoundingClientRect().top;
		if (blockTop < window.innerHeight && blockTop > 0) {
		block.classList.add('right');
	}
		else {
		block.classList.remove('right');
	}
	});
	});


});