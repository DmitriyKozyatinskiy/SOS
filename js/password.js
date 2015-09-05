;(function (document, $) {
    'use strict';

    var $form = $('#js-registration-form'),
        $password = $('#js-password'),
        $passwordRepeat = $('#js-password-repeat'),
        $passwordFields = $('.js-password-field'),
        $passwordErrors = $('.js-password-error'),

        removePasswordErrors = function () {
            $passwordErrors.addClass('hidden');
            $passwordFields.removeClass('has-error');
        },

        submitHandler = function (event) {
            var password = $password.val(),
                passwordRepeat = $passwordRepeat.val();

            event.preventDefault();

            if (password !== passwordRepeat) {
                $passwordFields.addClass('has-error');
                $passwordErrors.removeClass('hidden');
            } else {
                removePasswordErrors();
            }
        };

    $(document)
        .on('submit', '#js-registration-form', submitHandler)
        .on('keyup', '.js-password-field', removePasswordErrors);
}(document, jQuery));