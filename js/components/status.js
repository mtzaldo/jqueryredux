'use strict';

var StateBar = (function() {
	return function(props) {
		return Section({id: 'status-bar'}).append([
			SectionBody().append([
				$('<div>', { id: 'div-state', text: JSON.stringify(props) })
			])
		]);
	};
})();