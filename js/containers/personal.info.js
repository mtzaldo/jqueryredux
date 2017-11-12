'use strict';

var PersonalInformationContainer = (function () {

	var container = function(store) {

		var PersonalInformation = app.components.PersonalInformation;

		var state = store.getState();

		state = $.extend(
					true,
					{
						validators: validators
					},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		return PersonalInformation(state);
	};

	var validators = {
		name: function(name) {
			return name && name.length >= 5;
		},
		address: function(address) {
			return address && address.length >= 5;
		},
		zip: function(zip) {

			var validZipCodes = { 
					'12345': true,
					'67890': true
			};

			return validZipCodes[zip];
		},
		telephone: function(phone) {
			var tel = Number(phone);
			return !isNaN(tel) && tel > 99 & tel <= 999;
		}
	};	

	var mapStateToProps = function(state) {
		return state['personal-info'] || {};
	};

	var mapDispatchToProps  = function(dispatch) {

		return {
			onSavePersonalInfoClick: function(e, info) {
				e.preventDefault();
				dispatch(app.actions.setPersonalInfo(info));
			}
		};
	};

	return container;
})();
