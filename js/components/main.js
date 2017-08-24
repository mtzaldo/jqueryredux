'use strict';

var main = (function () {

	var template
			='<div id="main">'
			+	'<div class="section">'
			+		'<div class="section-header">'
			+			'View: '
			+			'<select id="form-selector">'
			+				'<option value="99">[None]</option>'
			+				'<option value="0">All info</option>'
			+				'<option value="1">Personal info</option>'
			+				'<option value="2">Car info</option>'
			+			'</select>'
			+		'</div>'
			+	'</div>'
			+'</div>';

	var component = function(props) {

		var $component = app.helpers.$build(template, '#main');

		$component.css({
			'background-color' : props['background-color'],
			'color' : props.color 
		});

		$component.find('#form-selector')
		.val(props.form)
		.off('change')
		.on('change', function(e) {
			
			var form = Number(e.target.value);

			props.onFormSelectorChange(e, form);
		});

		return $component;
	};

	return component;
})();

