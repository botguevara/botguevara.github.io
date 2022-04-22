;$(function(){

	AOS.init({
		once: false,
		startEvent: 'load',
		offset: 150,
		disable: function() {
			var maxWidth = 1024;
			return window.innerWidth < maxWidth;
		}
	});
	
	setTimeout(function(){
        $("#popup").addClass("on");
    }, 200);


});