'use strict';

var mainContainer = (function () {

	var children = {
		1: function(store) { 
			var p = PersonalInformationContainer(store); 
			var c = CarInformationContainer(store);
			var s = Submit(store);
			var b = StateBar(store.getState());

			return [p, c, s, b];
		},
		2: function(store) {
			var p = PersonalInformationContainer(store);
			var b = StateBar(store.getState());

			return [p, b];
		},
		3: function(store) {
			var c = CarInformationContainer(store);
			var b = StateBar(store.getState());

			return [c, b];
		}
	};

	var container = function(store) {
		var state = store.getState();
		
		state = $.extend(true, {},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		return Main(state).append(
				children[state.form] && children[state.form](store) 
				|| StateBar(state)
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
