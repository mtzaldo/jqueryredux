'use strict';

var SubmitContainer = (function() {

	var container = function(store) {
		var state = store.getState();

		var props = $.extend(true, {},
					mapStateToProps(state),
					mapDispatchToProps(store.dispatch)
				);

		return Submit(props);
	};

	var mapStateToProps = function(state) {
		return state;
	};

	var mapDispatchToProps = function(dispatch) {
		return  {
			onSubmitForm: function(data) {
				//~~~~~> post
				dispatch(app.actions.submitForm());
			},
			onSaveForm : function(data) {
				//~~~~~> post
				dispatch(app.actions.saveForm());
			},
			onCancelForm: function() {
				dispatch(app.actions.cancelForm());
			}
		}
	};

	return container;
})();