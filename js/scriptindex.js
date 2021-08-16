var blocks = document.getElementsByClassName("container__item");
var container = document.getElementsByClassName("container");
var hs = new HorizontalScroll.default({
    blocks: blocks,
    container: container,
    isAnimated: true,
    springEffect: 0.8,
});

function clickerBehance() {
    setTimeout(function()
    {window.location.href = "https://www.behance.net/dominikjko"},0)
}

function clickerInstagram() {
    setTimeout(function()
    {window.location.href = "https://www.instagram.com/jsk_studio/"},0)
}

function clickerFacebook() {
    setTimeout(function()
    {window.location.href = "https://www.facebook.com/JXSXK.studio"},0)
}

