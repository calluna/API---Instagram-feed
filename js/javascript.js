$(document).ready(function() {

	$(window).load(load_images_in_view);

	$(window).scroll(load_images_in_view); 

	function load_images_in_view() {
	  
		$("img").each(function() {
			
			var object_bottom = $(this).offset().top + ($(this).outerHeight()/2);
			var window_bottom = $(window).scrollTop() + $(window).height();

			if(window_bottom > object_bottom)
			{      
				if($(this).data("image-loaded") != true) {

	         		var image_source = $(this).data("async-load");
	        		$(this).data("image-loaded",true);
					$(this).attr("src",image_source);
				}      
	    	} 
		});
	}
});