'use strict';

var CarInformation = (function() {

	var state = {}

	return function(props) {

		var _addClick = function(e) {
			e.preventDefault();

			if (!(state.maker && state.model)) {
				alert('Please provide a valid input');
				return false;
			}
			
			props.onAddCarInfoClick(e, state );

			state = {};
		};

		var _onTextChange = function(e) {
			state = $.extend(true, {}, state, { [e.target.name]: e.target.value });
		};

		props.elements.sort( function(a, b) { return a.maker > b.maker; } );

		return Section({ id: 'car-information'}).append([
					SectionHeader({ text: 'Car Information'}),
					SectionBody().append([
						$('<input>', { type: 'text', 'name': 'maker', 'placeholder': 'maker', on: { 'change': _onTextChange }}),
						$('<input>', { type: 'text', 'name': 'model', 'placeholder': 'model', on: { 'change': _onTextChange }}),
						$('<button>', { id: 'btn-add', text: 'Add', on: { 'click': _addClick }}),
						SimpleGrid({ elements: props.elements, removeRow: props.onRemoveCarInfoClick })
					]),
					SectionFooter()
			]);
	};
})()