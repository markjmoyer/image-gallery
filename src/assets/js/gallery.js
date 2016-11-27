$(document).ready(function() {
    newsLetterButton.init();
    ajaxCall.init();
    animations.init();
});

var newsLetterButton = {
    init: function () {
        $(".overlay, .modal-signup-form").hide();
        $("h1 button").on("click", function() {
            $(".overlay, .modal-signup-form").fadeIn(200);
        });

        //$("a.get-raceview").on("click", function () {
            //$(".overlay, .get-raceview-modal").fadeIn(200);
        //});

        // modal close click button function
        $(".overlay").on("click", function () {
            //$('.overlay, .features-modal, .get-raceview-modal').fadeOut(200);
        });
    }
};

var ajaxCall = {
    init: function () {

    }
};

var animations = {
    init: function () {

    }
};
