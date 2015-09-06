;(function (document, $) {
    'use strict';

    var $mainContainer = $('#js-main'),
        isLoggedIn = Cookies.get('isLoggedIn'),
        contentUrl = isLoggedIn ? 'html/main-registered.html' : 'html/main-unregistered.html';

    var logIn = function (event) {
        event.preventDefault();

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
            // Loader.show();
        }
    }).done(function (response) {
        $mainContainer.html(response);
    });

    $(document)
        .on('submit', '#js-login-form', logIn)
        .on('click', '#js-logout-button', logOut)
        .ajaxSend(function () {
            spinner.spin(document.getElementById('js-spinner-container'));
        });
}(document, jQuery));