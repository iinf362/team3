$(document).ready(function(){

	$('.info').hide();

	$('button').on('click',function(){

		$(this).next('div').slideToggle(1000);
	});


	$('.one').hide();
	$('.two').hide();
	$('.three').hide();
	$('.four').hide();

	$('.side-bar ul li').on('click',function(){


		$(this).addClass("highlight")

		if( $(this).is(".link-one")){

			$('.three').hide()
			$('.two').hide();
			$('.four').hide();
			$('.one').show();
		
		$( '.link-two' ).removeClass( "highlight" );
		$( '.link-three' ).removeClass( "highlight" );
		$('.link-four').removeClass("highlight");
	}
	else if( $(this).is(".link-two")){

		$('.one').hide();
		$('.three').hide()
		$('.four').hide();
		$('.two').show();
     	$( '.link-one' ).removeClass( "highlight" );
     	$( '.link-three' ).removeClass( "highlight" );
     	$('.link-four').removeClass("highlight");

     	}
     	else if( $(this).is(".link-three")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.four').hide();
     		$('.three').show()
     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-four').removeClass("highlight");
     	}

     	    else if( $(this).is(".link-four")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.three').hide();
     		$('.four').show();
     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-three').removeClass("highlight");
     	}


     });




});


function scrollWin() {
	window.scrollTo(500, 0);
}
