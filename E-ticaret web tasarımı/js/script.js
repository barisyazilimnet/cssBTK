$(document).ready(function () {
  // ? menu bar
  $("#header_menu_bar_button_section").on("click", function () {
    $("#header_menu_bar_button_limitation_section").slideToggle("slow");
  });

  // ? main and footer
  var document_width = $(window).outerWidth();
  if (!$("#header_message_section").length) {
    if (document_width >= 1200) {
      var ofset_value = 108;
    } else if (document_width >= 992 && document_width <= 1199) {
      var ofset_value = 98;
    } else if (document_width >= 768 && document_width <= 991) {
      var ofset_value = 888;
    } else if (document_width >= 576 && document_width <= 767) {
      var ofset_value = 78;
    } else if (document_width <= 575) {
      var ofset_value = 78;
    }
  } else {
    if (document_width >= 1200) {
      var ofset_value = 148;
    } else if (document_width >= 992 && document_width <= 1199) {
      var ofset_value = 138;
    } else if (document_width >= 768 && document_width <= 991) {
      var ofset_value = 118;
    } else if (document_width >= 576 && document_width <= 767) {
      var ofset_value = 108;
    } else if (document_width <= 575) {
      var ofset_value = 103;
    }
  }
  $("main").css("top", ofset_value);
  $("footer").css("top", ofset_value);
  $(window).resize(function () {
    var document_width = $(window).outerWidth();
    if (!$("#header_message_section").length) {
      if (document_width >= 1200) {
        var ofset_value = 108;
      } else if (document_width >= 992 && document_width <= 1199) {
        var ofset_value = 98;
      } else if (document_width >= 768 && document_width <= 991) {
        var ofset_value = 888;
      } else if (document_width >= 576 && document_width <= 767) {
        var ofset_value = 78;
      } else if (document_width <= 575) {
        var ofset_value = 78;
      }
    } else {
      if (document_width >= 1200) {
        var ofset_value = 148;
      } else if (document_width >= 992 && document_width <= 1199) {
        var ofset_value = 138;
      } else if (document_width >= 768 && document_width <= 991) {
        var ofset_value = 118;
      } else if (document_width >= 576 && document_width <= 767) {
        var ofset_value = 108;
      } else if (document_width <= 575) {
        var ofset_value = 103;
      }
    }
    $("main").css("top", ofset_value);
    $("footer").css("top", ofset_value);
  });
  $.SSS_content_show = function (element_id) {
    var question_id = element_id;
    var area_to_be_processed = "#" + question_id; // ? idlerin başında # işareti bulundugundan dolayı konulmuştur
    $(".full_page_frame_section_inside_sss_question_content_section").slideUp("slow"); // ? açık digerlerini kapatır
    $(area_to_be_processed)
      .parent()
      .find(".full_page_frame_section_inside_sss_question_content_section")
      .slideToggle("slow"); // ? parent -> üst elementi
  };
  $.send_shopping_cart_form = function () {
    $("#shopping_cart_form").submit();
  };
  $.shopping_cart_payment_page_credit_card_payment_system = function () {
    $("#credit_card_payment_section").css("display", "block");
    $("#mobile_payment_section").css("display", "none");
    $("#bank_payment_section").css("display", "none");
  };
  $.shopping_cart_payment_page_mobile_payment_system = function () {
    $("#credit_card_payment_section").css("display", "none");
    $("#mobile_payment_section").css("display", "block");
    $("#bank_payment_section").css("display", "none");
  };
  $.shopping_cart_payment_page_bank_payment_system = function () {
    $("#credit_card_payment_section").css("display", "none");
    $("#mobile_payment_section").css("display", "none");
    $("#bank_payment_section").css("display", "block");
  };
});