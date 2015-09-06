;(function (document, $){
    'use strict';

    var callService = function () {
        var $callNotification = $('#js-call-notification'),
            description = $(this).data('description');

        $('#js-call-type').html(description);
        $('.modal').modal('hide');
        $('#js-logos').addClass('hidden');
        $callNotification.removeClass('hidden');


        spinner.spin(document.getElementById('js-spinner-container'));
        window.callTimer = window.setTimeout(function () {
            spinner.stop();
            $callNotification.addClass('hidden');
            $('#js-success-message').removeClass('hidden');
        }, 5000);
    };

    var sendAdditionalInfo = function (event) {
        event.preventDefault();

        $(this).addClass('hidden');
        $('#js-additional-info-status').removeClass('hidden');
    };

    $(document)
        .on('click', '.js-service-caller', callService)
        .on('submit', '#js-additional-info-form', sendAdditionalInfo);
}(document, jQuery));