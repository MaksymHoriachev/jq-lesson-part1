$("#button1").on('click', function () {
    $("#text1").addClass("red");
});

$("#button2").on('click', function () {
    $("#text2").removeClass("red");
});

$("#button3").on('click', function () {
    $("#text3").toggleClass("red", 'switch');
});

$("#button4").on('click', function(){
    var button4 = $('#button4');
    alert(button4.attr('id'));
});

$("#button5").on('click', function(){
    $("#text5").attr("class", "red");
});

$("#button6").on('click', function () {
    alert('Alert on click');
});

$('#button7').on('click', function () {
    $('this').trigger(alert('Alert on trigger'));
});

$('#button8').on('click', function () {
    $(this).clone().appendTo('.clone').append('(cloned)');
});

$('#button9').on('click', function () {
    console.log($(this).closest('li'));
});

$('#button10').on('click', function () {

    var each = $('button').each(function (index, item) {
        item.append(' ');
    });
    console.log(each.text());

});

$('#button11').on('click', function () {
    console.log($('body').find('#button11'));
});

$('#button12').on('click', function () {
    $('#text12').fadeIn();
});

$('#button13').on('click', function () {
    $('#text13').fadeOut();
});

$('#button14').on('click', function () {
    $('#text14').hide();
});

$('#button15').on('click', function () {
    $('#text15').show();
});

$('#button16').on('click', function () {
    var dateThis = [
        $(this).height(),
        $(this).width(),
        $(this).offset(),
        $(this).attributes,
        $(this).parent(),
        $(this).prev(),
        $(this).next(),
        $(this).text()
    ];

    console.log(dateThis);
})

/* ---------------------------------- method --------------------------------- */

var methodDate = $('#btn1'),
    methodDatePar = $('#par1'),

    methodDetach = $('#btn2'),
    methodDetachPar = $('#par2'),

    methodEq = $('#btn3'),
    methodEqPar = $('.par3'),

    methodHas = $('#btn4'),
    methodHasPar = $('.par4'),

    methodHtml = $('#btn5'),
    methodHtmlPar = $('#par5'),

    methodIndex = $('#btn6'),
    methodIndexPar = $('#par6'),

    methodOff = $('#btn7'),
    methodOffPar = $('#par7'),

    methodProp = $('#btn8'),
    methodPropPar = $('#inp1'),

    methodRemove = $('#btn9'),
    methodRemovePar = $('#par8'),

    methodRemoveAttr = $('#btn10'),
    methodRemoveAttrPar = $('#par9'),

    methodResizePar = $('#par10'),

    methodScroll = $('#btn11'),
    methodScrollPar = $('#par11'),

    methodScrollTop = $('#btn12'),
    methodScrollTopPar = $('#par12'),

    methodSlideUp = $('#btn13'),
    methodSlideDown = $('#btn14'),
    methodSlideToggle = $('#btn15'),
    methodSlidePar = $('#par14');



methodDate.on('click', function () {
    methodDatePar.data('test', 'hello');
    methodDatePar.text(methodDatePar.data('test'));
});

methodDetach.on('click', function () {
    methodDetachPar.detach();
});

methodEq.on('click', function () {
    methodEqPar.eq(1).addClass('red');
});

methodHas.on('click', function () {
    var has = methodHasPar.hasClass('par4');
    console.log(has);
    methodHasPar.text(has + ", in console too");
});

methodHtml.on('click', function () {
    methodHtmlPar.html('<b>bold</b> text')
});

methodIndex.on('click', function () {
    var index = methodIndexPar.index(methodIndexPar);
    methodIndexPar.text(index);
});

methodOff.off('click', function () {
    var index = methodOffPar.index(methodOffPar);
    methodOffPar.text(index);
});

methodProp.on('click', function () {
    methodPropPar.prop('placeholder', 'placeholder');
});

methodRemove.on('click', function () {
    methodRemovePar.remove();
});

methodRemoveAttr.on('click', function () {
    methodRemoveAttrPar.removeAttr('class');
});

$(window).resize(function() {
    methodResizePar.append(".resize()<br>");
});

methodScroll.on('click', function () {
    methodScrollPar.scroll(function () {
        methodScrollPar.toggleClass('red');
    })
});

methodScrollTop.on('click', function () {
    var scroll = methodScrollTopPar.scrollTop();
    $('#par13').text('scroll: ' + scroll);
});

methodSlideUp.on('click', function () {
    methodSlidePar.slideUp();
});

methodSlideDown.on('click', function () {
    methodSlidePar.slideDown();
});

methodSlideToggle.on('click', function () {
    methodSlidePar.slideToggle();
});















