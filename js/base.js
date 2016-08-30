$( document ).ready(function() {
    $(".user-agent").html(navigator.userAgent);
    $(".details p").html(window.devicePixelRatio);
    console.debug(navigator);
});
