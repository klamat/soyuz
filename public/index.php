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

    .menu-burger {
        @apply h-8 w-8 bg-[url(/public/assets/template/img/burger.svg)] bg-cover float-right
        lg:hidden
    }
</style>

<div class="main-page">

    <!----- navigation chunk ----->
    <nav class="sticky -top-0.5 bg-white/80 shadow-md">
        <div class="nav-area">
            <a href="/" class="head-logo">
                <div class="head-logo-img"></div>
                <div class="head-logo-title">Производство рекламы<br>от А до Я</div>
            </a>
            <div class="head-menu">
                <div class="menu-burger"></div>
                <ul class="float-right">
                    <li>
                        <button>
                            <span>Услуги</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></span>
                        </button>
                        <ul>
                            <li><a href="index.php?id=5">Дизайн</a></li>
                            <li><a href="index.php?id=6">Монтаж, демонтаж</a></li>
                            <li><a href="index.php?id=9">Проектирование</a></li>
                            <li><a href="index.php?id=10">Согласование</a></li>
                            <li><a href="index.php?id=11">Сервисное обслуживание</a></li>
                        </ul>
                    </li>
                    <li>
                        <button>
                            <span>Виды работ</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></span>
                        </button>
                        <ul>
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




    <!-----  chunk ----->
    <!-----  chunk ----->

</div>

</body>
</html>
