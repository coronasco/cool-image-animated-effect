$(document).ready(() => {
  function handler(event) {
    var target = $(event.target);
    if (target.is(".box")) {
      target
        .addClass("active")
        .removeClass("inactive")
        .siblings(".box")
        .addClass("inactive")
        .removeClass("active");
    }
  }
  $(".box")
    .click(handler)
    .find(".box")
    .removeClass("active")
    .addClass("inactive");
});
