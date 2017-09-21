'use strict';

var CarInformationContainer = (function () {

	var container = function(store) {

		var state = store.getState();

		state = $.extend(true, {},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		return CarInformation(state);
	};
 		
	var mapStateToProps = function(state) {
		return { elements: state.cars || [] };
	};

	var mapDispatchToProps  = function(dispatch) {

		return {
			onSaveCarInfoClick: function(e, info) {
				e.preventDefault();
				//fetch ~~~~~~~> (  ) )
				dispatch(app.actions.setCarInfo(info));
			},
			onAddCarInfoClick: function(e, info) {
				e.preventDefault();
				//fetch ~~~~~~~> (  ) )
				dispatch(app.actions.addCarInfo(info));
			},
			onRemoveCarInfoClick: function(e, info) {
				e.preventDefault();
				//fetch ~~~~~~~> (  ) )
				dispatch(app.actions.removeCarInfo(info));
			}
		};
	};

	return container;
})();
