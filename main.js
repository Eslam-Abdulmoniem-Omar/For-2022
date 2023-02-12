$(".panel").click(function (event) {
  $(".panel").removeClass("active");
  $(event.target).addClass("active");
});
