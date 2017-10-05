(function() {

	var oldHtml, mintaken=0, sectaken=0, flag=0, questions= [], array = undefined;

	function wrapper(id, event, callback, params) {
		$(document).on(event, id, function(event){
			callback(event, $(this), params);
		});
	}

	$(document).ready(function(){
		
		wrapper('.checkbox_text', "click", function(event, that){
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

		checkboxCategory.each(function() {
			var that=this;
			var dataUrl = $(this).attr('data-url');

			ajax(dataUrl, 'get').done(function(data){
				var elements = $(data);
				var found = elements.find('.mtq_question.mtq_scroll_item-1');

				var question = val.children('.mtq_question_text').html().trim();
				console.log(question);

				/**$.each(found, function(key, val){
					val = $(val);
					var question = val.children('.mtq_question_text').html().trim();
					console.log(question);

				})**/
			});
		});
	}

});
