(function() {

	var oHtml, minute=0, seconds=0, flag=0, questions= [], array = undefined;
	
	function wrapper(id, event, callback, params) {
		$(document).on(event, id, function(event){
			callback(event, $(this), params);
		});
	}
  
});
