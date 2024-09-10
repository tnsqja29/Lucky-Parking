$(function() {
    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 

        if(scrollValue > 0 && scrollValue < 2770) {
            $('.fixed-bg').addClass('scrolled')
        } else if (scrollValue > 2760) {
            $('.main-cont').addClass('scrolled')
            $('.fixed-bg').addClass('bottom')
            $('.fixed-bg').removeClass('scrolled')

        } else if (scrollValue < 0) {
            $('.fixed-bg').removeClass('scrolled')
            $('.main-cont').removeClass('scrolled')
            $('.fixed-bg').removeClass('bottom')
        } 
         else {
            $('.mo-scroll').addClass('scrolled')
        }
    });

    $(window).scroll(function () { 
        var scrollValue = $(document).scrollTop(); 
        console.log(scrollValue); 

        if(scrollValue > 700 && scrollValue < 1700) {
            $('.first').removeClass('active')
            $('.second').addClass('active')
            $('.third').removeClass('active');
        } else if (scrollValue < 1700) {
            $('.first').addClass('active')
            $('.second').removeClass('active');
            $('.third').removeClass('active');
        } else if (scrollValue > 1700 && scrollValue < 2500) {
            $('.third').addClass('active');
            $('.second').removeClass('active');
            $('.fourth').removeClass('active');
            $('.first').removeClass('active')
        } else if (scrollValue > 2500) {
            $('.fourth').addClass('active');
            $('.third').removeClass('active');
            $('.first').removeClass('active')
        }
        
    })
})