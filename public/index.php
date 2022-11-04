<!DOCTYPE html>
<html lang="ru">
<head>

    <!----- head chunk ----->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Главная</title>

        <script src="https://cdn.tailwindcss.com"></script>

    <script type="text/javascript" src="/public/assets/app.js"></script>
    <link rel="stylesheet" href="/public/assets/soyuz.css">
    <!----- head chunk ----->
</head>
<body>

<style type="text/tailwindcss">
    @tailwind  base;
    @tailwind  components;
    @tailwind  utilities;


</style>

<script type="text/javascript">
    window.addEventListener("load", function() {

        document.querySelectorAll('.head-menu li').forEach((li) => {
            li.addEventListener('mouseenter', function() {this.classList.add('active')});
            li.addEventListener('mouseleave', function() {this.classList.remove('active')});
        });
    });
</script>

<div class="main-page">

    <!----- navigation chunk ----->
    <nav class="top-navigation">
        <div class="nav-area">
            <a href="/">
                <div class="head-logo">
                    <div class="head-logo-img"></div>
                    <div class="head-logo-title">Производство рекламы<br>от А до Я</div>
                </div>
            </a>
            <div class="head-menu">
                <div class="menu-burger" onclick="this.parentNode.classList.toggle('menu-open')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g stroke-width="6.5" stroke-linecap="round" stroke="#000"><path d="M72 82.286h28.75" fill="#009100" fill-rule="evenodd" /><path d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554" fill="none" /><path d="M72 125.143h28.75" fill="#009100" fill-rule="evenodd" /><path d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554" fill="none" /><path d="M100.75 82.286h28.75" fill="#009100" fill-rule="evenodd" /><path d="M100.75 125.143h28.75" fill="#009100" fill-rule="evenodd" /></g></svg>
                </div>
                <ul>
                    <li>
                        <button>Услуги <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></button>
                        <ul class="submenu">
                            <li><a href="index.php?id=5">Дизайн</a></li>
                            <li><a href="index.php?id=6">Монтаж, демонтаж</a></li>
                            <li><a href="index.php?id=9">Проектирование</a></li>
                            <li><a href="index.php?id=10">Согласование</a></li>
                            <li><a href="index.php?id=11">Сервисное обслуживание</a></li>
                        </ul>
                    </li>
                    <li>
                        <button>Виды работ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></button>
                        <ul class="submenu">
                            <li><a href="index.php?id=13">Символы из нержавеющей стали</a></li>
                            <li><a href="index.php?id=14">Интерьерные вывески</a></li>
                            <li><a href="index.php?id=15">Информационные таблички</a></li>
                            <li><a href="index.php?id=16">Лифтовые холлы</a></li>
                            <li><a href="index.php?id=17">Объемные буквы</a></li>
                            <li><a href="index.php?id=18">Оформление МОП</a></li>
                            <li><a href="index.php?id=19">Оформление строительных объектов</a></li>
                            <li><a href="index.php?id=20">Световые панели</a></li>
                            <li><a href="index.php?id=28">Ремонт рекламных конструкций</a></li>
                            <li><a href="index.php?id=21">Офис продаж</a></li>
                        </ul>
                    </li>
                    <li><a href="index.php?id=24">О нас</a></li>
                    <li><a href="#">Галерея</a></li>
                    <li><a href="index.php?id=23">Контакты</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!----- navigation chunk ----->

<!--    <img src="https://pksoyuz.ru/docs/images/carousel/slider/2.jpg" class="w-80 h-[200vh]">-->

    <!-----  chunk ----->
    <!-----  chunk ----->

</div>

</body>
</html>
