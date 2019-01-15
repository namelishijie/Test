
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
        // 地区选择
        for (var i = 0; i < data.province.length; i++) {
            var arr = "<li>" + data.province[i] + "</li>";
            $(".province-top ul").append(arr)
        }
        $(".province-top ul li").click(function () {
            $(".homeTopLeftBoxSite").text($(this).text())
        })
        // 轮播图
        var add = [];
        function swiperArr() {
            var div = "<div class=" + "swiper-slide" + " style=" + "display: flex;" + ">";
            for (var key in add) {
                div += "<div class=" + "homeSlideshowdh" + "><img src=" + add[key].url + "><p>" + add[key].name + "</p></div>";
            }
            div += "</div>";
            $(".homeSlideshow.swiper-wrapper").append(div);
            add = [];
        }
        for (var i = 0; i < data.subject.length; i++) {
            if ((i + 1) % 5 == 0) {
                add.push(data.subject[i]);
                swiperArr();
            } else {
                add.push(data.subject[i])
            }
        }
        if (add.length != "") {
            swiperArr();
        }
        var mySwiper = new Swiper('.swiper-container', {
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            pagination: '.swiper-pagination',
            paginationHide: true,
        });
        // 推荐
        for (var i = 0; i < data.activity.length; i++) {
            $(".headline-box-bottom").append("<div class=" + "recommend" + "><div class=" + "recommend-left" + "></div> <div class=" + "recommend-center" + "><div>" + data.activity[i].name + "</div><div class=" + "recommend-center-font" + "><ul><li class=" + "icon-fosize" + "></li></ul></div><div class=" + "recommend-center-bottom" + ">朋友圈</div></div><div class=" + "recommend-right" + ">￥" + data.activity[i].money + "</div></div>");
        }
        for (var i = 0; i < 5; i++) {
            var font = "<i class='iconfont icon-iconfontstar'></i>";
            $(".icon-fosize").append(font);   
        }
        for(var j=0;j<data.activity.length;j++){
            for (var c = 0; c< data.activity[j].star; c++) {
                $(".recommend").eq(j).find(".iconfont").eq(c).addClass("recommend-center-icon");
            }
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
$(".optionleft-left").click(function () {
    if ($(".grade").css("display") == "none") {
        $(".grade").css("display", "inline-block");
    } else {
        $(".grade").css("display", "none")
    }
})
$(".grade ul li").click(function () {
    $(this).addClass("grade-color").siblings().removeClass("grade-color");
    $(".optionLeft-left").text($(this).text())
    $(".grade").css("display", "none")
})
$(".optionLeft-right").click(function () {
    if ($(".grade-two").css("display") == "none") {
        $(".grade-two").css("display", "inline-block");
    } else {
        $(".grade-two").css("display", "none")
    }
})
$(".grade-two ul li").click(function () {
    $(this).addClass("grade-color").siblings().removeClass("grade-color");
    $(".optionLeft-right-text").text($(this).text())
    $(".grade-two").css("display", "none")
})