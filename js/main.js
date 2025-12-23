$("nav ul li a").click(function () {
    let id = $(this).attr("href");
    let spaceFromTop = $(id).offset().top;
    $("body , html").animate({ scrollTop: spaceFromTop }, 2000)
});



$(window).scroll(function () {
    let spaceFromAbout = $("#About").offset().top;
    console.log(spaceFromAbout);

    if ($(window).scrollTop() >= spaceFromAbout) {
        $(".arrowTop").fadeIn(1000).css("display", "flex")
    }
    else {
        $(".arrowTop").fadeOut(1000)
    }
})

$(".arrowTop").click(function () {
    $("html , body").animate({ scrollTop: 0 }, 3000)
})
