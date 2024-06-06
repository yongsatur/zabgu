'use strict';

new WOW().init();

/* ----- Скролл вверх ----- */

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

/* ----- Маска на телефон ----- */

$(function() {
    $('.phone').mask('+0 (000) 000-00-00');
});

/* ----- Изменение стиля input['files'] ----- */

$('.file_upload input[type=file]').on('change', function(){
	if (this.files.length > 1) {
		$(this).next().html('Число файлов: ' + this.files.length);
	}
	else {
		let file = this.files[0];
		$(this).next().html(file.name);
	}
});

/* ----- Модальное окно ----- */

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
	}, 2000);
});