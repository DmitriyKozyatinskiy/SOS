;(function (document, $) {
    'use strict';

    var $mainContainer = $('#js-main'),
        isLoggedIn = Cookies.get('isLoggedIn'),
        contentUrl = isLoggedIn ? 'html/main-registered.html' : 'html/main-unregistered.html';

    $.ajax({
        url: contentUrl,
        beforeSend: function () {
            console.log('hello');
            Loader.show();
        }
    }).done(function (response) {
        console.log('done');
        $mainContainer.html(response);
    }).always(function () {
        Loader.hide();
    });
}(document, jQuery));