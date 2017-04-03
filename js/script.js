var searchbutton = $('#search-button')
var overlay = $('#overlay')
var master = $('#master')
var footer = $('footer')
var input = $('input:text')
var closebutton = $('#close-search-button')


 jQuery(document).ready(function($) {

searchbutton.click(function(){
	overlay.fadeIn("1000");
	overlay.css("display","block");
});

input.on("keypress", function(){
	$(this).val('');
	$(this).off("keypress")
});


closebutton.click(function(){
	overlay.fadeOut('slow');

});

});
