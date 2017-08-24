'use strict';

var simpleRow = (function() {

	var template = '<tbody></tbody>';

	var component = function(props) {

		var $tbody = app.helpers.$build(template, '#simple-grid > tbody');

		$tbody.empty();

		var $row, $col, keys;

		//this must be a separate component
		if (!props.elements.length) $tbody.append('<tr><td colspan="3">No records</td></tr>');

		for(var i=0; i < props.elements.length; i++) {

			$row = $('<tr>').prop('id', 'row-' + i);

			keys = Object.keys(props.elements[i]);

			for (var j = 0; j < keys.length; j++) {

				$col = $('<td>').attr('data-col', 'col-' + j);
				
				$col.text(props.elements[i][ keys[j] ]);

				$row.append($col);
			}

			//this must be a separate component
			$row.append(
				simpleColumnOption(
					{ 
						el: $.extend({}, props.elements[i]), 
						removeRow: props.removeRow 
					}
				)
			);

			$tbody.append($row);
		}

		return $tbody;
	};

	return component;

})();

var simpleColumnOption = (function() {

	var template
		= '<td>'
		+	'<button class="delete">x</button>'
		+	' '
		+	'<button class="edit">e</button>'
		+ '</td>'

	var component = function(props) {

		var $col = $(template);

		$col.find('button.delete')
		.off('click')
		.on('click' , function(e) {

			props.removeRow(e, props.el);

		});

		$col.find('button.edit')
		.off('click')
		.on('click', function(e) {
			e.preventDefault();

			alert('edit!');
		});

		return $col;
	}

	return component;

})();