var app = {
    bannerSwiper: null,
    productSwiper: null,
    faqSwiper: null,

    init: function ()
    {
        //nav 点击
        this.onNavClick();
        // 语言选择事件
        this.onLanguageClick();
        //
        this.onScrollNav();
    },
    onNavClick: function ()
    {
        $("#nav").on("click", "li", function ()
        {
            //获取元素id
            var elementId = $(this).data("boxid");
            //获取元素高度
            var elementTop = $('#' + elementId).offset().top - 150;

            //清楚所有的active
            $("#nav").find('li').removeClass('active');
            $(this).addClass('active');

            $('html,body').animate({ scrollTop: elementTop }, 500);
        })
    },
    onLanguageClick: function ()
    {
        $("#language").on("click", function ()
        {
            $("#selectlang").show();
        })
        $("#selectlang").on("click", "li", function (e)
        {
            let event = e || window.event;
            event.stopPropagation();
            $("#selectlang").hide();
        })
    },
    onScrollNav: function ()
    {
        let welcomeHeight = $('#welcome').offset().top - document.documentElement.clientHeight + 300;
        let aboutHeight = $('#about').offset().top - document.documentElement.clientHeight + 300;
        let projectHeight = $('#project').offset().top - document.documentElement.clientHeight + 300;
        let databankHeight = $('#data-bank').offset().top - document.documentElement.clientHeight + 300;
        let teamHeight = $('#team').offset().top - document.documentElement.clientHeight + 300;
        $(document).on('scroll', function ()
        {
            if ($(document).scrollTop() >= teamHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=team]").addClass('active');
            }else if ($(document).scrollTop() >= databankHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=data-bank]").addClass('active');
            }else if ($(document).scrollTop() >= projectHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=project]").addClass('active');
            }else if ($(document).scrollTop() >= aboutHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=about]").addClass('active');
            }else if ($(document).scrollTop() >= welcomeHeight)
            {
                $("#nav").find('li').removeClass('active');
                $("ul li[data-boxid=welcome]").addClass('active');
            }

        })
    }
}


$(function ()
{
    app.init();
})