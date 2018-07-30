function passwordChecker(input, button) {
    $(input).keyup(function () {
        var pswd = $(this).val();
        if (pswd.length < 9) {
            $('#length').removeClass('valid').addClass('invalid');
            $('#length').removeClass('pc-check').addClass('pc-times');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
            $('#length').removeClass('pc-times').addClass('pc-check');
        }
        if (pswd.match(/[a-z]/)) {
            $('#s-letter').removeClass('invalid').addClass('valid');
            $('#s-letter').removeClass('pc-times').addClass('pc-check');
        } else {
            $('#s-letter').removeClass('valid').addClass('invalid');
            $('#s-letter').removeClass('pc-check').addClass('pc-times');
        }
        if (pswd.match(/[A-Z]/)) {
            $('#u-letter').removeClass('invalid').addClass('valid');
            $('#u-letter').removeClass('pc-times').addClass('pc-check');
        } else {
            $('#u-letter').removeClass('valid').addClass('invalid');
            $('#u-letter').removeClass('pc-check').addClass('pc-times');
        }

        if (pswd.match(/[^A-Za-z0-9]/)) {
            $('#special').removeClass('invalid').addClass('valid');
            $('#special').removeClass('pc-times').addClass('pc-check');
        } else {
            $('#special').removeClass('valid').addClass('invalid');
            $('#special').removeClass('pc-check').addClass('pc-times');
        }
        if (pswd.match(/(\w*\d)/)) {
            $('#number').removeClass('invalid').addClass('valid');
            $('#number').removeClass('pc-times').addClass('pc-check');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
            $('#number').removeClass('pc-check').addClass('pc-times');
        }

        if (button) {
            if (pswd.length >= 9 && pswd.match(/[a-z]/) && pswd.match(/[A-Z]/) && pswd.match(/[^A-Za-z0-9]/) && pswd.match(/(\w*\d)/)) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        }

    });
}

function validationList(list) {
    var valid_list = document.getElementById(list);
    valid_list.innerHTML = '<ul class="list-group mt15"> \
                                <li class="list-group-item"> \
                                    <span id="s-letter" class="invalid pc-times">Lower case letter</span> \
                                </li> \
                                <li class="list-group-item"> \
                                    <span id="u-letter" class="invalid pc-times">Upper case letter</span> \
                                </li> \
                                <li class="list-group-item"> \
                                    <span id="number" class="invalid pc-times">Number</span> \
                                </li> \
                                <li class="list-group-item"> \
                                    <span id="special" class="invalid pc-times">At least one special character (# $ ! % &amp; etc...)</span> \
                                </li> \
                                <li class="list-group-item"> \
                                    <span id="length" class="invalid pc-times">At least 9 character length</span> \
                                </li> \
                            </ul>';
}
