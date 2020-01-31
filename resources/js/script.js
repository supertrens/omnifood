$(document).ready(function() {
  // Sticky navigation
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "95%" }
  );

  // Scroll on buttons
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-plans").offset().top
      },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top
      },
      1000
    );
  });

  // Navigation scrolling

  $(function() {
    $("a[href*=\\#]:not([href=\\#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            2000
          );
          return false;
        }
      }
    });
  });

  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animated fadeIn");
  });

  // Animation on scroll
});
