$(function() {
   $('.faq-link').on('click', function() {
       $(this).next('.faq-detail').slideToggle(100);
   })

   $('.category-item').on('click', function() {
    $(this).addClass('active')
    $(this).siblings('.category-item').removeClass('active')
   })
})