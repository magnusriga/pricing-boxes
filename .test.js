/*!
 * Start Bootstrap - Agency v4.1.1 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
!(function(a) {
  // $(..) is jQuery syntax for querySelector
  a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      // location.pathname === window.location.pathname
      // And is full path of URL in address field
      // anchorEle.pathname is path in href attribute of anchor element
      // Pathname is everything from port (or hostname/domain if no port)
      // to search query / hash fragment-identifier / other separator

      // checks if current path and hostname (domain) of window is equal to path in anchor's href
      // removed leading "/" first
      // I.e. everything except protocol, hash and search query
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // if it is equal, we must be in same page as anchor target,
      // and thus we should slow-scroll down

      // Get target hash fragment-identifier
      // If no hash fragment-identifier: o = '' <-- Empty string
      // If so, o.length would be 0
      // 0 is falsy, so if(0) does not run if block
      // empty string is also falsy though, so not sure why we need length?
      let o = a(this.hash);
      
      // string.length: Number of UTF-16 code units
      // If no hash fargment-identifier was found, o is empty string
      // .lenght of empty string === 0
      // Both empty string and 0 are falsy values, and not executing if block

      // if(o.length) only runs if length > 0 <-- i.e. hash was found (not empty string)
      // If hash did not exist, try to querySelector([name=idAfterHash])
      // Because, perhaps some element has name set, instead of ID
      // Like form elements <-- name used by server to identify fields
      if ((o = o.length ? o : a(`[name=${this.hash.slice(1)}]`)).length) {
        // return closure
        return (

          // jQuery method to animate
          a('html, body').animate(
            { scrollTop: o.offset().top - 54 }, // 54 is height of header in px
            1e3,
            'easeInOutExpo'
          ),
          !1
        );
      }
    }
  }),
    a('.js-scroll-trigger').click(() => {
      a('.navbar-collapse').collapse('hide');
    }),
    a('body').scrollspy({ target: '#mainNav', offset: 56 });
  const o = function() {
    a('#mainNav').offset().top > 100
      ? a('#mainNav').addClass('navbar-shrink')
      : a('#mainNav').removeClass('navbar-shrink');
  };
  o(),
    a(window).scroll(o),
    a('.portfolio-modal').on('show.bs.modal', o => {
      a('.navbar').addClass('d-none');
    }),
    a('.portfolio-modal').on('hidden.bs.modal', o => {
      a('.navbar').removeClass('d-none');
    });
})(jQuery);
