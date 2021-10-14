/**
 * Common JS.
 */

// Open external links in a new browser tab.
jQuery( document ).ready(
	function() {
			jQuery( document.links ).filter(
				function() {
					return this.hostname != window.location.hostname;
				}
			).attr( 'target', '_blank' );
	}
);
