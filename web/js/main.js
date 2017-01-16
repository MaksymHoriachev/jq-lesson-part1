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


























