(function($){
	$.fn.qtags = function(options) {
		var settings = $.extend({
			source: [],
			readonly: false,
			tagColor: ['btn-default', 'btn-info']
		}, options);

		var input = this.children('input[type=text]');
		var inputString = input.val();
		var inputArray = inputString.split(',');
		var tagBtn = '<ul class="list-inline" style="margin-top: 5px;">';
		var target = this.attr('id');

		input.val(inputArray.sort());
		if(settings.readonly == true) { input.prop('readonly', true) }

		$.each(settings.source, function(i, item) {
			// Check tag
			if($.inArray(item, inputArray) == -1) {
				// Add none active tag button
				tagBtn += '<li><button type="button" class="btn '+ settings.tagColor[0] +' btn-xs tag-btn" data-active="0" data-target="#'+ target +'">'+ item +'</button></li>';
			} else {
				// Add active tag button
				tagBtn += '<li><button type="button" class="btn '+ settings.tagColor[1] +' btn-xs tag-btn" data-active="1" data-target="#'+ target +'">'+ item +'</button></li>';
			}
		});
		tagBtn += '</ul>';
		this.append(tagBtn);
	}

	$(document).on('click', '.tag-btn', function() {
		var active = $(this).data('active');
		var tagName = $(this).html();
		var target = $(this).data('target');
		var input = $(target).children('input[type=text]');
		var inputString = input.val();

		if(active == 0) {
			// Set buttn active
			$(this).data('active', 1);
			$(this).removeClass('btn-default').addClass('btn-info');

			// Cek input value
			if(inputString == '') {
				// Add tag to input
				var inputArray = [];
				inputArray.push(tagName);
				input.val(inputArray.sort());
			} else {
				// Add tag to input
				var inputArray = inputString.split(',');
				inputArray.push(tagName);
				input.val(inputArray.sort());
			}
		} else {
			// Set button none active
			$(this).data('active', 0);
			$(this).removeClass('btn-info').addClass('btn-default');

			// Remove tag from input
			var inputArray = inputString.split(',');
			inputArray = $.grep(inputArray, function(item) {
				return item != tagName;
			});
			input.val(inputArray.sort());
		}
	});
}(jQuery));