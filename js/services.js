;(function (document, $) {
    'use strict';

    var showAllServices = function () {
        $('#js-service-main-logo').collapse('hide');
        $('#js-service-logos').collapse('show');
    };

    var showConfirmation = function () {
        console.log('hello');
        var $trigger = $(this),
            message = $trigger.data('message');

        $('#js-confirmation-header').html(message);
        $('#js-confirmation-modal').modal();
    };

    $(document)
        .on('click', '.js-service-button', showConfirmation)
        .on('click', '#js-other-services-button', showAllServices);
}(document, jQuery));