$(document).ready(function () { /* функция готовности DOM */
    var currentFloor = 2; /* переменная, где хранится текущий этаж */
    var floorPath = $('.home-image path') /* каждый отдельный этаж в SVG */
    var counterUp = $('.counter-up')    /* кнопка увелечения этажа */
    var counterDown = $('.counter-down') /* кнопка уменьшения этажа */
    /* при навведении мышки на этаж */
    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
        currentFloor = $(this).attr("data-floor"); /* получаем значение текущего этажа*/
        $('.counter').text(currentFloor); /* записываем значение этажа в счетчик */
    });


    counterUp.on('click', function (){
        /* отслеживаем клик по кнопке вверх */
        if (currentFloor < 18) {
        /* проверяем значение у этажа, оно не должно быть больше 18 */
            currentFloor++; /* прибавляем один этаж */
            usCorrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, uceGroupping: false}); /* форматируем переменную с этажом, чтобы было не 2, а 02 */
            $('.counter').text(usCorrentFloor); /* записываем значение этажа в счетчик справа */
            floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
            $(`[data-floor=${usCorrentFloor}]`).toggleClass('current-floor'); /* подсвечиваем текущий этаж */
        }
    });

    counterDown.on('click', function (){
        /* отслеживаем клик по кнопке вниз */
        if (currentFloor > 2) {
         /* проверяем значение у этажа, оно не должно быть меньше 18 */
            currentFloor--;  /* отнимаем один этаж */
            usCorrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, uceGroupping: false});  /* форматируем переменную с этажом, чтобы было не 2, а 02 */
            $('.counter').text(usCorrentFloor); /* записываем значение этажа в счетчик справа */
            floorPath.removeClass("current-floor"); /* удаляем активный класс у этажей */
            $(`[data-floor=${usCorrentFloor}]`).toggleClass('current-floor'); /* подсвечиваем текущий этаж */
        }
    });
});