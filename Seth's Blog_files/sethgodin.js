/*
---------------------------------------------------------------------
Seth Godin JS
---------------------------------------------------------------------
*/

var SG = (function(SG, $) {
	/**
	 * Custom Social Share icons open windows
	 * @type {Object}
	 */
	SG.Social = {
		init: function() {
			if ($( '.js-social-share' ).length < 1) {
				return;
			}
			$( '.js-social-share' ).on( 'click', this.open );
		},

		open: function(event) {
			event.preventDefault();

			SG.Social.windowPopup( $( this ).attr( 'href' ), 500, 300 );
		},

		windowPopup: function(url, width, height) {
			// Calculate the position of the popup so
			// it’s centered on the screen.
			var left = screen.width / 2 - width / 2,
			top      = screen.height / 2 - height / 2;

			window.open( url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left );
		}
	};

	SG.copyURLtoClipboard = {
		init: function() {
			// $('.js-copy-url').on('click', this.copyURL);
			var clipboard = new ClipboardJS( '.js-copy-url' );
			clipboard.on(
				'success',
				function(event) {
					var target = event.trigger;
					$( target ).addClass( 'copied' );
					setTimeout(
						function() {
							$( target ).removeClass( 'copied' );
						},
						2000
					);
				}
			);
		}
	};

	SG.mobileMenu = {
		init: function() {
			if ($( '#menu-open' ).length < 1) {
				return;
			}
			this.bind();
		},

		bind: function() {
			$( '#menu-alert' ).click( SG.mobileMenu.openMenu );
			$( '#menu-open' ).click( SG.mobileMenu.openMenu );
			$( '#menu-close' ).click( SG.mobileMenu.closeMenu );
		},

		openMenu: function() {
			$( '.mobile-actions' ).addClass( 'open' );
			$( '#sidebar' ).addClass( 'menu-open' );
			$( '#content-container' ).addClass( 'menu-open' );
			$( '.sidebar-content' ).show();
			$( 'body' ).css(
				{
					height: '100vh',
					overflow: 'hidden'
				}
			);
		},

		closeMenu: function() {
			$( '.mobile-actions' ).removeClass( 'open' );
			$( '#sidebar' ).removeClass( 'menu-open' );
			$( '#content-container' ).removeClass( 'menu-open' );
			$( '.sidebar-content' ).hide();
			$( 'body' ).css(
				{
					height: 'auto',
					overflow: 'auto'
				}
			);
		}
	};

	/**
	 * Doc Ready
	 */
	$(
		function() {
			SG.Social.init();
			SG.copyURLtoClipboard.init();
			SG.mobileMenu.init();
		}
	);

	return SG;
})( SG || {}, jQuery );
