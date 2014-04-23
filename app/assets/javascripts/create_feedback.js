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

$('input[name=widget-display-options]').on('click',function() {
  if ( document.getElementById('yes-display').checked ) {
    $('#feedback_form_0243').css('display','block')
  } else if ( document.getElementById('no-hide').checked ) {
    $('#feedback_form_0243').css('display','none')
  }
});

$('.theme-choose').on('click', function() {
  if ( document.getElementById('turn_dark').checked ) {
    $('.feedback-container').removeClass('light');
    $('.feedback-container').addClass('dark');
  } else if (document.getElementById('turn_light').checked ) {
    $('.feedback-container').addClass('light');
    $('.feedback-container').removeClass('dark');
  }
})

$(function() {
  $( "#cRadius-range" ).slider({
    min: 0,
    max: 20,
    value: 0,
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

var replaceWithEntities = function(str) {

  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&# 39;');
}

var displayCode = function() {
  $('.code-container').empty();
  var containerJs = $('.feedback-container')[0].outerHTML;

  var markup = replaceWithEntities(containerJs);

  //whatever is below the =========== line in widget.js is what should be minified and set to script below
  var script = 'var currentUrl=window.location.href;$("#comment_url").val(currentUrl);$(document).on("click",".action-call",function(){$("#feedback_form_0243").slideToggle(100)});var fb_form=$("#feedback_form_0243");fb_form.submit(function(e){$.ajax({type:fb_form.attr("method"),url:fb_form.attr("action"),data:fb_form.serialize(),success:function(){alert("cool, this worked");$(".feedback-container").hide()},error:function(){alert("ALERT! ERROR")}});e.preventDefault()});$(".mock-page").append($html);'
  $('.code-container').append('<code> var $html = &#39;'+ markup + '&#39;;' + script + '</code>');
}

// $('input[type=submit]').on('click', function(){
//   $('body').append('<div class="ui active loader"></div>');
// })



