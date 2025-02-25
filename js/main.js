AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});

jQuery(document).ready(function ($) {

	"use strict";


	// $(".loader").delay(1000).fadeOut("slow");
	//  $("#overlayer").delay(1000).fadeOut("slow");	

	// Variables for customization
	const typeSpeed = 100;  // Speed of typing in milliseconds per character
	const backSpeed = 50;   // Speed of deleting in milliseconds per character
	const backDelay = 1500; // Delay before starting to delete after text is typed
	const jobRoles = [
		"Data Analyst... ",
		"BI Analyst... ",
		"Data Scientist... "
	];

	// Setting up the index for the job roles
	let currentRoleIndex = 0;
	const jobRoleElement = document.getElementById("job-role");

	let isDeleting = false; // To track whether the text is being deleted
	let text = '';          // Current text being typed/deleted
	let roleIndex = 0;      // Index to track current character in the current job role

	// Function to type and delete job role text dynamically
	function typeEffect() {
		if (isDeleting) {
			text = jobRoles[currentRoleIndex].substring(0, roleIndex--); // Delete character
			jobRoleElement.textContent = "I'm a " + text;
		} else {
			text = jobRoles[currentRoleIndex].substring(0, roleIndex++); // Type character
			jobRoleElement.textContent = "I'm a " + text;
		}

		// When the full job role is typed, start the deleting process
		if (roleIndex === jobRoles[currentRoleIndex].length) {
			isDeleting = true;
			setTimeout(typeEffect, backDelay); // Wait for backDelay before starting deletion
			return;
		}

		// When all characters are deleted, move to the next role
		if (isDeleting && roleIndex === 0) {
			isDeleting = false;
			currentRoleIndex = (currentRoleIndex + 1) % jobRoles.length; // Cycle to next job role
		}

		// Control the typing and deleting speed
		const speed = isDeleting ? backSpeed : typeSpeed;
		setTimeout(typeEffect, speed);
	}

	// Start the typing effect
	typeEffect();



	// Change job role every 3 seconds
	setInterval(changeJobRole, 1000);

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

	document.addEventListener('DOMContentLoaded', function () {
		const animatedElements = document.querySelectorAll('.animated');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
				}
			});
		}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

		animatedElements.forEach(element => {
			observer.observe(element);
		});
	});


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();



	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 0,
				autoplay: true,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					600: {
						margin: 0,
						nav: true,
						items: 2
					},
					1000: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 3
					},
					1200: {
						margin: 0,
						stagePadding: 0,
						nav: true,
						items: 4
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1000,
			autoplay: true,
			pauseOnHover: false,
			autoHeight: true,
			nav: false,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});


	};
	siteCarousel();

	var siteStellar = function () {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	// siteStellar();


	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');
		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top
			}, 600, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();


	var siteIstotope = function () {
		/* activate jquery isotope */
		var $container = $('#posts').isotope({
			itemSelector: '.item',
			isFitWidth: true
		});

		$(window).resize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({ filter: '*' });

		// filter items on button click
		$('#filters').on('click', 'button', function (e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });
			$('#filters button').removeClass('active');
			$(this).addClass('active');
		});
	}

	siteIstotope();


	$('.fancybox').on('click', function () {
		var visibleLinks = $('.fancybox');

		$.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

		return false;
	});

	
  document.addEventListener("DOMContentLoaded", function() {
    // Select the menu toggle button and menu
    const menuToggle = document.querySelector('.js-menu-toggle');
    const menu = document.querySelector('.js-site-menu');

    menuToggle.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      // Toggle the active class on the menu
      menu.classList.toggle('active');
      // Optionally toggle active class on the hamburger icon
      menuToggle.classList.toggle('active');
    });
  });



});