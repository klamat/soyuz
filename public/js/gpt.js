window.addEventListener('DOMContentLoaded', function() {

// Создаем сцену
	var scene = new THREE.Scene();

// Создаем камеру
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.z = 5;

// Создаем рендерер
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('container').appendChild(renderer.domElement);

// Загружаем модель
	var loader = new THREE.OBJLoader();
	loader.load(
		'../public/docs/obj/2.obj',
		function (object) {
			scene.add(object);
		}
	);

// Создаем источник освещения
	var light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(0, 0, 5);
	scene.add(light);

// Отображаем сцену
	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}
	animate();



});