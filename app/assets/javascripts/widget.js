//============================================================
// ALL OF THIS SHOULD BE SPECIFIC ONLY TO HOME PAGE WIDGET - for user widget js, see _widget_js.html.erb
//============================================================


// Markup - in variable format so that it can be appended onto page. This will be custom for each site.
var $html = ' <div class="feedback-container dark"><p class="action-call">What is your favorite color?</p><span class="minus action-call">–</span><form id="demo_form" method="post" name="a_feedback_form" style="display: block;"><input id="domain_id" name="comment[domain_id]" type="hidden"><input id="comment_url" name="comment[url]" type="hidden" value="http://localhost:7000/feedback"><div class="free-form"><input class="interactive" id="feedback_email" name="comment[email]" placeholder="email (optional)" type="text"><textarea class="interactive" id="feedback_text" name="comment[feedback]" placeholder="Let us know" required="" rows="4"></textarea></div><div class="questionnaire"><div class="_1q"><input id="choice_1" name="multChoice" type="radio"><label class="choice-1" for="choice_1">Green</label></div><div class="_2q"><input id="choice_2" name="multChoice" type="radio"><label class="choice-2" for="choice_2">Red</label></div><div class="_3q"><input id="choice_3" name="multChoice" type="radio"><label class="choice-3" for="choice_3">Blue</label></div><div class="_4q"><input id="choice_4" name="multChoice" type="radio"><label class="choice-4" for="choice_4">Orange</label></div></div><input class="interactive submit-button" name="commit" type="submit" value="Send"></form></div>';

// Insert widget onto page
$('.platform').append($html);

// Get the url of the page the user is currently on for logging purposes
var currentUrl = window.location.href;
$('#comment_url').val(currentUrl);

// Show/Hide the widget and plus/minus signs. Should I get rid of the plus sign? gchat only uses minus
$(document).on('click', '.action-call', function(){
  $('#demo_form').slideToggle(100);
});

// Serialize form and submit it to app via ajax
var fb_form = $('#demo_form');
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

