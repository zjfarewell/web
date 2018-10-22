
    /*鼠标移过，左右按钮显示*/
    // jQuery(".focusBox").hover(function() {
    //     jQuery(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.8)
    // }, function() {
    //     jQuery(this).find(".prev,.next").fadeOut()
    // });
    /*SuperSlide图片切换*/
    jQuery(".focusBox").slide({
        mainCell: ".pic",
        effect: "fold",
        autoPlay: true,
        delayTime: 600,
        trigger: "click"
    });
    $(function() {
        var height = $(".banner .pic img").height();
        $(".focusBox").height(height);

    })
