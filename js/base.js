$( document ).ready(function() {
    $(".user-agent").html(navigator.userAgent);
    $(".details p").html(navigator);
    console.debug(navigator);
});
