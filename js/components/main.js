'use strict';

var Main = (function () {

	return function(props) {

		return $('<div>',  { 'id': 'main'}).css({'background-color': props['background-color'], 'color': props.color }).append([
					Section({ id: 'header'}).append([
						SectionHeader({text: 'View '}).append([
							FormSelector({ onFormSelectorChange: props.onFormSelectorChange, form: props.form })
						])
					])
				]);
	};
})();

var FormSelector = (function() {

	return function(props) {

		var _formSelectorChange = function(e) {
				var form = Number(e.target.value);
				props.onFormSelectorChange(e, form);
			};

		return Select({ id: 'form-selector', onChange: _formSelectorChange}).append([
					SelectOption({ value: 0, text: '[None]'}),
					SelectOption({ value: 1, text: 'All info'}),
					SelectOption({ value: 2, text: 'Personal info'}),
					SelectOption({ value: 3, text: 'Car info'})
				]).val(props.form);
	};

})();

var Select = (function() {
	return function(props) {
		return $('<select>', { 'id': props.id, 'class': 'selector-border', 'on': { 'change': props.onChange }});
	};
})();

var SelectOption = (function() {
	return function(props) {
		return $('<option>', { 'value': props.value, 'text': props.text });
	};
})();

var Section = (function() {
	return function(props) {
		return $('<div>', { id: props.id || '', 'class': 'section'});
	};
})();

var SectionHeader = (function() {
	return function(props) {
		return $('<div>', { 'class': 'section-header', 'text': props.text });
	};
})();

var SectionBody = (function() {
	return function(props) {
		return $('<div>', { 'class': 'section-body'});
	};
})();

var SectionFooter = (function() {
	return function(props) {
		return $('<div>', { 'class': 'section-footer'});
	}
})();

var Loader = (function() {
	return function(props) {
		return $('<i>', { 'class': 'loader', text: props.text || 'loading...' });
	}
})();
