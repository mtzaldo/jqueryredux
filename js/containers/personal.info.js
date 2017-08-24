'use strict';

var personalInformationContainer = (function () {

	var container = function(store) {

		var state = store.getState();

		state = $.extend(
					true,
					{},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		var $personalinfo = personalInfo(state);

		return $personalinfo;
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
