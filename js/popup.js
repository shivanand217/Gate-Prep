(function() {

	function wrap(id, event, callback, params) {
		$(document).on(event, id, function(event){
			callback(event, $(this), params);
		});
	}

	$(document).ready(function(){
		
		wrap('.checkbox_text', "click", function(event, that){
			var input = that.prev().children('input');
			var checked = input.prop('checked');
			input.prop('checked', !checked);
		});

		wrapper('#submit', "click", submitTopics);
	});

	function submitTopics(event) {
		e.preventDefault();
		var checkboxCategory = $('.checkboxCategory:checked');
		var contentLeftToLoad = {
			'totalSize': checkboxCategory.size(),
			'loaded': 0,
		};

		if(contentLeftToLoad.totalSize == 0){
			$('#myModal').modal('show');
			return;
		}

		watch(contentLeftToLoad, 'loaded', function() {
			if(contentLeftToLoad.loaded == contentLeftToLoad.totalSize){
				allContentLoaded(questions);
			}
		});
	}

});
