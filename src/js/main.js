
$(document).ready(function(){
    $('body').on('focus', 'input', function () {
        $(this).parent().addClass('focus');
    });

    $('body').on('blur', 'input', function () {
        if (!$(this).val().length > 0) {
            $(this).parent().removeClass('focus');
        }        
    });

    $('body').on('keyup', 'input', function () {
        if ($(this).val().length > 0) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active wrong success');
            $('label').text('Email')
        }
    });

    $('body').on('keypress', 'input', function (event) {
        var keyCode = event.which;
    
        if (keyCode === 13) {
            if ($(this).val().length > 0) {
                if ($(this).val() === 'success@gmail.com') {
                    $('.group').removeClass('wrong');
                    $('.group').addClass('success');
                    $('label').text('Email')
                } else {
                    $('.group').removeClass('success');
                    $('.group').addClass('wrong');
                    $('label').text('Email format invalid')
                }
            }
        }
    });
});
