// Markup - in variable format so that it can be appended onto page. This will be custom for each site.
var $html = '<div class="feedback-container"><p class="action-call">Help us understand WTF we&#39;re doing</p><span class="plus action-call">+</span><span class="minus action-call" style="display: none;">–</span><form action="http://localhost:7000/domains/5/comments" id="feedback_form_0243" class="feedback-form" method="post" style="display: none;"><input id="domain_id" name="comment[domain_id]" type="hidden" value="5"><input id="comment_url" name="comment[url]" type="hidden"><input id="feedback_email" name="comment[email]" type="text" placeholder="email (optional)" class="interactive"><textarea id="feedback_text" class="interactive" name="comment[feedback]" rows="4" type="text" placeholder="your words of wisdom" required></textarea><input name="commit" type="submit" value="send" class="interactive submit-button"></form></div>';

// Insert widget onto page
// $('.mock-page').append($html);

// Get the url of the page the user is currently on for logging purposes
var currentUrl = window.location.href;
$('#comment_url').val(currentUrl);

// Show/Hide the widget and plus/minus signs. Should I get rid of the plus sign? gchat only uses minus
$(document).on('click', '.action-call', function(){
  $('#feedback_form_0243').slideToggle(100);
});

// Loop over form and submit it to my app via ajax
var fb_form = $('#feedback_form_0243');
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