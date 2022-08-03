$(function ($) {
    "use strict";

    //    global variable declare
    var $window = $(window);
    var html_body = $('html, body');

    //    preloader js start 
    $window.on('load', function () {
        setTimeout(function () {
            $('#preloader').fadeOut('slow', function () {});
        }, 600);
    });

    // navbar js start
    $('header ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 40
                }, 1000);
                return false;
            }
        }
    });
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 65
    });

    $window.on('scroll', function () {
        if ($window.scrollTop()) {
            $(".navigation").addClass('navbaraddcolor');
        } else {
            $(".navigation").removeClass('navbaraddcolor');
        }
    })
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    //filter active
    $('.service-list').mixItUp();

    //video part js start
    $('.venobox').venobox();

    // counter js start
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });
    
    //    bottom to top js start
    var amountScrolled = 300;
    var bootomclass = $('.bottomtotop');
    bootomclass.hide();
    $window.scroll(function () {
        if ($window.scrollTop() > amountScrolled) {
            bootomclass.fadeIn('slow');
        } else {
            bootomclass.fadeOut('slow');
        }
    });

    bootomclass.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*---------------------------------------------------
           Main Slider
       ----------------------------------------------------*/
    var $mainSlider = $('.silder');

    $mainSlider.owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false,
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });



    //team_slider js
    $('.team_slider').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dot: false,
        speed: 1000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //clientpart js start
    $('.clientslide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    //clientpart js end


    //testimonial part js start
    $('.testimonialslider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    });


    //team_slider js
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dot: true,
        speed: 1000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


}(jQuery));

/*
Template Name: Babsa - Creative & Digital Agency HTML Template
Author: Devscriptpro.
Designed by: Devscriptpro.
Version: 1.0
*/