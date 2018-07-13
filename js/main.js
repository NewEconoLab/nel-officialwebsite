var app = {
    init: function ()
    {
        //nav 点击
        this.onNavClick();
        // 语言选择事件你
        this.onLanguageClick();
        //
        this.onScrollNav();
        //
        this.onToggleMenu();
    },
    onNavClick: function ()
    {
        $("#nav").on("click", "li", function ()
        {
            $("#right").removeClass("active");
            //获取元素id
            var elementId = $(this).data("boxid");
            //获取元素高度
            var elementTop = $('#' + elementId).offset().top - 100;

            //清楚所有的active
            $("#nav").find('li').removeClass('active');
            $(this).addClass('active');

            $('html,body').animate({ scrollTop: elementTop }, 500);
        })
    },
    onLanguageClick: function ()
    {
        let flag = false;
        $("#language").on("click", function ()
        {
            flag = !flag;
            if(flag){
                $("#selectlang").show();
            }else{
                $("#selectlang").hide();
            }
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
    },
    onToggleMenu(){
        $("#menu").on('click',function(){
            $("#right").addClass("active");
        })
        $("#closeBtn").on('click',function(){
            $("#right").removeClass("active");
        })
    }
}


$(function ()
{
    app.init();
})