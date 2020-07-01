jQuery(function($) {'use strict';

// Contact form
var form = $('#mc-embedded-subscribe-form');
form.submit(function(event){
event.preventDefault();
var form_status = $('<div class="form_status"></div>');

$.ajax({
url: $(this).attr('action'),
data:form.serialize(),
beforeSend: function(){
form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
}
}).done(function(data){
form_status.html('<p class="text-success">Thank you for contacting us. We will get back to you ASAP</p>').delay(3000).fadeOut();
});
  
$('#mc-embedded-subscribe-form')[0].reset();

});
});
