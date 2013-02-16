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
    
    function setCarrouselImages(data) {
        var container = $('.container .subcontainer', '#carrousel');
        $.each(data.slidimages, function(i, image) {
            if (image.path) {
                var div = $('<div></div>');
                div.css('background-image', 'url("' + image.path + '")');
                div.attr('title', image.caption);
                div.appendTo(container);
            }
        });
    };
    
    // load images for carousel
    $.getJSON('slideimages.json')
        .success(function(data) {
            setCarrouselImages(data);
        })
        .error(function(){
            // ajax failed, just use hard coded values
            setCarrouselImages(
                {
                    "slidimages": [
                        {
                            "path": "images/slide1.jpg",
                            "caption": "Fred in a laptop"
                        },
                        {
                            "path": "images/slide2.jpg",
                            "caption": "From napkin sketch to market ready!"
                        },
                        {
                            "path": "images/slide3.jpg",
                            "caption": "Macadamia nuts"
                        },
                        {
                            "path": "images/slide4.jpg",
                            "caption": "Scott"
                        },
                        {
                            "path": "images/slide5.jpg",
                            "caption": "UX in action"
                        },
                        {
                            "path": "images/slide6.jpg",
                            "caption": "Some marking photo"
                        }
                    ]
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

