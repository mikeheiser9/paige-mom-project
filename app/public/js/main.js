 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

$(document).ready(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	// Scrollax
  $.Scrollax();


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
	        nav:false
	      },
	      600:{
	        items:1,
	        nav:false
	      },
	      1000:{
	        items:1,
	        nav:false
	      }
	    }
	   });


		$('.carousel').owlCarousel({
			animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});

		$('.carousel1').owlCarousel({
			loop: false,
			items:1,
			margin: 30,
			stagePadding: 10,
			nav: false,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

		$('.carousel-engine').owlCarousel({
			loop: false,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 4
				}
			}
		});
	};
	carousel();

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};
	burgerMenu();
	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $("#jscriptContainer").html('<div class="flex-img-row"><div class="flex-img-column"><img src="./images/horse-stock.jpg" style="width:100%"><img src="./images/horse1.JPG" style="width:100%"><img src="./images/horse-sunset.JPG" style="width:100%"><img src="./images/horse4.JPG" style="width:100%"><img src="./images/tape-on-horse.JPG" style="width:100%"><img src="./images/stables.JPG" style="width:100%"></div><div class="flex-img-column"><img src="./images/horse3.JPG" style="width:100%"><img src="./images/tape-on-horse-3.JPG" style="width:100%"><img src="./images/horse-care.jpg" style="width:100%"><img src="./images/ankle-tape-2.JPG" style="width:100%"><img src="./images/horse-sketch.JPG" style="width:100%"><img src="./images/horse5.JPG" style="width:100%"><img src="./images/horse2.JPG" style="width:100%"></div></div><div class="learn-more-link"><a href="javascript:void(0)"><p>Learn More</p></a></div>');

  var homeRoute = function () {
	$("#home").on('click', function(ev) {
		ev.preventDefault();
		loader();
		$("#jscriptContainer").empty();
		$("#jscriptContainer").html('<div class="flex-img-row"><div class="flex-img-column"><img src="./images/horse-stock.jpg" style="width:100%"><img src="./images/horse1.JPG" style="width:100%"><img src="./images/horse-sunset.JPG" style="width:100%"><img src="./images/horse4.JPG" style="width:100%"><img src="./images/tape-on-horse.JPG" style="width:100%"><img src="./images/stables.JPG" style="width:100%"></div><div class="flex-img-column"><img src="./images/horse3.JPG" style="width:100%"><img src="./images/tape-on-horse-3.JPG" style="width:100%"><img src="./images/horse-care.jpg" style="width:100%"><img src="./images/ankle-tape-2.JPG" style="width:100%"><img src="./images/horse-sketch.JPG" style="width:100%"><img src="./images/horse5.JPG" style="width:100%"><img src="./images/horse2.JPG" style="width:100%"></div></div><div class="learn-more-link"><a href="javascript:void(0)"><p>Learn More</p></a></div>');
		$('body').removeClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 100);
	})
}
homeRoute();



var aboutZoeRoute = function () {
	$("#about").on('click', function(ev) {
		ev.preventDefault();
		$("#jscriptContainer").empty();
		$("#jscriptContainer").html('<div class="row"><div class="flex-container-col"><div class="header-row-left"><h2 class="section-header">About Zoe</h2></div></div></div><div class="row"><div class="bio-row"><div class="text-body-img"><img src="./images/horse5.JPG" class="text-img"><p class="bio-txt">Dear horse lovers,<br><br>I rode my first horse at 5 years old only weeks before a ten day camping trip on horseback with my sister and parents, each of us on our own horses.  There was a mix of utter terror and love for these beautiful creatures.<br><br>My sister and I were only ever able to save enough birthday and Christmas money to buy horses no one else wanted, so the physically and emotionally challenged horse is no stranger to me.  My own horse requires special understanding and regular Equi-Bow and Equi-Tape to help support him from a past that has left him with some physical and emotional scars.<br><br>It is this love and desire that led me to a career in support of equine health.  It is a great honour to be asked to help a horse, mini or donkey.  I love what I do and I am so grateful to all the equines that have taught me so graciously.<br><br>In keeping with raising our awareness to our horses’ individual needs to attain optimal health,I feel that we can support our horses more if we can keep our own bodies balanced and fit so that our horses are not needing to adjust their own bodies to compensate for our imbalances and areas we could be stronger.  In support of our own health and in turn, that of our beloved horse, I am able to design individual no nonsense programs for personal goals to do alone and/or also programs you can do with your horse out of saddle that are very effective, very fun and wonderful opportunities for other means of bonding with your horse<br><br>Namaste.<br><br>Zoё Mercer</p></div></div></div>');
		$('body').removeClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 100);
	})
}
aboutZoeRoute();

var aboutTapeRoute = function () {
	$("#learn").on('click', function(ev) {
		ev.preventDefault();
		$("#jscriptContainer").empty();
		$("#jscriptContainer").html('<div class="row"><div class="flex-container-col"><div class="header-row-left"><h2 class="section-header">About Equine Support</h2></div></div></div><div class="row"><div class="bio-row"><div class="text-body-img"><img src="./images/tape-on-horse.JPG" class="text-img"><p class="section-header">What is Equi-Bow?</p><p class="bio-txt"><br><br>I rode my first horse at 5 years old only weeks before a ten day camping trip on horseback with my sister and parents, each of us on our own horses.  There was a mix of utter terror and love for these beautiful creatures.</p><p class="section-header">Equi-Bow in Greater Depth</p><p class="bio-txt"><br><br>I rode my first horse at 5 years old only weeks before a ten day camping trip on horseback with my sister and parents, each of us on our own horses.  There was a mix of utter terror and love for these beautiful creatures.</p><p class="bio-txt">I rode my first horse at 5 years old only weeks before a ten day camping trip on horseback with my sister and parents, each of us on our own horses.  There was a mix of utter terror and love for these beautiful creatures.</p><p class="section-header">Is Equi-Bow going to be something my horse will need all its life?</p><p class="bio-txt"><br><br>I rode my first horse at 5 years old only weeks before a ten day camping trip on horseback with my sister and parents, each of us on our own horses.  There was a mix of utter terror and love for these beautiful creatures.</p><p class="bio-txt">I rode my first horse at 5 years old only weeks before a ten day camping trip on horseback with my sister and parents, each of us on our own horses.  There was a mix of utter terror and love for these beautiful creatures.</p></div></div></div>');

		$('body').removeClass('menu-show');
				setTimeout(function(){
					$('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
				}, 100);
	})
}
aboutTapeRoute();

});

