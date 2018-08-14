/**
 * Created by ASUS on 2018/1/29.
 */
var timer = setTimeout(function () {
    $('.wrapper').removeClass('init');
},100)

$('.item').on('click',function () {
    $(this).addClass('active');
    $('.wrapper').addClass('wrapper-active')
})
$('.close').on('click',function (e) {
    e.stopPropagation();
    $('.wrapper').removeClass('wrapper-active');
    $('.active').removeClass('active');
})