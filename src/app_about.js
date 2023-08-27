var menu = document.querySelector("header");
var menuImg = document.querySelector("header img");
var firstButton = document.querySelector(".warenkorb-icon");
var secondButton = document.querySelector(".buy-blue");
var menuHeight = menu.offsetHeight;
var lastScroll = 0;


(function ($) {
    $.fn.timeline = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timeline-item"),
            activeClass: "timeline-item--active",
            img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url (" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );

        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top - 100;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#timeline-1").timeline();

//Menü verschwinden
window.addEventListener("scroll", function () {
    var currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 0) {
        console.log(0);
        menu.classList.add("smaller");
        menuImg.style.height = "50px";
        menuImg.style.width = "auto";
        firstButton.style.display = "none";
        secondButton.style.display = "block";
    } else {
        menu.classList.remove("smaller");
        menuImg.style.height = "100px";
        menuImg.style.width = "200px";
        firstButton.style.display = "inline-flex";
        secondButton.style.display = "none";
    }
    lastScroll = currentScroll;
});