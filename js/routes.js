var routes = {
	[app.actions.types.SET_FORM_VISIBLE] : function(action) {
		var form = action.form;

		return { key : 'form', value: form 	};
	},
	[app.actions.types.ADD_CAR_INFO] : function(action) {
		var info = action.car.maker;

		return { key : 'maker', value: info };
	},
	[app.actions.types.SET_PER_INFO] : function(action) {
		return { key : 'pers', value: 'sav' };
	}
};