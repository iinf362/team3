$(document).ready(function(){

	$('.info').hide();

	$('button').on('click',function(){

		$(this).next('div').slideToggle(1000);
	});


	$('.one').hide();
	$('.two').hide();
	$('.three').hide();
	$('.four').hide();

	$('.sidebar ul li').on('click',function(){


		$(this).addClass("highlight")

		if( $(this).is(".link-one")){

			$('.three').hide()
			$('.two').hide();
			$('.one').show();
		//$( '.link-one' ).addClass( "high" );
		$( '.link-two' ).removeClass( "highlight" );
		$( '.link-three' ).removeClass( "highlight" );
	}
	else if( $(this).is(".link-two")){

		$('.one').hide();
		$('.three').hide()
		$('.two').show();
     		//$( '.link-two').addClass( "high" );
     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-three' ).removeClass( "highlight" );

     	}
     	else if( $(this).is(".link-three")){

     		$('.one').hide();
     		$('.two').hide();
     		$('.three').show()
     		//$( '.link-three').addClass( "high" );
     		$( '.link-one' ).removeClass( "highlight" );
     		$( '.link-two' ).removeClass( "highlight" );
     	}

     });




});


function scrollWin() {
	window.scrollTo(500, 0);
}
