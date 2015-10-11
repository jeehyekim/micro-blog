console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	if ($('#micro-content').val().trim().length > 0) {
		var microContent = $('#micro-content').val();
		var newContent = '<li class="list-group-item">' + microContent + '</li>';
		$('#micro-posts').prepend(newContent);
		$('#todo-content').val('');

		console.log($('#todos').children().last());
		// click on list-item 
		// $('#todos').children().last().on('click', function() {
		//   strikeThrough($(this));
		// });

	}

});
