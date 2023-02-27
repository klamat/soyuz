window.addEventListener('DOMContentLoaded', function() {
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.nav-links');

	burger.addEventListener('click', () => {
		navLinks.classList.toggle('show-nav');
		console.log(
			'\n burger', burger,
		);
	});
});