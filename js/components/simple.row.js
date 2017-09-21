'use strict';

var SimpleGridBody = (function() {

	return function(props) {

		var rows = props.elements.map(function(obj, i) {
						return SimpleGridRow({id: 'row-' + i}).append(
							props.columns.map(function(prop, index) {
								return SimpleGridCol({ id: 'col-' + index, text: obj[prop] });
							})
							.concat([SimpleColumnOption({ el: obj, removeRow: props.removeRow })])
						)
					});

		return $('<tbody>').append(
			rows.length? rows : $('<tr><td colspan="3">No records</td></tr>')
		);
	};
})();

var SimpleGridRow = (function() {
	return function(props) {
		return $('<tr>', { id: props.id });
	};
})();

var SimpleGridCol = (function() {
	return function(props) {
		return $('<td>', { id: props.id, text: props.text });
	}
})();

var SimpleColumnOption = (function() {

	return function(props) {

		var _delete = function(e) {
			e.preventDefault();
			props.removeRow(e, props.el);
		};

		var _edit = function(e) {
			e.preventDefault();
			alert('edit!');
		};

		return $('<td>').append([
					$('<button>', { 'class': 'delete', text: 'x', on: { 'click': _delete }}),
					$('<span>', { html: '&nbsp;&nbsp;' }),
					$('<button>', { 'class': 'edit', text: 'e', on: { 'click': _edit }})
				]);
	}
})();