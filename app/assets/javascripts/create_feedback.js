$("#go").leanModal({
  overlay: 0.7,
  closeButton: ".modal-close"
});

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

$('.determine-display').on('click',function() {
  if ( document.getElementById('yes-display').checked ) {
    $('.demo_form').css('display','block');
    $('.determine-display').removeClass('chosen');
    $(this).addClass('chosen');
  } else if ( document.getElementById('no-hide').checked ) {
    $('.demo_form').css('display','none');
    $('.determine-display').removeClass('chosen');
    $(this).addClass('chosen');
  }
});

$('.user-domain').on('keyup', function(){
  var widgetName = $(this).val();
  $('.handwritten').text(widgetName);
})

$('.theme-choose').on('click', function() {
  if ( document.getElementById('turn_dark').checked ) {
    $('.feedback-container').removeClass('light');
    $('.feedback-container').addClass('dark');
    $('.theme-choose').removeClass('chosen');
    $(this).addClass('chosen');
  } else if (document.getElementById('turn_light').checked ) {
    $('.feedback-container').addClass('light');
    $('.feedback-container').removeClass('dark');
    $('.theme-choose').removeClass('chosen');
    $(this).addClass('chosen');
  }
});

$('.pick-form-style').on('click', function() {
  if ( document.getElementById('multiple_choice').checked ) {
    $('.free-form-builder').hide();
    $('.free-form').hide();
    $('.questionnaire').show();
    $('.pick-form-style').removeClass('chosen');
    $(this).addClass('chosen');

  } else if (document.getElementById('free_form').checked ) {
    $('.free-form-builder').show();
    $('.free-form').show();
    $('.questionnaire').hide();
    $('.pick-form-style').removeClass('chosen');
    $(this).addClass('chosen');
  }
});

$('input:radio:checked').each(function(){
  $(this).parent().addClass('chosen');
})

$('.1-changer').on('keyup', function() {
  var labelText = $(this).val();
  $('.choice-1').text(labelText);
});

$('.2-changer').on('keyup', function() {
  var labelText = $(this).val();
  $('.choice-2').text(labelText);
});

$('.3-changer').on('keyup', function() {
  var labelText = $(this).val();
  $('.choice-3').text(labelText);
});

$('.4-changer').on('keyup', function() {
  var labelText = $(this).val();
  $('.choice-4').text(labelText);
});

$('.remove-field').click(function(){
  $(this).parent('.field').find('input').val("").hide();
  $(this).toggle();
  $(this).next('.show-field').show();
  if ( $(this).parent('.field').find('input').hasClass('3-changer') ) {
    $('._3q').hide();
  } else if ( $(this).parent('.field').find('input').hasClass('4-changer') ) {
    $('._4q').hide();
  }

  if ( $(this).parent('.field').find('input').hasClass('email-text') ) {
    $('._ff1').hide();
  } else if ( $(this).parent('.field').find('input').hasClass('body-text') ) {
    $('._ff2').hide();
  }

});

$('.show-field').click(function(){
  $(this).parent('.field').find('input').show();
  $(this).toggle();
  $(this).prev('.remove-field').show();
  if ( $(this).parent('.field').find('input').hasClass('3-changer') ) {
    $('._3q').show();
  } else if ( $(this).parent('.field').find('input').hasClass('4-changer') ) {
    $('._4q').show();
  }

  if ( $(this).parent('.field').find('input').hasClass('email-text') ) {
    $('._ff1').show();
  } else if ( $(this).parent('.field').find('input').hasClass('body-text') ) {
    $('._ff2').show();
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

var displayCode = function(domain, userPath) {
  $('#code-container').empty();

  // whatever is below the =========== line in widget.js is what should be minified and set to script below
  // var script = 'var currentUrl=window.location.href;$("#comment_url").val(currentUrl);$(document).on("click",".action-call",function(){$(".demo_form").slideToggle(100)});var fb_form=$(".demo_form");fb_form.submit(function(e){$.ajax({type:fb_form.attr("method"),url:fb_form.attr("action"),data:fb_form.serialize(),success:function(){alert("cool, this worked");$(".feedback-container").hide()},error:function(){alert("ALERT! ERROR")}});e.preventDefault()});$(".mock-page").append($html);'
  $('#code-container').append('<b>Here&apos;s your code</b><p>Copy and paste this into the HTML of each page you want this survey to appear on</p><hr><code>&lt;script type="text/javascript" src="'+ url +'/embeds/'+ domain + '.js"&gt;&lt;/script&gt;</code><hr><a href="/" class="button primary" style="margin-top:10px; float: right;">Got it</a>');
}



