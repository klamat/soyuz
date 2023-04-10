/*Переключатель приемуществ*/
window.addEventListener('DOMContentLoaded', function() {
	/*---------------------------------------------map-------------------------------------------*/
	/*ymaps.ready(function() {
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
				iconImageHref: '../docs/images/logo_maps.svg',
				iconImageSize: [80, 40],
				iconImageOffset: [-25, -45],

				iconContentLayout: ymaps.templateLayoutFactory.createClass(
					'<div style="color: #000; font-weight: bold;">$[properties.iconCaption]</div>'
				)
			});

		myMap.geoObjects.add(myPlacemark);

	});*/
	/*---------------------------------------------end map-------------------------------------------*/






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
				if (picture.dataset.id === el.dataset.id){
					picture.classList.add('advant-pic-animation-o');
					picture.classList.remove('advant-pic-animation-c')

				}
				else {
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

					dots += '<span type="dots1" class="dot active" onclick="currentSlide(' + id + ')"></span>';
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
	}
	setInterval(() => {
		showSlide = showSlide + 1;
		activeSlide(showSlide);
	}, 8000)

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








	const modal = document.querySelector('.main-modal');
const closeButton = document.querySelectorAll('.modal-close');

const modalClose = () => {
	modal.classList.remove('fadeIn');
	modal.classList.add('fadeOut');
	setTimeout(() => {
		modal.style.display = 'none';
	}, 500);
}

window.openModal = () => {
	modal.classList.remove('fadeOut');
	modal.classList.add('fadeIn');
	modal.style.display = 'flex';
}

for (let i = 0; i < closeButton.length; i++) {

	const elements = closeButton[i];

	elements.onclick = (e) => modalClose();

	modal.style.display = 'none';

	window.onclick = function (event) {
		if (event.target == modal) modalClose();
	}
}


/*

	let XMC = function (object) {
		this.bodyID = object.bodyID;
		this.body = null;
		this.backgroundLayerID = object.backgroundLayerID;
		this.backgroundLayer = null;
		this.selector = object.selector;
		this.selectorValue = object.selectorValue;
		this.btnCloseId = object.btnId;
		this.btnClose = null;

		if('styleBg' in object){
			this.styleBg = object.styleBg;
		}

		if('styleBody' in object){
			this.styleBody = object.styleBody;
		}

		if('btnStyle' in object){
			this.styleBtn = object.btnStyle;
		}

		if('content' in object){
			this.content = object.content;
		} else {
			console.error('content not found');
		}

		if('classListBg' in object){
			this.classListBg = object.classListBg;
		}

		if('classListBody' in object){
			this.classListBody = object.classListBody;
		}

		if('classListBtn' in object){
			this.classListBtn = object.classListBtn;
		}



		this.delegateClick();
	};
	XMC.prototype.initBackground = function () {
		if(this.backgroundLayer === null){
			this.backgroundLayer = document.createElement('div');
			this.backgroundLayer.id = this.backgroundLayerID;
			document.body.appendChild(this.backgroundLayer);
			this.btnClose = document.createElement('div');
			this.btnClose.id = this.btnCloseId;
			this.btnClose.innerText = 'x';
			this.backgroundLayer.appendChild(this.btnClose);

			if(this.styleBg !== null){
				this.bgStyle();
			}

			if(this.classListBg !== null){
				this.setClasses(this.classListBg, this.backgroundLayer);
			}
			if(this.classListBtn){
				this.setClasses(this.classListBtn, this.btnClose);
			}

			if(this.styleBtn !== null){
				this.btnStyle();
			}

		}

		this.backgroundLayer.style.display = 'flex';
		return this;
	};
	XMC.prototype.bgStyle = function () {
		var mapSt = Object.keys(this.styleBg);
		var mf = this;
		mapSt.map(function (key) {
			mf.backgroundLayer.style[key] = mf.styleBg[key];
		})
	};
	XMC.prototype.btnStyle = function () {
		var mapSt = Object.keys(this.styleBtn);
		var mf = this;
		mapSt.map(function (key) {
			mf.btnClose.style[key] = mf.styleBtn[key];
		})
	}
	XMC.prototype.initTarget = function () {
		if(this.body === null){
			this.body = document.createElement('div');
			this.body.id = this.bodyID;
			this.backgroundLayer.appendChild(this.body);


			this.body.innerHTML = this.content;


			if(this.styleBody !== null){
				this.bodyStyle();
			}

			if(this.classListBody){
				this.setClasses(this.classListBody, this.body);
			}

		}
		this.body.style.display = 'flex';
		return this;
	};
	XMC.prototype.bodyStyle = function () {
		var mapSt = Object.keys(this.styleBody);
		var mf = this;
		mapSt.map(function (key) {
			mf.body.style[key] = mf.styleBody[key];
		})
	}
	XMC.prototype.show = function () {
		this.initBackground();
		this.initTarget();
	};
	XMC.prototype.close = function () {
		this.backgroundLayer.style.display = 'none';
		this.body.style.display = 'none';
	};
	XMC.prototype.delegateClick = function () {
		var mf = this;
		window.addEventListener('click', function (event) {
			if(event.target.hasAttribute(mf.selector) && event.target.getAttribute(mf.selector) === mf.selectorValue ){
				mf.show();
				mf.delegateClose();
			}
		}, mf, false);
	};
	XMC.prototype.delegateClose = function(){
		if(this.btnClose !== null){
			var btn = this.btnClose;
			var mf = this;
			btn.addEventListener('click', function () {
				mf.close();
			}, mf);
		}
	};
	XMC.prototype.setClasses = function (classes, element) {
		classes.map(function(className) {
			element.classList.add(className);
		});
	}


	new XMC({
		bodyID: 'rara',
		backgroundLayerID: 'lusia',
		selector: 'data-type',
		selectorValue: 'openModalForm',
		btnId: 'fbgmfClose',
		content: '<div><h2>Заголовок</h2><p>Текст</p></div>',
		classListBg: ['zuzu', 'zaza'],
		classListBody: ['zuzu', 'zaza2'],
		classListBtn: ['zuzu', 'zaza3'],
		styleBg: {
			top: '0',
			left:'0',
			right: '0',
			bottom: '0',
			position: 'fixed',
			background: '#00000090',
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: '6'
		},
		styleBody: {
			minWidth: '200px',
			minHeight: '200px',
			background: '#ffffff',
			justifyContent: 'center',
			alignItems: 'center',
		},
		btnStyle: {
			width: '40px',
			height: "40px",
			background: '#ffffff',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			top: '5%',
			right: '5%',
			cursor: 'pointer'
		}
	});
*/


	/*-------------------------------------End DOMContentLoaded---------------------------------*/
});

