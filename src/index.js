window.screen.width >= 676 ? document.getElementById('imageLink').style.visibility = 'hidden' : null;
$(function () {
    const awayMsg = "HEY👋";
    let original;
    $(window).focus(function () {
        if (original) {
            document.title = original;
        }
    }).blur(function () {
        var title = $('title').text();
        if (title != awayMsg) {
            original = title;
        }
        document.title = awayMsg;
    });
});