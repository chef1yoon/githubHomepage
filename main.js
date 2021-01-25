(function (window, documnet) {
    'use strict';

    const $toggles = documnet.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }
})(window, document)