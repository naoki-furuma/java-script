$(function() {
  $("#js_ul_lang_etc").hide();

  $("#js_a_lang_etc").click(function() {
    $("#js_ul_lang_etc").slideToggle(0)
    $("#js_p_lang_msg").slideToggle(0)
  });
  
  $("#js_a_up").click(function() {
    $(".page").animate({scrollTop: 0}, "fast");
  });

  $("#js_a_down").click(function() {
    $(".page").animate({scrollTop: $(document).height()}, "fast");
  });
});