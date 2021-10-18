var SG = (function(SG, $) {
	SG.Nudge = {
		cookie_name: 'nudge_data',
		nudge_data: {
			first_visit: null,
			declined: false
		},
		nudge_count: 0,

		init: function() {
			if ( ! this.gdprCheck()) {
				// GDPR not accepted - subscription nudge disabled.
				return false;
			}
			this.cookieCheck();
			this.bind();
		},

		bind: function() {
			$( '#nudge-close' ).click( SG.Nudge.hideNudge );
		},

		gdprCheck: function() {
			if (Cookies.get( 'gdpr_accept' ) == 'true') {
				return true;
			} else {
				return false;
			}
		},

		cookieCheck: function() {
			if (typeof Cookies.get( this.cookie_name ) == 'undefined') {
				// No cookie data detected.
				var today                   = new Date(); // get today's date
				this.nudge_data.first_visit = today.toUTCString(); // update nudge_data

				// Empty cookie instantiated.
				Cookies.set( SG.Nudge.cookie_name, this.nudge_data, { expires: 365 } );
			} else {
				// Cookie data detected.
				user_cookie     = Cookies.getJSON( this.cookie_name );
				this.nudge_data = user_cookie;
				this.decideToNudge();
			}
		},

		decideToNudge: function() {

			// the user has not closed/ignored the subscription nudge.
			if ( ! this.nudge_data.declined) {
				// get day of first visit from nudge_data.
				var first_visit = Date.parse( this.nudge_data.first_visit );
				var today       = new Date();
				today + 24 * 60 * 60 * 1000;

				var timediff    = today - first_visit; // calculate how many days have passed.
				var days_passed = timediff / (24 * 60 * 60 * 1000);
				days_passed     = days_passed.toFixed( 2 );

				// between 24 and 48hrs from first visit.
				if (days_passed >= 1 && days_passed <= 2) {
					// Between 1 & 2 days. Display nudge.
					this.displayNudge();
				} else if (days_passed > 2) {
					// more than 2 days have passed, set declined flag
					this.nudge_data.declined = true;
					// More than 2 days have passed since first visit. Setting declined flag.
					Cookies.set( this.cookie_name, this.nudge_data, { expires: 365 } );
				} else {
					// It has not been over 24 hours since first visit.
				}
			}
		},

		displayNudge: function() {
			$( '#subscription-nudge' ).show();
		},

		hideNudge: function() {
			$( '#subscription-nudge' ).hide();
			SG.Nudge.nudge_data.declined = true;

			// User has closed/ignored the subscription nudge. Setting declined flag.
			Cookies.set( SG.Nudge.cookie_name, SG.Nudge.nudge_data, { expires: 365 } );
		}
	};

	/**
	 * Doc Ready
	 */
	$(
		function() {
			SG.Nudge.init();
		}
	);

	return SG;
})( SG || {}, jQuery );
