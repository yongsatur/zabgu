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

window.addEventListener('message', function(e) {
	let message = e.data;

	if (message == 'Загружен!') {
		Swal.fire({
			timer: 4000,
			timerProgressBar: true,
			confirmButtonColor: "#008d85",
			confirmButtonText: "Отлично!",
			focusConfirm: false,
			text: 'Ваша статья была успешно отправлена!',
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
			}
		});
	}
	else if (message == 'Ошибка!')  {
		Swal.fire({
			timer: 4000,
			timerProgressBar: true,
			confirmButtonColor: "#008d85",
			confirmButtonText: "Отлично!",
			focusConfirm: false,
			text: 'При загрузке файла произошла ошибка!',
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
			}
		});
	}
} , false);