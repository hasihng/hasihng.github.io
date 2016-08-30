$( document ).ready(function() {
    $(".user-agent").html(navigator.userAgent);
    $(".details p").html("navigator: " + String(navigator) + "<br />devicePixelRatio: " + window.devicePixelRatio);
    console.debug(navigator);
});
