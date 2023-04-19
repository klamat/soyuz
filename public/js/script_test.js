/*Переключатель приемуществ*/
window.addEventListener('DOMContentLoaded', function() {

	/*------------------------------------Accordion------------------------------------*/
	// select all accordion items
	const accordionItems = document.querySelectorAll('.accordion-item');

// add click event listener to each accordion item
	accordionItems.forEach((accordionItem) => {
		const accordionTitle = accordionItem.querySelector('.accordion-item-header');
		accordionTitle.addEventListener('click', function () {
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
