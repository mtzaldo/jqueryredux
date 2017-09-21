'use strict';
/*
	//Error handling not part of the redux flow unless required
	//Redrawing using jquery is expensive
*/
var store = Redux.createStore(reducers, Redux.applyMiddleware(historySaver));
var $container = $('#container');

var query = app.helpers.queryStringToJSON();

if (query.form) store.dispatch(app.actions.setFormVisible(query.form));

store.subscribe(function() {
	$container.empty();
	$container.append( mainContainer(store) );
});

$(window).on('popstate', function(e) {

	var state = window.history.state;

	if (state) store.dispatch(app.actions.setStateFromHistory(state));
});

$container.append( mainContainer(store) );


