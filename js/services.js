;(function (document, $) {
    'use strict';

    var $confirmation = $('#js-confirmation-modal'),
        $header = $('#js-confirmation-header');

    var showAllServices = function () {
        $('#js-service-main-logo').collapse('hide');
        $('#js-service-logos').collapse('show');
    };

    var showConfirmation = function () {
        var $trigger = $(this),
            message = $trigger.data('message');

        $header.html(message);
        $confirmation.modal();
    };

    $(document)
        .on('click', '.js-service-button', showConfirmation)
        .on('click', '#js-other-services-button', showAllServices);
}(document, jQuery));