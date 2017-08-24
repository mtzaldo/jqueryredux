var historySaver = function(store) {
	return function (next) {
		return function(action) {
			
			var result = next(action);
			var state = store.getState();
			var route = (typeof routes === 'undefined')? null : routes[action.type];

			if (route) {
				var routeOptions = route(action);
				window.history.pushState(state, null, '?' + routeOptions.key + "=" + routeOptions.value);
			}
 
			return result;
		};
	};
};