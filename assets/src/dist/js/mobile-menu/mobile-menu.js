$(document).ready(function() {
	$(function() {
		if ($(window).width() < 1200){
			$('<div>', { class: 'mobile-menu__header'}).appendTo('.mobile-menu');

			$('.navbar .navbar-toggler').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .navbar-toggler').removeClass('d-none d-sm-block d-xl-none');

			$('.header__page-nav').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .header__page-nav').removeClass('header__page-nav float-right float-md-left');

			$('.enter-box').clone().appendTo('.mobile-menu__header');
			$('.mobile-menu__header .enter-box').removeClass('float-right');

			$('<form name="search" class="search" method="post" action="dist/search.php">' +
                '<input id="mobile-search-input" name="searchQuery" type="text" class="search__input" placeholder="Поиск по каталогу">' +
                '<label for="mobile-search-input"></label>' + 
              '</form>').appendTo('.mobile-menu__header');

			$('<div>', { class: 'mobile-menu__content'}).appendTo('.mobile-menu');
			$('<div>', { class: 'mobile-menu__nav'}).appendTo('.mobile-menu__content');
			
			$('.navbar-nav .nav-item').each(function(index) {
				var mobileAccordionNavItmText = $(this).find('.nav-link').text();
				if ($(this).hasClass('dropdown')) {

					var mobileAccordionNavItmContent = $(this).find('.dropdown-menu').html();
			
					$('<div class="mobile-menu-nav-itm">' + 
			            '<div class="mobile-menu-nav-itm__header" id="mobileNavAccordion'+index+'">' + 
			                '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse'+index+'" aria-expanded="true" aria-controls="collapse'+index+'">' +
			                        mobileAccordionNavItmText +
			                '</button>' +
			            '</div>' +
			            '<div id="collapse'+index+'" class="collapse" aria-labelledby="mobileNavAccordion'+index+'">' +
			                '<div class="mobile-menu-nav-itm__list">' +
			                    mobileAccordionNavItmContent +
			                '</div>' +
			            '</div>' +
        			'</div>').appendTo('.mobile-menu__nav');

				} else {
					var mobileAccordionNavItmContent = $(this).html();
					$('<div class="mobile-menu-nav-itm">' + 
						mobileAccordionNavItmContent +
						'</div>').appendTo('.mobile-menu__nav');

				};

			});

			$('.header__consult-btn').clone().appendTo('.mobile-menu');
			$('.mobile-menu .header__consult-btn').removeClass('d-sm-block d-none header__consult-btn');

		};

	 	$('.navbar-toggler').click(function(e) {
	 		e.preventDefault();
	 		if ($('.navbar-toggler').hasClass('open')) {
	 			closeMenu();
	    	} else {
	    		openMenu();
	    	};
	 	});

	 	function openMenu() {
			$('body').addClass('body_menu-open');
	 		$('.mobile-menu').addClass('open');
	 		$('.navbar-toggler').addClass('open');
 			createBodyOverlay();
		};

		function closeMenu() {
			$('body').removeClass('body_menu-open');
	 		$('.mobile-menu').removeClass('open');
	 		$('.navbar-toggler').removeClass('open');
	    	removeBodyOverlay();
		};

		function createBodyOverlay() {
			$('body').prepend('<div id="body-overlay" class="body-overlay"></div>');
			setTimeout(function () {
				$('#body-overlay').addClass('body-overlay_done');
			}, 500); 
			$('#body-overlay').click(function(e) {
	 			closeMenu();
	 		});
		};

		function removeBodyOverlay() {
			$('#body-overlay').removeClass('body-overlay_done');
	    	setTimeout(function () {
				$('#body-overlay').remove();
			}, 500); 
		};

		/*
			функция переноса объекта в контейнер.
			box - селектор объекта, который нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки
		*/

		function transfer(box, container) {
			$(container).append($(box));
		};
		/*
			функция переноса детей объекта в контейнер.
			box - селектор объекта, детей которого нужно перенести.
			container - cелектор объекта, куда нужно перенести.
			В параметры передавать строки.

		*/
		function transferChild(box, container) {
			$(container).append($(box).children());
		};
	
	});

});
