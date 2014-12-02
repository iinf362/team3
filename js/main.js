$(document).ready(function(){

        $('.info').hide();

  $('button').on('click',function(){
    
     $(this).next('p').slideToggle(1000);
  });


});


function scrollWin() {
    window.scrollTo(500, 0);
}
