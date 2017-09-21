'use strict';

var personalInfo = (function() {

	var state = {};

	return function(props) {

		var _onTextChange = function(e) {
			state = $.extend(true, {}, state, { [e.target.name]: e.target.value });
		};

		var _onSaveClick = function(e) {
			e.preventDefault();

			if (!(state.name && state.address && state.telephone)) {
				alert('Please provide a valid personal information input for the car');
				return false;
			}

			props.onSavePersonalInfoClick(e, state);

			state = {};
		};

		return Section({ id: 'personal-information'}).append([
					SectionHeader({ text: 'Personal Infomation: ' + (props.name || '') }),
					SectionBody().append([
						$('<input>', { type: 'text', 'name': 'name', 'placeholder': 'name', on: { 'change': _onTextChange }}),
						$('<br>'),
						$('<input>', { type: 'text', 'name': 'address', 'placeholder': 'address', on: { 'change': _onTextChange }}),
						$('<br>'),
						$('<input>', { type: 'text', 'name': 'telephone', 'placeholder': 'telephone', on: { 'change': _onTextChange }})
					]),
					SectionFooter({}).append([
						$('<button>', { id: 'btn-save', text: 'Save', on: { click: _onSaveClick }})
					])
			]);
	};
})();