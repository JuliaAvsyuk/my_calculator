$(document).ready(function () {
    let calc = $('.calculator');
    let calcDisplay = calc.find('.calculator_display');
    let calcKeys = calc.find('.calculator_key');
    let calcButton = calc.find('.calculator_button');
    let calcClear = calc.find('.calculator_clear');
    let calcEqual = calc.find('.calculator_key--equal');
    let calcPower = calc.find('.calculator_power');
    let calcSpace = calc.find('.calculator_backspace');

    calcKeys.each(function () {
        let current = $(this).attr('value');
        $(this).text(current);
    });

    calcButton.on('click', function () {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
    });

    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });

    calcPower.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 3));
    });

    calcSpace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0,calcDisplay.val().length-1));
    });
});
