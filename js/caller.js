;(function (document, $){
    'use strict';

    var callService = function () {
        $('.modal').modal('hide');
        $('#js-logos').addClass('hidden');

        spinner.spin(document.getElementById('js-spinner-container'));
        window.setTimeout(function () {
            spinner.stop();
            $('#js-success-message').removeClass('hidden');
        }, 3000);
    };

    $(document)
        .on('click', '.js-service-caller', callService);
}(document, jQuery));