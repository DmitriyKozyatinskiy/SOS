;(function (document, $) {
    'use strict';

    var $mainContainer = $('#js-main'),
        isLoggedIn = Cookies.get('isLoggedIn'),
        contentUrl = isLoggedIn ? 'html/main-registered.html' : 'html/main-unregistered.html';

    var logIn = function () {
        Cookies.set('isLoggedIn', 'true');
        window.location.reload();
    };

    var logOut = function () {
        Cookies.remove('isLoggedIn');
        window.location.reload();
    };

    $.ajax({
        url: contentUrl,
        beforeSend: function () {
            Loader.show();
        }
    }).done(function (response) {
        $mainContainer.html(response);
    }).always(function () {
        Loader.hide();
    });

    $(document)
        .on('submit', '#js-login-form', logIn)
        .on('click', '#js-logout-button', logOut);
}(document, jQuery));