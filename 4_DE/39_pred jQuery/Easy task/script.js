//1
$("#mark").css("background-color", "yellow");

//2
$(".gone").click(function () {
    $(this).slideUp();
});

//3
$("#dclick").dblclick(function () {
    $(this).slideUp();
});


//4
$(".hide-btn").click(function () {
    $("p").hide();
});

$(".show-btn").click(function () {
    $("p").show();
});

$(".toggle-btn").click(function () {
    $("p").toggle(1000);
});

//5
$("#button-box").click(function () {
    $(".box").animate({
        height: "300px",
        width: "300px",
        marginLeft: "150px",
        borderWidth: "10px",
        opacity: 0.5
    });
});

//6
$("#callback").click(function () {
    $(".gone").hide(function () {
        alert('Hello');
    });
});





