//============================================================
// ALL OF THIS SHOULD BE SPECIFIC ONLY TO HOME PAGE WIDGET - for user widget js, see _widget_js.html.erb
//============================================================


// Markup - in variable format so that it can be appended onto page. This will be custom for each site.
var $html = '<div class="feedback-container dark"><p class="action-call">What do you think of our new design?</p><span class="minus action-call">–</span><form id="feedback_form_839224" class="demo_form home_page_demo" method="post" name="a_feedback_form" style="display: block;"><input id="domain_id" name="comment[domain_id]" type="hidden"><div class="free-form-builder"><input class="interactive _ff1" id="feedback_email" name="comment[email]" placeholder="email (optional)" type="text"><textarea class="interactive _ff2" id="feedback_text" name="comment[feedback]" placeholder="Let us know" required="" rows="4"></textarea></div><div class="questionnaire"><div class="_1q m_choice"><input id="choice_1" name="multChoice" type="radio"><label class="choice-1" for="choice_1">I love it</label></div><div class="_2q m_choice"><input id="choice_2" name="multChoice" type="radio"><label class="choice-2" for="choice_2">No opinion</label></div><div class="_3q m_choice"><input id="choice_3" name="multChoice" type="radio"><label class="choice-3" for="choice_3">Not a huge fan</label></div><div class="_4q m_choice"><input id="choice_4" name="multChoice" type="radio"><label class="choice-4" for="choice_4">Already time for a redesign</label></div></div><span class="interactive submit-button" name="commit" type="submit">Send</span></form></div>';

// Insert widget onto page
$('.platform').append($html);

// Get the url of the page the user is currently on for logging purposes
// var currentUrl = window.location.href;
// $('#comment_url').val(currentUrl);

// Show/Hide the widget and plus/minus signs. Should I get rid of the plus sign? gchat only uses minus
$(document).on('click', '.action-call', function(){
  $('.home_page_demo').slideToggle(100);
});

// // Serialize form and submit it to app via ajax
// var fb_form = $('.demo_form');
// fb_form.submit(function(ev) {
//   $.ajax({
//     type: fb_form.attr('method'),
//     url: fb_form.attr('action'),
//     data: fb_form.serialize(),
//     success: function() {
//       alert('cool, this worked');
//       $('.feedback-container').hide();
//     },
//     error: function() {
//       alert('ALERT! ERROR');
//     }
//   });
//   ev.preventDefault();
// });

