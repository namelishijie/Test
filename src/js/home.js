var mySwiper = new Swiper('.swiper-container', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: '.swiper-pagination',
    paginationHide: true,
})
setFooter({
    active: 1, //当前位置
    success: function (data) {
        //点击回调
    }
})
setAjax.ajax({
    type: "get",
    url: './home',
    data: "json",
    success: function (data) {
        for (var i = 0; i < data.province.length; i++) {
            var arr = "<li>" + data.province[i] + "</li>";
            $(".province-top ul").append(arr)
        }
        for (var i = 0; i < data.subject.length; i++) {
            var arr = data.subject.slice(0, 5)[i].url;
            var url = "<li class=" + "swiper-slide-url" + "><div><img src=" + arr + "></div><div class=" + "swiper-slide-name" + ">" + data.subject[i].name + "</div></li>";
            $(".homeSlideshowdh").append(url);
        }
    },
    error: function () { }
})
$(".homeTopLeftBox").click(function () {
    if ($(".province-top").css("display") == "none") {
        $(".province-top").css("display", "inline-block");
    } else {
        $(".province-top").css("display", "none")
    }
})
$(".optionleft-left").click(function(){
    if($(".grade").css("display") == "none"){
        $(".grade").css("display", "inline-block");
    }else {
        $(".grade").css("display", "none")
    }
})
$(".grade ul li").click(function(){
    $(this).addClass("grade-color").siblings().removeClass("grade-color");
    $(".optionLeft-left").text($(this).text())
    $(".grade").css("display","none")
})
$(".optionLeft-right").click(function(){
    if($(".grade-two").css("display") == "none"){
        $(".grade-two").css("display", "inline-block");
    }else {
        $(".grade-two").css("display", "none")
    }
})
$(".grade-two ul li").click(function(){
    $(this).addClass("grade-color").siblings().removeClass("grade-color");
    $(".optionLeft-right-text").text($(this).text())
    $(".grade-two").css("display","none")
})