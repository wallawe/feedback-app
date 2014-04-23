// Markup - in variable format so that it can be appended onto page. This will be custom for each site.
var $html = '<div class="feedback-container dark"><p class="action-call">What feature would you like to see next?</p><span class="minus action-call">–</span><form id="feedback_form_0243" method="post" name="a_feedback_form" style="display: block;"><input id="domain_id" name="comment[domain_id]" type="hidden"><input id="comment_url" name="comment[url]" type="hidden" value="http://localhost:7000/feedback"><input class="interactive" id="feedback_email" name="comment[email]" placeholder="email (optional)" type="text"><textarea class="interactive" id="feedback_text" name="comment[feedback]" placeholder="Let us know" required rows="4"></textarea><input class="interactive submit-button" name="commit" type="submit" value="send"></form></div>';

// Insert widget onto page
$('.platform').append($html);



// =============================================



// Get the url of the page the user is currently on for logging purposes
var currentUrl = window.location.href;
$('#comment_url').val(currentUrl);

// Show/Hide the widget and plus/minus signs. Should I get rid of the plus sign? gchat only uses minus
$(document).on('click', '.action-call', function(){
  $('#feedback_form_0243').slideToggle(100);
});

// Serialize form and submit it to app via ajax
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

