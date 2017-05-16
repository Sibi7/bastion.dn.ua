$(document).ready(function() {

	//E-mail Ajax Send
	$(".footer-form-alert, .about-forms-z").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            swal("Заявка отправлена!", "Наш менеджер свяжется с Вами");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $(".order-tel").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $(".menu-link").click(function () {
        $(".menu ").css("borderBottomWidth", "3px");
        $(".menu ").slideToggle(300, function () {
            $(".menu ").css("borderBottomWidth", "1px");
        });
    });

    jQuery(function($){
        $("#form-tel").mask("+38 (999) 999-9999");
    });
});

$(document).ready(function () {
    var link =$('.menu-link');
    var link_active = $('.menu-link_active');

    link.click(function () {
        link.toggleClass('menu-link_active');
    })
});

