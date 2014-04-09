console.log(window.location.href);
console.log(window.location.host);

var currentUrl = window.location.href;

$('#comment_url').val(currentUrl);


$('.action-call').on('click', function(){
  $('.feedback-form').slideToggle(100);
  $('.minus').toggle();
  $('.plus').toggle();
});

var fb_form = $('#a_feedback_form');

fb_form.submit(function(ev) {
  $.ajax({
    type: fb_form.attr('method'),
    url: fb_form.attr('action'),
    data: fb_form.serialize(),
    success: function() {
      alert('cool, this worked');
      $('.feedback-container').hide();
    },
    error: function() {
      alert('ALERT! ERROR');
    }
  });
  ev.preventDefault();
});