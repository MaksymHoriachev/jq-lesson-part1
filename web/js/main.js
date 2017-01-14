$("#button1").click(function () {
    $("#text1").addClass("red");
});

$("#button2").click(function () {
    $("#text2").removeClass("red");
});

$("#button3").click(function () {
    $("#text3").toggleClass("red", 'switch');
});

$("#button4").click(function(){
    alert($("#button4").attr("type"));

});

$("#button5").click(function(){
    $("#text5").attr("class", "red");

});

$("#button6").click(function () {
    alert('Alert on click');
});

