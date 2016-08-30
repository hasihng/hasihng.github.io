$( document ).ready(function() {
    $(".user-agent").html(navigator.userAgent);
    $(".details p").html("devicePixelRatio: " + window.devicePixelRatio);
    console.debug(navigator);
});
