//	FUNCTIONS

    /* define functions here */

//	ONLOAD
$(document).ready( function() {

    /* call functions here */
    
    // handle arrow clicks
    $('#arrows').delegate('a', 'click', function(eventObject) {
    	var $this = $(this);
    	if (!$this.hasClass('active')) {
    		$('#arrows .active').removeClass('active');
    		$this.addClass('active');
    	}
    	return false;
    });
    
    // load images for carousel
    $.getJSON('slideimages.json')
        .success(function(data) {
            var container = $('.container .subcontainer', '#carrousel');
            $.each(data.slidimages, function(i, image) {
                if (image.path) {
                    var div = $('<div></div>');
                    div.css('background-image', 'url("' + image.path + '")');
                    div.attr('title', image.caption);
                    div.appendTo(container);
                }
            });
        });
 
    // carousel handling
    var ccontainer = $('.container', "#carrousel");
    ccontainer.kinetic();

    $('.arrow', '#carrousel')
      .mousedown(function(){
          ccontainer.kinetic('start', { velocity: -15 });
      })
      .mouseup(function(){
          ccontainer.kinetic('end');
      });
 
    $('.arrow.right', '#carrousel')
      .mousedown(function(){
          ccontainer.kinetic('start', { velocity: 15 });
      })
      .mouseup(function(){
          ccontainer.kinetic('end');
      });
    
});

