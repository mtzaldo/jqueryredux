'use strict';

var carInfo = (function() {

	var template
			= '<div id="car-information" class="section">'
			+		'<div class="section-header">Car Infomation</div>'
			+		'<div class="section-body">'
			+			'<input type="text" name="maker" placeholder="maker"> '
			+			'<input type="text" name="model" placeholder="model"> '
			+			'<button id="btn-save">Save</button>'
			+		'</div>'
			+		'<div class="section-footer"></div>'
			+ '</div>';

	var component = function(props) {

		var $partial = app.helpers.$build(template, '#car-information');

		$partial
		.find('button#btn-save')
		.off('click')
		.on('click', function(e) {
			e.preventDefault();
			
			var $maker = $partial.find('input[name="maker"]');
			var $model = $partial.find('input[name="model"]');

			props.onAddCarInfoClick(e, { maker: $maker.val(), model: $model.val() });

			$maker.val('');
			$model.val('');

		});
		var elements = props.elements.sort( function(a, b) { return a.maker > b.maker; } );
		var $grid = simpleGrid({ elements: props.elements, removeRow: props.onRemoveCarInfoClick });

		$partial.find('.section-footer').append($grid);

		return $partial;
	};

	return component;

})()