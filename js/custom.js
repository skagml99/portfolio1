$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    const mcs = new Swiper('.main_banner_slide', {
        // loop: true,

        pagination: {
            clickable: true,
            el: '.main_banner .inner .right .page',
        },
    })

})

$(function () {
    const MMS = new Swiper('.main_content_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    })
});



// 서브페이지
$(function () {
    $('.subpage .sub_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.subpage .sub_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.sub_tab_content .tab_content').removeClass('on');
        $('.sub_tab_content .tab_content').eq(idx).addClass('on');
    })
})


// 반응형
$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    });


    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideDown();
        }
    });


    $(window).on('resize', function () {
        let w = $(window).width();

        if (w > 768) {
            $('.header .gnb').removeClass('on');
            $('.header .gnb>ul>li ul').removeAttr('style');
        }
    });
})
