$(function()
{
    // MailChimp AJAX signup form
    var $newsletterSignupForm = $('#newsletter-signup form');
    var $newsletterSignupFormFeedback = $newsletterSignupForm.find('.feedback p');

    var dismissNewsletterSignupFormFeedback = function()
    {
        $newsletterSignupForm.removeClass('error success');
    };

    $newsletterSignupForm
        .ajaxChimp(
        {
            callback: function(response)
            {
                dismissNewsletterSignupFormFeedback();
                $newsletterSignupForm.addClass(response.result);
                $newsletterSignupFormFeedback.html(response.msg);
            }
        })
        .on('click', '.feedback p a', function(e) { e.stopPropagation(); })
        .on('click', dismissNewsletterSignupFormFeedback);

    scrollFade();

    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
           location.reload();
        }
    });

});




var w = $(window),
  b = $('body'),
  vh = w.height();

function scrollFade() {
  $('.signUpForm').each(function( ) {
    var that = this;
    fadeInEffect(this);

    w.scroll(function() {
      if(that) {
        fadeInEffect(that);
      }
    });
  });
}

function fadeInEffect(that) {
  var fadingElement = $(that),
    fadeInClass = 'fadeIn',
    scrolled = 'scrolled';

  if(w.scrollTop() > (fadingElement.offset().top - vh) && (!fadingElement.hasClass(fadeInClass))) {
    fadingElement.addClass(fadeInClass);
  }

  if(w.scrollTop() > 500) {
    b.addClass(scrolled);
  } else {
    b.removeClass(scrolled);
  }
}

//YOUTUBE
document.addEventListener("DOMContentLoaded",
  function() {
      var div, i,
          yt = document.getElementsByClassName("youtube-player"),
          vEmbed = "https://www.youtube.com/embed/ID?autoplay=1";

      for (i = 0; i < yt.length; i++) {
          div = document.createElement("div");
          div.setAttribute("data-id", yt[i].dataset.id);
          div.innerHTML = yThumb(yt[i].dataset.id);
          div.onclick = yIframe;
          yt[i].appendChild(div);
      }
});

function yThumb(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/'+id+'/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return play;
}

function yIframe() {
    var body = $('body');
    body.on('click', function(e) { body.addClass('played'); });

    var iframe = document.createElement("iframe"),
  embed = "https://www.youtube.com/embed/"+this.dataset.id+"?autoplay=1&showinfo=0&rel=0";

    iframe.setAttribute("src", embed);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
}
