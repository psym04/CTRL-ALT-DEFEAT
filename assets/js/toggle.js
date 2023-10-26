$(function() {
  var b = $("#open_tandcs");
  var w = $("#tandcs");
  var l = $("#list");
  
   w.height(0).removeClass('open');

  b.click(function() {
    if (w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }
  });
});