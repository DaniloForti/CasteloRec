$(function(){

	var delay = 5000;
	var curIndex = 0;
	var amt

	initSlider();

	autoPlay();

	function initSlider(){
		amt = $('.autores').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.autores').css('width', sizeBoxSingle+'%');
		$('.scroll-wraper').css('width', sizeContainer+'%');
		

		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}

	}


	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);
		},delay)
	}

	function goToSlider(curIndex){
		var offSetX = $('.autores').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});

	})

})
