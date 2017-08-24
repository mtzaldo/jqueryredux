'use strict';

(function (window) {

	var types = {
		SET_BGCOLOR:'SET_BGCOLOR',
		SET_FORM_VISIBLE: 'SET_FORM_VISIBLE',
		SET_PER_INFO: 'SET_PER_INFO',
		SET_CAR_INFO: 'SET_CAR_INFO',
		ADD_CAR_INFO: 'ADD_CAR_INFO',
		DEL_CAR_INFO: 'DEL_CAR_INFO',
		HISTORY_STATE: 'HISTORY_STATE'
	};

	var actions = {
		setBackgroundColor: function(color) {
			return {
				type: types.SET_BGCOLOR,
				color: { 'background-color': color }
			};
		},
		setFormVisible: function(form) {
			return {
				type: types.SET_FORM_VISIBLE,
				form: form
			};
		},
		setPersonalInfo: function(info) {
			return {
				type: types.SET_PER_INFO,
				info: { 'personal-info': info }
			};
		},
		setCarInfo: function(info) {
			return {
				type: types.SET_CAR_INFO,
				info: { 'car-info': info }
			};
		},
		addCarInfo: function(info) {
			return  {
				type: types.ADD_CAR_INFO,
				car: info
			};
		},
		removeCarInfo: function(info) {
			return {
				type: types.DEL_CAR_INFO,
				car: info
			};
		},
		setStateFromHistory: function(state) {
			return {
				type: types.HISTORY_STATE,
				state: state
			}
		}
	};

	window.app = window.app || {};
	window.app.actions = actions;
	window.app.actions.types = types;

})(window);