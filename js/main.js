$(document).ready(function(){

        $('.info').hide();

  $('button').on('click',function(){
    
     $(this).next('div').slideToggle(1000);
  });


});


function scrollWin() {
    window.scrollTo(500, 0);
}
