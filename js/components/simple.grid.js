'use strict';

var simpleGrid = (function() {

	var template
		= '<table id="simple-grid" cellspacing="1" cellpadding="5">'
		+	'<thead>'
		+		'<th>Maker</th>'
		+		'<th>Model</th>'
		+		'<th>options</th>'
		+	'</thead>'
		+ '</table>';

	var component = function(props) {

		var $partial = app.helpers.$build(template, '#simple-grid');

		var $content = simpleRow(props);

		$partial.append($content);

		return $partial;
	};

	return component;

})();