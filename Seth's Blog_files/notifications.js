/*
---------------------------------------------------------------------
Notifications JS
---------------------------------------------------------------------
*/

// extend our existing SG js
var SG = (function(SG, $) {
	SG.Notifications = {
		api_endpoint: '/wp-json/fn/v1/notifications/',
		notification_archive_url: '/all-notifications/',
		notification_element_id: '#notifications-notice',
		cookie_name: 'notifications_data',
		last_seen_notification: null,

		init: function() {
			if ( ! this.gdprCheck()) {
				// GDPR not accepted - notification tracking disabled.
				return false;
			}
			this.cookieCheck();
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
				Cookies.set( SG.Notifications.cookie_name, null, { expires: 365 } );
				// Empty cookie instantiated.
				if ($( '.notifications-archive' ).length < 1 && $( '.single-update' ).length < 1 ) {
					this.displayNotificationAlert();
				} else {
					// Do not display alert. Even though cookie was just instantiated, user is viewing a notification page.
				}
			} else {
				// Cookie data detected.
				user_notification_cookie    = Cookies.get( this.cookie_name );
				this.last_seen_notification = user_notification_cookie;
			}
			this.getNotifications();
		},

		requestNotifications: function() {
			setInterval( this.getNotifications, 5000 );
		},

		getNotifications: function() {
			// Retrieving notifications.
			$.ajax( SG.Notifications.api_endpoint ).done(
				function(response) {
					if (response.length > 0) {
						SG.Notifications.checkLastSeen( response );
					}
				}
			);
		},

		checkLastSeen: function(response) {
			// get notifications
			latest_notification = $.parseJSON( response );

			if ( latest_notification !== null && latest_notification.id != SG.Notifications.last_seen_notification) {

				this.updateCookieCheck( latest_notification.id );
			}
		},

		updateCookieCheck: function(latest_notification_id) {
			if ($( '.notifications-archive' ).length < 1 && $( '.single-update' ).length < 1) {
				// User is not viewing a notification page, do not update cookie.
				this.displayNotificationAlert();
				return;
			}
			// User is viewing a notification page. Updating cookie.
			Cookies.set( SG.Notifications.cookie_name, latest_notification_id, { expires: 365 } );
		},

		displayNotificationAlert: function() {
			// give it a few seconds before popping up!
			$( this.notification_element_id )
			.delay( 2000 )
			.show( 500 )
			.addClass( 'show' );
			$( '#menu-alert' )
			.delay( 1000 )
			.show( 500 );
			// Displaying news alert.
		},

		displayNotifications: function(new_notification_count) {
			if (new_notification_count < 0) {
				new_notification_count = '';
			}

			$( this.notification_element_id )
			.children( '.notification-count' )
			.html( new_notification_count );

			if (new_notification_count > 0) {
				$( this.notification_element_id ).show( 500 );
			} else {
				$( this.notification_element_id ).hide( 500 );
			}
		},

		markAsRead: function() {
			if ($( '.mark-read' ).length < 0) {
				return;
			}
			$( '.mark-read' ).click(
				function() {
					var nid = $( this ).data( 'notification-id' );
					if (SG.Notifications.notification_data.read_notifications.indexOf( nid ) == -1) {
						SG.Notifications.notification_data.read_notifications.push( nid );
						Cookies.set( SG.Notifications.cookie_name, SG.Notifications.notification_data, { expires: 365 } );
					}
				}
			);
		},

		setReadState: function() {
			// Setting read state.
			var notifications = $( '.mark-read' );
			$( notifications ).each(
				function(index, element) {
					var nid = $( this ).data( 'notification-id' );

					if (SG.Notifications.notification_data.read_notifications.indexOf( nid ) !== -1) {
						$( this )
						  .text( 'Marked Read' )
						  .parents( '.notification' )
						  .addClass( 'read-notification' );
					}
				}
			);
		}
	};

	/**
	 * Doc Ready
	 */
	$(
		function() {
			SG.Notifications.init();
		}
	);

	return SG;
})( SG || {}, jQuery );
