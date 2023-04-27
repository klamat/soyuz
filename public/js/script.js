/*Переключатель приемуществ*/
window.addEventListener('DOMContentLoaded', function() {
	/*---------------------------------------------map-------------------------------------------*/
	ymaps.ready(function() {
		var myMap = new ymaps.Map('map', {
			center: [59.897812, 30.405960],
			zoom: 16
		});

		var myPlacemark = new ymaps.Placemark(
			[59.897195, 30.407198],
			{
				hintContent: 'ПК СОЮЗ',

				balloonContent: 'ООО "ПК "СОЮЗ" Производство рекламной продукции от А до Я.'
			},{
				iconLayout: 'default#imageWithContent',
				iconImageHref: './docs/images/Logo/LogoMaps.svg',
				iconImageSize: [80, 40],
				iconImageOffset: [-25, -45],

				iconContentLayout: ymaps.templateLayoutFactory.createClass(
					'<div style="color: #000; font-weight: bold;">$[properties.iconCaption]</div>'
				)
			});

		myMap.geoObjects.add(myPlacemark);

	});
	/*---------------------------------------------end map-------------------------------------------*/






	/*----------------------------navbar------------------------------*/

	let navButtons = document.querySelectorAll('[data-type="navButtons"] [data-id]');
	let navDrops = document.querySelectorAll('[data-type="navDrops"] [data-id]');

	navButtons.forEach((el)=>{
		el.addEventListener('mouseenter',(event) => {
		/*	console.log('\n ', event.target);*/
			let svg = event.target.querySelector('svg')
			svg.classList.add('hover-nav-arrow')


			navDrops.forEach((drops)=>{
				if (drops.dataset.id === el.dataset.id) drops.classList.add ('nav-menu-us-o');
				else drops.classList.remove('nav-menu-us-o')
				drops.addEventListener('mouseleave',() =>{
					drops.classList.remove('nav-menu-us-o')
					svg.classList.remove('hover-nav-arrow')

				})
			})
		});
		el.addEventListener('click',() => {
			navDrops.forEach((drops)=>{
				if (drops.dataset.id === el.dataset.id) drops.classList.toggle ('nav-menu-us-o');
			});
		})
	});
	const menuBtn = document.querySelector('.burgerMenu');
	menuBtn.addEventListener('click' , () => document.body.classList.toggle('active-burger'));


/*--------------------------endNavbar----------------------------*/

	let getButtons = document.querySelectorAll('[data-type="ml"] button');
	let getLayers = document.querySelectorAll('[data-type="cl"] [data-id]');
	let getPictures = document.querySelectorAll('[data-type="pl"] [data-id]')

	getButtons.forEach((el) => {

		el.addEventListener('click', () => {

			getLayers.forEach((layer) => {

				if (layer.dataset.id === el.dataset.id) layer.classList.remove('hidden');
				else layer.classList.add('hidden');
			});

			getPictures.forEach((picture) => {
				if (picture.dataset.id === el.dataset.id) {
					picture.classList.add('advant-pic-animation-o');
					picture.classList.remove('advant-pic-animation-c')

				} else {
					picture.classList.add('advant-pic-animation-c')
					picture.classList.remove('advant-pic-animation-o');
				}
			});
		});
	});

	/*Slider All*/
	let sliderCont = document.querySelector('.slideContainer');
	if(sliderCont){
		sliderCont.classList.add('h-auto');

		let showSlide = 0;
		let slides = document.querySelectorAll('.slide');

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

			slides.forEach((slide, id) => {
				if (showSlide === id) {
					slide.classList.remove('hidden');// тот что соответствует выбранному числу showSlide убираем hidden
					slide.classList.remove('slideTranslate');
					// slide.classList.add('fade');

					dots += '<span type="dots1" class="dot activeDot" onclick="currentSlide(' + id + ')"></span>';
				} else {
					slide.classList.add('hidden');// всем добавил hidden
					// slide.classList.add('slideTranslate');
					slide.classList.add('fade');
					// slide.classList.add('z-[900]');
					dots += '<span type="dots1" class="dot" onclick="currentSlide(' + id + ')"></span>';
				}

			});
			document.querySelector('.dotsArea').innerHTML = dots;
		}

		activeSlide(showSlide);

		setInterval(() => {
			showSlide = showSlide + 1;
			activeSlide(showSlide);
		}, 8000)
	}
	/*------------------------------------Accordion------------------------------------*/
	// select all accordion items
	const accordionItems = document.querySelectorAll('.accordion-item');

// add click event listener to each accordion item
	accordionItems.forEach((accordionItem) => {
		const accordionTitle = accordionItem.querySelector('.accordion-item-header');
		accordionTitle.addEventListener('click', function() {
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


	/*end Slider All*/


	/*------------------------------------------calculator--------------------------------------*/


	// Функция расчета калькулятора
	const CalculatorCostHandler = () => {

		//создаем контейнер с содержимым калькулятора, для того чтобы обращаться к нему и делать проверку на наличие его на странице
		const calculator = document.querySelector('.features');

		//проверяем существует ли калькулятор
		if (calculator) {

			// массив всех чекбоксов
			const getFields = calculator.querySelectorAll('input');

			// Сумма расчета финальная
			let FinalCost = 0;

			// Количество элементов
			const quantity = +calculator.querySelector('#quantity').value;

			// перебор всех полей в getFields
			getFields.forEach(inp => {

				// если просмтриваемое поле выбрано, то FinalCost прибавляем inp.value переведя его в число символом +n
				if (inp.checked) FinalCost += +inp.value;
			});

			// возвращаем получившийся результат FinalCost * quantity в калькулятор с округлением до копеек
			calculator.querySelector('#total-price').innerText = Math.round((FinalCost * quantity) * 100) / 100;
		}
	}
	window.CalculatorCostHandler = CalculatorCostHandler;
	CalculatorCostHandler();

	const getFields = document.querySelectorAll('.features input');
	// чтобы не ебаться и не прописывать каждому чекбоксу запускающую расчет функции, пропишем все одинаковую функцию, т.к. делать она будет одно и то-же
	getFields.forEach(field => field.setAttribute('onclick', 'CalculatorCostHandler()'));







	/*-------------------------------------End DOMContentLoaded---------------------------------*/
});

