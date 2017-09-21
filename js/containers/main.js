'use strict';

var mainContainer = (function () {

	var container = function(store) {
		var state = store.getState();

		var children = {
			1: [ PersonalInformationContainer(store), CarInformationContainer(store), StateBar(state) ],
			2: [ PersonalInformationContainer(store), StateBar(state)],
			3: [ CarInformationContainer(store), StateBar(state)]
		};
		
		state = $.extend(true, {},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		return Main(state).append(
				children[state.form] || StateBar(state)
			);
	};
	
	var mapStateToProps = function(state) {
		return state;
	};

	var mapDispatchToProps  = function(dispatch) {

		return {
			onBackgrondColorClick: function(e) {
				e.preventDefault();
				//fetch ~~~~~~~>
				dispatch(app.actions.setBackgroundColor('#000'));
			},
			onFormSelectorChange: function(e, form) {
				e.preventDefault();
				//fetch ~~~~~~~>
				dispatch(app.actions.setFormVisible(form));
			}
		};
	};

	return container;
})();
