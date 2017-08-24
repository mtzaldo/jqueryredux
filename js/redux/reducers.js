	//Reducers
'use strict';
var reducers = function (state, action) {

	if (typeof state === 'undefined') {

		return { 
			'background-color' : '#666',
			'color' : '#fff',
			'form' : 99
		};
	}

	var types = app.actions.types;

	switch (action.type) {
	  case types.SET_BGCOLOR:
	    return $.extend({}, state, action.color);
	  case types.SET_FORM_VISIBLE:
	  	return $.extend({}, state, { form: action.form });
	  case types.SET_PER_INFO:
	  case types.SET_CAR_INFO:
	  	return $.extend({}, state, action.info);
	  case types.ADD_CAR_INFO:
	  	var cars = state.cars || [];
	  	
	  	cars.push(action.car);

	  	return $.extend({}, state, { cars : cars });
	  case types.DEL_CAR_INFO:
	  
	  	var cars = 
	  		state.cars.filter(
	  			function(c) { 
	  				return c.model !== action.car.model 
	  						|| c.maker !== action.car.maker; 
	  			});

	  	return $.extend({}, state, { cars : cars });
	  case types.HISTORY_STATE:
	  	return $.extend(true, {}, action.state);
	  default:
	    return state
	}
};