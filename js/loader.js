var Loader = function (document, $, ProgressBar) {
    'use strict';

    var $main = $('main'),
        $loadContainer = $('#js-loader-container');

    var loader = new ProgressBar.Circle('#js-loader-container', {
        color: '#aaa',
        strokeWidth: 10,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1000,
        from: { color: '#F2FF00', width: 1 },
        to: { color: '#00FF04', width: 10 },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        }
    });

    var showLoader = function () {
        $main.addClass('hidden');
        $loadContainer.removeClass('hidden');
        loader.animate(3.0);

        // loader.animate(0);
    };

    var hideLoader = function () {
        $main.removeClass('hidden');
        $loadContainer.addClass('hidden');
        loader.animate(0);
    };

    return {
        show: showLoader,
        hide: hideLoader
    };
}(document, jQuery, ProgressBar);