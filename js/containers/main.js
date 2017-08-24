'use strict';

var mainContainer = (function () {
	//
	// Improve selecting strategy
	// (remove the use of the switch statement
	// look for a better alternative,
	// ie. action objects)
	//
	var container = function(store) {
		var state = store.getState();

		state = $.extend(
					true,
					{},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		var $main = main(state);

		var $pi = personalInformationContainer(store);
		var $ci = carInformationContainer(store);
		var $status = stateBar(state);

		switch(state.form.toString()) {
			case '0':
				$main.append($pi);
				$main.append($ci);
				$main.append($status);
				break;
			case '1':
				$ci.remove();
				$main.append($pi);
				$main.append($status);
				break;
			case '2':
				$pi.remove();
				$main.append($ci);
				$main.append($status);
				break;
			default:
				$pi.remove();
				$ci.remove();
				$main.append($status);
		}

		return $main;
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
