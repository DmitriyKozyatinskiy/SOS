;(function (document, $) {
    'use strict';

    var showAllServices = function () {
        $('#js-logos').removeClass('hidden');
        $('#js-success-message').addClass('hidden');
        $('#js-call-notification').addClass('hidden');
        $('#js-service-main-logo').collapse('hide');
        $('#js-service-logos').collapse('show');
        spinner.stop();
        try {
            clearTimeout(window.callTimer);
        } catch (e) {}
    };

    var showConfirmation = function () {
        var $trigger = $(this),
            message = $trigger.data('message'),
            description = $trigger.data('description');

        $('#js-call-type').html(description);
        $('#js-confirmation-header').html(message);
        $('#js-confirmation-modal').modal();
    };

    $(document)
        .on('click', '.js-service-button', showConfirmation)
        .on('click', '#js-cancel-button', showAllServices)
        .on('click', '.js-other-services-button', showAllServices);
}(document, jQuery));