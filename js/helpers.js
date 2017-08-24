'use strict';

(function (window) {

	var helpers = {

		$build: function(template, selector, id) {

			if (id) selector += '#' + id;

			var $el = $(selector);

			if (!$el.length) { 
				
				$el = $(template);

				if (id) $el.prop('id', id); 
			}

			return $el;
		},
		queryStringToJSON: function() {
			//
			// http://www.developerdrive.com/2013/08/turning-the-querystring-into-a-json-object-using-javascript/
			//
			var pairs = location.search.slice(1).split('&');
    
		    var result = {};
		    pairs.forEach(function(pair) {
		        pair = pair.split('=');
		        result[pair[0]] = decodeURIComponent(pair[1] || '');
		    });

		    return result;
		}
	};

	window.app = window.app || {};
	window.app.helpers = helpers;

})(window);