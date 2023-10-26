(function($) {
	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

		var $popup3 = $('#popup3');

		$popup3._locked = false;

		$popup3._lock = function() {

			if ($popup3._locked)
				return false;

			$popup3._locked = true;

			window.setTimeout(function() {
				$popup3._locked = false;
			}, 350);

			return true;

		};


		$popup3._show = function() {

			if ($popup3._lock())
				$body.addClass('is-popup3-visible');

		};


		$popup3._hide = function() {

			if ($popup3._lock())
				$body.removeClass('is-popup3-visible');

		};

		$popup3._toggle = function() {

			if ($popup3._lock())
				$body.toggleClass('is-popup3-visible');

		};


		$popup3
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$popup3._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$popup3._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$popup3._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});


		$body
			.on('click', 'a[href="#popup3"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$popup3._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$popup3._hide();

			});


})(jQuery);