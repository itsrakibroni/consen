(function ($) {
    'use strict';

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

    // Case Study Active
    $('.case-study').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    // brand Active
    $('.banner-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    // brand Active
    $('.brand-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1000: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })

    // testimonial Active
    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    // testimonial Active
    $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })

    // Brand Active
    $('.brand-list2').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    })

    // testimonial Active
    $('.blog-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function () {

        if ($.fn.isotope) {
            
            var $portfolio = $('.image_load');
    
            $portfolio.isotope({
                itemSelector: '.grid-item',
                filter: '*',
                resizesContainer: true,
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
    
            $('.menu-filtering li').on('click', function () {
                $('.menu-filtering li').removeClass('current_menu_item');
                $(this).addClass('current_menu_item');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({
                    filter: selector,
                });
            });
    
        }
    });






    // Sidebar
        
    "use strict";
    jQuery(document).ready(function () {
        $('.nav-btn a i').on('click', function () {
            $('.xs-sidebar-group').addClass('isActive');
        });

        $('.xs-overlay').on('click', function () {
            $('.xs-sidebar-group').removeClass('isActive');
        });
        
        $('.close-side-widget').on('click', function () {
            $('.xs-sidebar-group').removeClass('isActive');
        });
    });
    



    // Venubox

    $('.venobox').venobox({
        numeratio: true,
        infinigall: true

    });
    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })


    jQuery(document).ready(function ($) {
        "use strict";

        // =======< accordion js >========
        // $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        // $('.accordion a').on('click', function (j) {
        //     var dropDown = $(this).closest("li").find("p");

        //     $(this).closest(".accordion").find("p").not(dropDown).slideUp();

        //     if ($(this).hasClass("active")) {
        //         $(this).removeClass("active");
        //     } else {
        //         $(this).closest(".accordion").find("a.active").removeClass("active");
        //         $(this).addClass("active");
        //     }

        //     dropDown.stop(false, true).slideToggle();

        //     j.preventDefault();
        // });

                // Add active class and slide down first accordion item
        const firstAccordionItem = document.querySelector(".accordion > li:first-of-type");
        firstAccordionItem.querySelector("a").classList.add("active");
        firstAccordionItem.querySelector("p").style.display = "block";

        const accordionItems = document.querySelectorAll(".accordion a");
        accordionItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            const dropDown = this.closest("li").querySelector("p");
            const allDropDowns = document.querySelectorAll(".accordion p");

            allDropDowns.forEach(function(dropdown) {
            if (dropdown !== dropDown) {
                dropdown.style.display = "none";
            }
            });

            if (this.classList.contains("active")) {
            this.classList.remove("active");
            } else {
            const activeItem = document.querySelector(".accordion a.active");
            if (activeItem) {
                activeItem.classList.remove("active");
            }
            this.classList.add("active");
            }

            dropDown.style.display = (dropDown.style.display === "block" ? "none" : "block");

            event.preventDefault();
        });
        });


        //=====< barfiller script >====
        $('#bar1').barfiller({
        duration: 7000
        });
        $('#bar2').barfiller({
        duration: 7000
        });
        $('#bar3').barfiller({
        duration: 7000
        });



        //======< Custom Tab >======
        const tab = document.querySelector('.tab ul.tabs');
        tab.classList.add('active');
        tab.querySelector('> li:eq(0)').classList.add('current');

        const tabAnchorTags = document.querySelectorAll(".tab ul.tabs li a");
        tabAnchorTags.forEach(anchor => {
        anchor.addEventListener("click", event => {
            const tab = anchor.closest('.tab');
            const index = anchor.closest('li').index;

            tab.querySelectorAll('ul.tabs > li').forEach(li => li.classList.remove('current'));
            anchor.closest('li').classList.add('current');

            tab.querySelectorAll('.tab_content div.tabs_item').forEach((tabsItem, i) => {
            if (i !== index) {
                tabsItem.style.display = "none";
            } else {
                tabsItem.style.display = "block";
            }
            });

            event.preventDefault();
        });
        });

    });



    // <!--jave script -->

    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
        $("html, body").animate({
            scrollTop: "0"
        }, 1200);
    });


    $(".circle_percent").each(function () {
        var $this = $(this),
            $dataV = $this.data("percent"),
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.prop('Counter', 0).animate({
            Counter: $dataV
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now) + "%");
            }
        });
        if ($dataV >= 51) {
            $round.css("transform", "rotate(" + 360 + "deg)");
            setTimeout(function () {
                $this.addClass("percent_more");
            }, 1000);
            setTimeout(function () {
                $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
            }, 1000);
        }
    });


    // Calender Jquery
    var curDate = (new Date()).getDate();
    var curMonth = (new Date()).getMonth();
    var curYear = (new Date()).getFullYear();
    var startDay = (new Date(curYear, curMonth, 1)).getDay();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    var prevMonth = noofdays[curMonth - 1];
    if (curMonth == 11) {
        prevMonth = noofdays[0];
    } else if (curMonth == 0) {
        prevMonth = noofdays[11];
    }
    var totalDays = noofdays[curMonth];
    var counter = 0;
    var precounter = prevMonth - (startDay - 1);
    var rightbox = 6;
    var flag = true;

    jQuery('.curr-month b').text(months[curMonth]);
    for (var i = 0; i < 42; i++) {
        if (i >= startDay) {
            counter++;
            if (counter > totalDays) {
                counter = 1;
                flag = false;
            }
            if (flag == true) {
                jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
            } else {
                jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
            }
        } else {
            jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
            precounter++;
        }

        if (i == rightbox) {
            jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
            rightbox = rightbox + 7;
        }

        if (i > 34) {
            jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
        }

        if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
            jQuery(jQuery('.all-date ul li')[i]).css({
                "background-color": "#02548b",
                "color": "#fff"
            });
        }
    }


    // widget categories menu
    $(document).ready(function() {
        $('.widget-categories-menu ul li').on('mouseenter', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });

        $('.widget-categories-menu ul li a').on('mouseenter', function () {
            $(this).addClass('active');
            $(this).parent().siblings().find('a').removeClass('active');
        });
    })




})(jQuery);