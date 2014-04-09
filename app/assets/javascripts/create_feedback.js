$('.headline-text').on('keyup', function(){
  var headlineText = $(this).val();
  $('p.action-call').text(headlineText);
});

$('.email-text').on('keyup', function(){
  var emailText = $(this).val();
  $('#feedback_email').attr("placeholder", emailText);
});

$('.body-text').on('keyup', function(){
  var bodyText = $(this).val();
  $('#feedback_text').attr("placeholder", bodyText);
});

$('.button-text').on('keyup', function(){
  var buttonText = $(this).val();
  $('.submit-button').val(buttonText);
});

$('.bg-hex').on('keyup', function(){
  var bgColor = $(this).val();
  $('.feedback-container').css('background-color', bgColor);
});

$('.text-hex').on('keyup', function(){
  var textColor = $(this).val();
  $('.feedback-container .action-call').css('color', textColor);
  $('.feedback-container .interactive').css('color', textColor);
});

$('.field-color').on('keyup', function(){
  var fieldColor = $(this).val();
  $('.interactive').css('background', fieldColor);
  $('.feedback-container .interactive').css('background-color', fieldColor);
});

$('#font_choices').change(function(){
  var newFont = $(this).val();
  $('.feedback-container p').css('font-family', newFont );
  $('.feedback-container .interactive').css('font-family', newFont );
});

$(function() {
  $( "#cRadius-range" ).slider({
    min: 0,
    max: 20,
    value: 5,
    slide: function( event, ui ) {
      $('.container-radius').val( ui.value );
    },
    change: function() {
      var cssRadius = $('.container-radius').val();
      $('.feedback-container').animate({
        borderTopLeftRadius: cssRadius,
        borderTopRightRadius: cssRadius }, 100);
    }
  })
});

$(function() {
  $( "#fRadius-range" ).slider({
    min: 0,
    max: 20,
    value: 0,
    slide: function( event, ui ) {
      $('.field-radius').val( ui.value );
    },
    change: function() {
      var cssRadius = $('.field-radius').val();
      $('.interactive').animate({
        borderBottomLeftRadius: cssRadius,
        borderBottomRightRadius: cssRadius,
        borderTopLeftRadius: cssRadius,
        borderTopRightRadius: cssRadius }, 100);
    }
  })
});
