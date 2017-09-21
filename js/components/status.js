'use strict';

var StateBar = (function() {
	return function(props) {
		return $('<div>', { id: 'div-state', text: JSON.stringify(props) })
	};
})();