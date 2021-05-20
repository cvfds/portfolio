/* Navigation : 상단 개별 메뉴 */


/* Tab Menu */
$('.btn a:first-child').click(function(){
    $('.tab1').show()
    $('.tab2').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
$('.btn a:last-child').click(function(){
    $('.tab2').show()
    $('.tab1').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})

$('.modal').fadeOut();
/* Modal */
$('.open-modal-a').click(function(){
    $('.a').fadeIn()
})
$('.open-modal-b').click(function(){
    $('.b').fadeIn()
})
$('.open-modal-c').click(function(){
    $('.c').fadeIn()
})
$('.open-modal-d').click(function(){
    $('.d').fadeIn()
})
$('.open-modal-e').click(function(){
    $('.e').fadeIn()
})


$('.close-modal').click(function(){
    $('.modal').fadeOut()
})




$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
})

$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})