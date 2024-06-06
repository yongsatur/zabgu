'use strict';

new WOW().init();

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
	});
	$('.scrollup').click(function () {
		$("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$('.file_upload input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).next().html(file.name);
});

$('#google_form_1').on('submit', function (e) {
	Swal.fire({
		timer: 4000,
		timerProgressBar: true,
		confirmButtonColor: "#008d85",
		confirmButtonText: "Отлично!",
		focusConfirm: false,
		text: 'Ваша заявка была успешно отправлена!',
		showClass: {
			popup: 'animate__animated animate__fadeInDown'
		},
		hideClass: {
			popup: 'animate__animated animate__fadeOutUp'
		}
	});
	setTimeout(function () {
		$('#google_form_1')[0].reset();
	}, 1000);
});