'use strict';

var personalInfo = (function() {

	var template
		= '<div id="personal-information" class="section">'
		+		'<div class="section-header">Personal Infomation</div>'
		+		'<div class="section-body">'
		+			'<input type="text" name="name" placeholder="name"><br>'
		+			'<input type="text" name="address" placeholder="address"><br>'
		+			'<input type="tel" name="telephone" placeholder="telephone"><br>'
		+		'</div>'
		+		'<div class="section-footer">'
		+			'<button id="btn-save">Save</button>'
		+		'</div>'
		+ '</div>';

	var component = function(props) {

		var $partial = app.helpers.$build(template, '#personal-information');

		var $header = $partial.find('div.section-header');
		var headerText = 'Personal Infomation: ' + (props.name || '');
		
		$header.html(headerText);

		$partial
		.find('button#btn-save')
		.off('click')
		.on('click', function(e) {
			e.preventDefault();
			
			var $name = $partial.find('input[name="name"]');
			var $address = $partial.find('input[name="address"]');
			var $telephone = $partial.find('input[name="telephone"]');

			props.onSavePersonalInfoClick(e, 
				{ 
					name: $name.val(), 
					address: $address.val(),
					telephone: $telephone.val() 
				});

			$name.val('');
			$address.val('');
			$telephone.val('');

		});

		return $partial;
	};

	return component;

})();