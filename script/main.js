$(function() {
    // $('.menu-item').mouseenter(function() {
    //     $('.sub-menu').stop().slideDown(200);
    //     $('.sub-bg').stop().slideDown(200);
    //     // $('header').css({'backdrop-filter': 'blur(50px)'})
    //     // $('header').css({'background-color': ''})
    // })
    // $('.menu-item').mouseleave(function() {
    //     $('.sub-menu').stop().slideUp(200);
    //     $('.sub-bg').stop().slideUp(200);
    //     // $('header').css({'backdrop-filter': ''})
    // })

    // $('.nav-btn').on('click', function() {
    //     $('.nav-menu').addClass('active')
    // })

    // $('.close').on('click', function() {
    //     $('.nav-menu').removeClass('active')
    // })

    // $(document).ready(function() {
    //     var now, next
    //     setInterval(function(){
    //         now = $('.main-slide-box').eq(0);
    //         next = $('.main-slide-box').eq(1);
    //         next.addClass('active').css('opacity', 0).animate({'opacity': 1}, 1000, function(){
    //             $('.main-slide-list').append(now);
    //             now.removeClass('active');
    //         })
    //     }, 4000)
    // })

    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 

        if(scrollValue > 1200 && scrollValue < 3800) {
            $('.fixed-bg').addClass('scrolled')
        } else if (scrollValue > 3800) {
            $('.main-cont').addClass('scrolled')
            $('.fixed-bg').addClass('bottom')
            $('.fixed-bg').removeClass('scrolled')

        } else if (scrollValue < 1200) {
            $('.fixed-bg').removeClass('scrolled')
            $('.main-cont').removeClass('scrolled')
            $('.fixed-bg').removeClass('bottom')
        }
         else {
            $('.mo-scroll').addClass('scrolled')
            
            

        }
    });
})