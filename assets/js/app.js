$(document).ready(function () {
    var owl = $('#list-products');
    owl.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    $('.show-submenu').click(function() {
        $('.sub-menu').stop().slideToggle(500)
        return false
    })
});
