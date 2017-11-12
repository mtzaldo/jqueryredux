'use strict';

(function(window) {

	var PersonalInformation = function(props) {

		return (function() {

			var state = {};

			var _onTextChange = function(e) {

				state = $.extend(true, {}, state, { [e.target.name]: e.target.value });
				
				if (props.validators[e.target.name]) {
					if (props.validators[e.target.name](e.target.value)) {
						$(e.target).removeClass('highlight');
					} else {
						$(e.target).addClass('highlight');
					}
				}
			};

			var _onSaveClick = function(e) {

				e.preventDefault();

				var val = ['name', 'address', 'zip', 'telephone'];

				var areValid = val.reduce(function(a, v) {

					var isValid = true;

					if(props.validators[v]) {
						if(!props.validators[v](state[v])) {
							console.log(v + ' is not valid.');
							isValid = false;
						}
					}

					return a && isValid;

				}, true);

				if (!areValid) {
					alert('Please provide a valid personal information input for the car');
					return false;
				}

				props.onSavePersonalInfoClick(e, state);
			};

			return Section({ id: 'personal-information'}).append([
						SectionHeader({ text: 'Personal Infomation: ' + (props.name || '') }),
						SectionBody().append([
							$('<input>', { type: 'text', 'name': 'name', 'placeholder': 'name', on: { 'change': _onTextChange }}),
							$('<input>', { type: 'text', 'name': 'address', 'placeholder': 'address', on: { 'change': _onTextChange }}),
							$('<br>'),
							$('<input>', { type: 'text', 'name': 'zip', 'placeholder': 'zip', on: { 'change': _onTextChange }}),
							$('<input>', { type: 'text', 'name': 'telephone', 'placeholder': 'telephone', on: { 'change': _onTextChange }}),
							$('<button>', { id: 'btn-set-info', text: 'Set', on: { click: _onSaveClick }})
						])
				]);
		})();
	};

	window.app = window.app || {};
	window.app.components = window.app.components || {};
	window.app.components.PersonalInformation = PersonalInformation;
})(this);