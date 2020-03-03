$(document).ready(function(){
  $('.banner-cont_slider').slick({
  	responsive: [
  		{
	      breakpoint: 426,
	      settings: {
	      	autoplay: true,
	        arrows: false,
	        //centerMode: true,
	        //centerPadding: '10px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
  	]
  });

  $('.services-body_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        //arrows: false,
	        centerMode: true,
	        centerPadding: '20px',
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 426,
	      settings: {
	      	//autoplay: true,
	        arrows: false,
	        centerMode: true,
	        //centerPadding: '10px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});



  $('.feedback-body_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 769,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '10px',
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 577,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '10px',
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 426,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '65px',
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

/*Смена цифры в слайдере*/
$(".feedback-body_slider").on("afterChange", function(event, slick, currentSlide, nextSlide){
    $(".feedback-body_motoring-num .current-num").text(currentSlide + 1);
});

/*Количество в слайдере*/
$(".feedback-body_motoring-num .all-num").text(
	$(".feedback-body_slider").slick("getSlick").slideCount
);

});