$(document).ready(function(){

	$('.link-one').addClass("highlight")
	$('.info').hide();

	$('button').on('click',function(){

		$(this).next('div').slideToggle(1000);
	});


	$('.two').hide();
	$('.three').hide();
	$('.four').hide();
	$('.five').hide();
	$('.six').hide();

	$('.side-bar ul li').on('click',function(){


		$(this).addClass("highlight")

		if( $(this).is(".link-one")){

			$('.three').hide()
			$('.two').hide();
			$('.four').hide();
			$('.six').hide();
			$('.five').hide();
			$('.seven').hide();
			$('.one').show();
		
		$( '.link-two' ).removeClass( "highlight" );
		$( '.link-three' ).removeClass( "highlight" );
		$('.link-four').removeClass("highlight");
		$('.link-five').removeClass("highlight");
     	$('.link-six').removeClass("highlight");
     	$('.link-seven').removeClass("highlight");
	}
	else if( $(this).is(".link-two")){

		$('.one').hide();
		$('.three').hide()
		$('.four').hide();
		$('.five').hide();
		$('.six').hide();
		$('.seven').hide();
		$('.two').show();


     	$( '.link-one' ).removeClass( "highlight" );
     	$( '.link-three' ).removeClass( "highlight" );
     	$('.link-four').removeClass("highlight");
     	$('.link-five').removeClass("highlight");
     	$('.link-six').removeClass("highlight");
     	$('.link-seven').removeClass("highlight");

     	}
     	else if( $(this).is(".link-three")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.four').hide();
     		$('.five').hide();
     		$('.six').hide();
     		$('.seven').hide();
     		$('.three').show()


     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-four').removeClass("highlight");
     		 $('.link-five').removeClass("highlight");
     		$('.link-six').removeClass("highlight");
     		$('.link-seven').removeClass("highlight");
     	}

     	    else if( $(this).is(".link-four")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.three').hide();
     		$('.five').hide();
     		$('.six').hide();
     		$('.seven').hide();
     		$('.four').show();


     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-three').removeClass("highlight");
     		$('.link-five').removeClass("highlight");
     		$('.link-six').removeClass("highlight");
     		$('.link-seven').removeClass("highlight");
     	}
     	    else if( $(this).is(".link-five")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.three').hide();
     		$('.four').hide();
     		$('.six').hide();
     		$('.seven').hide();
     		$('.five').show();

     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-three').removeClass("highlight");
     		$('.link-four').removeClass("highlight");
     		$('.link-six').removeClass("highlight");
     		$('.link-seven').removeClass("highlight");
     	}
     		else if( $(this).is(".link-six")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.three').hide();
     		$('.four').hide();
     		$('.five').hide();
     		$('.seven').hide();
     		$('.six').show();

     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-three').removeClass("highlight");
     		$('.link-four').removeClass("highlight");
     		$('.link-five').removeClass("highlight");
     		$('.link-seven').removeClass("highlight");
     	}
     	    else if( $(this).is(".link-seven")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.three').hide();
     		$('.four').hide();
     		$('.five').hide();
     		$('.six').hide();
     		$('.seven').show();

     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     		$('.link-three').removeClass("highlight");
     		$('.link-four').removeClass("highlight");
     		$('.link-five').removeClass("highlight");
     		$('.link-six').removeClass("highlight");
     	}




     });




});


function scrollWin() {
	window.scrollTo(500, 0);
}
