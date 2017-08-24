'use strict';

var stateBar = (function() {

	var template = '<div id="div-state"></div>';

	var component = function(props) {

		var $component = app.helpers.$build(template, '#div-state');

		$component.text(JSON.stringify(props));

		return $component;
	};

	return component;

})();