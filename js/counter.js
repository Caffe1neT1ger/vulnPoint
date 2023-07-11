
! function(o) {
    "use strict";
    o(document).ready((function() {
        o(window).scroll((function() {
            o(this).scrollTop() > 100 ? o(".scrollup").fadeIn() : o(".scrollup").fadeOut()
        })), o(".scrollup").on("click", (function() {
            return o("html, body").animate({
                scrollTop: 0
            }, 500), !1
        }))
    }))
}(jQuery);

function inVisible(t) {
    var i = $(window).scrollTop(),
        a = i + $(window).height(),
        n = t.offset().top;
    n + t.height() <= a && n >= i && animate(t)
}

function animate(t) {
    if (!t.hasClass("ms-animated")) {
        var i = t.data("max"),
            a = t.html();
        t.addClass("ms-animated"), $({
            countNum: t.html()
        }).animate({
            countNum: i
        }, {
            duration: 2e3,
            easing: "linear",
            step: function() {
                t.html("<b>" + Math.floor(this.countNum).toLocaleString("en-US", {
                    maximumFractionDigits: 2
                }) + "</b>+" + a)
            },
            complete: function() {
                t.html("<b>" + this.countNum.toLocaleString("en-US", {
                    maximumFractionDigits: 2
                }) + "</b>+" + a)
            }
        })
    }
}