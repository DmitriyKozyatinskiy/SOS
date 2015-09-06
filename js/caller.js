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

    $(document)
        .on('click', '.js-service-caller', callService);
}(document, jQuery));