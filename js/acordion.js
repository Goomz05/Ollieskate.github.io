$(document).ready(function(){

$('.aaaa').hide()
$('.eeee').hide()
$('.iiii').hide()
$('.aaaa').on('click',function(){
$('.eeee').slideToggle();

});

$('.iiii').on('click',function(){

    let ind=$('.aaaa').index(this);
    let de= $('.eeee').eq(ind)
    aaaa.slideToggle(1000);



})



})