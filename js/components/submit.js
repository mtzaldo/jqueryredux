'use strict';

var Submit = (function () {
	return function(props) {
		
		var $Loader = Loader({ text: 'Doing something...' });

		var _onSaveClick = function(e) {
			e.preventDefault();
			
			$Loader.fadeIn();

			e.target.disabled = true;

			setTimeout(function() {
				$Loader.fadeOut();

				alert(e.target.innerHTML);

				e.target.disabled = false;
			}, 2000);
		};

		return Section({ id : 'form-submit'}).append([
					SectionBody().append([
						$('<button>', { id: 'btn-cancel', text: 'Cancel', on: { click: _onSaveClick }}),
						$('<span>', { 'class': 'spacer' }),
						$('<button>', { id: 'btn-save', text: 'Save', on: { click: _onSaveClick }}),
						$('<button>', { id: 'btn-submit', text: 'Submit', on: { click: _onSaveClick }}),
						$Loader
					])
				]);
	};
})();