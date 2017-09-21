'use strict';

var SimpleGrid = (function() {

	return function(props) {

		return $('<table>', { id: 'simple-grid', cellspacing: 1, cellpadding: 5 }).append([
				SimpleGridHeader(props),
				SimpleGridBody( $.extend(true, {}, props, { columns : ['maker', 'model'] }) )
			]);
	};
})();

var SimpleGridHeader = (function() {
	return function(props) {
		return $('<thead>').append([
					$('<th>', { text: 'Maker' }),
					$('<th>', { text: 'Model' }),
					$('<th>', { text: 'options' })
				]);
	}
})();