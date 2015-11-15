$(function () {

    console.log("ESAT Microsites");
    //////////////////////////
    // Imantación apartados //
    //////////////////////////

    //    $("ul.content").snapscroll({
    //        'scrollEndSpeed': '600',
    //        'topPadding': '250',
    //        'scrollOptions': {
    //            'interrupt': 'true'
    //        }
    //    });

    /////////////////////
    // Menu navegación //
    /////////////////////

    /* $("nav ul li a").click(function () {
         $("nav ul li").removeClass("active");
         $(this).parent().addClass("active");
     });*/

    ////////////////////////////////
    // Menu show / hide on scroll //
    ////////////////////////////////

    /* var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('header').outerHeight();

     $(window).scroll(function (event) {
         didScroll = true;
     });

     setInterval(function () {
         if (didScroll) {
             hasScrolled();
             didScroll = false;
         }
     }, 250);

     function hasScrolled() {
         var st = $(this).scrollTop();

         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta)
             return;

         // If they scrolled down and are past the navbar, add class .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight) {
             // Scroll Down
             $('header').removeClass('nav-down').addClass('nav-up');
         } else {
             // Scroll Up
             if (st + $(window).height() < $(document).height()) {
                 $('header').removeClass('nav-up').addClass('nav-down');
             }
         }

         lastScrollTop = st;
     }*/



    //$('#menu2').slicknav();


    //////////////////
    // Share Social //
    //////////////////

    $('#twitter').sharrre({
        share: {
            twitter: true
        },
        template: '<button type="button" class="btn btn-default btn-lg"><i class="custom-icon">&#xe801;</i>{total}</button>',

        enableHover: false,
        enableTracking: true,
        buttons: {
            twitter: {
                via: '_JulienH'
            }
        },
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('twitter');
        }
    });
    $('#facebook').sharrre({
        share: {
            facebook: true
        },
        template: '<button type="button" class="btn btn-default btn-lg"><i class="custom-icon">&#xe800;</i>{total}</button>',
        enableHover: false,
        enableTracking: true,
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('facebook');
        }
    });
    $('#linkedin').sharrre({
        share: {
            linkedin: true
        },
        template: '<button type="button" class="btn btn-default btn-lg"><i class="custom-icon">&#xe802;</i>{total}</button>',
        enableHover: false,
        enableTracking: true,
        click: function (api, options) {
            api.simulateClick();
            api.openPopup('googlePlus');
        }
    });

    /////////////////////////////////////
    // Scroll to content on click menu //
    /////////////////////////////////////

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 90
                }, 1000);
                return false;
            }
        }
    });

    ////////////////////////////////////
    // Owl Carousel - Galería escuela //
    ////////////////////////////////////

    $('#apartado3 .owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 20,
        stagePadding: 0,
        smartSpeed: 450
    });

    $('#apartado4 .owl-carousel').owlCarousel({

        items: 1,
        margin: 0,
        stagePadding: 0,
        smartSpeed: 450
    });

    //$( ".owl-stage-outer " ).wrap( "<div class='bordeOwl'></div>" );

    /////////////////
    // Tooltipster //
    /////////////////

    $('#apartado4 .owl-dot').addClass('_tooltip');
    $('#apartado4 .owl-dot:eq(0)').attr('title', '1º Año');
    $('#apartado4 .owl-dot:eq(1)').attr('title', '2º Año');
    $('#apartado4 .owl-dot:eq(2)').attr('title', '3º Año');
    $('#apartado4 .owl-dot:eq(3)').attr('title', '4º Año (Opcional)');


    $('._tooltip').tooltipster({
        theme: 'tooltipster-shadow'
    });

    //////////////////////
    // VENTANAS MODALES //
    //////////////////////


    $('#btn-legal').on('click', function (e) {
        e.preventDefault();
        Custombox.open({
            target: '#modal-legal',
            effect: 'blur'
        });
        return false;
    });
    $('#btn-sobreESAT').on('click', function (e) {
        e.preventDefault();
        Custombox.open({
            target: '#modal-sobreESAT',
            effect: 'blur'
        });
        return false;
    });
    $('#btn-INFO').on('click', function (e) {
        e.preventDefault();
        Custombox.open({
            target: '#modal-INFO',
            effect: 'blur'
        });
        return false;
    });



    /////////////////////////////
    // Scroll to Top & Reserva //
    /////////////////////////////


    $("#goUp").click(function () {
        $('html,body').animate({
            scrollTop: $("#apartado1").offset().top
        }, 1000);
    });

    $("#btn-RESERVA ,#btn-RESERVA2").click(function () {
        $('html,body').animate({
            scrollTop: $("#apartado7").offset().top
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#goUp:hidden').stop(true, true).fadeIn();
        } else {
            $('#goUp').stop(true, true).fadeOut();
        }


    });

    $('.itemInView').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            // element is now visible in the viewport
            if (visiblePartY == 'top') {
                // top part of element is visible
                //console.log($(this).attr('id'));
                //var _index = $(this).attr('id').substring(8, 9);
            } else if (visiblePartY == 'bottom') {
                // bottom part of element is visible
            } else {
                // whole part of element is visible
                $("nav ul li").removeClass("active");
                var _index = $(this).data("apartado");
                var index = _index - 1;
                $("nav ul li:eq(" + index + ")").addClass("active");
                console.log(this);
            }
        } else {

        }
    });

    //////////////////////////
    // ANIMA OBJETOS INVIEW //
    //////////////////////////

    $('.itemAnimaInView').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            // element is now visible in the viewport
            if (visiblePartY == 'top') {
                // top part of element is visible


            } else if (visiblePartY == 'bottom') {
                // bottom part of element is visible
            } else {
                // whole part of element is visible
                $(this).addClass("animated fadeInUp");


            }
        } else {
            if ($(this).hasClass("fadeInUp")) {
                $(this).css("opacity", 0);
                $(this).removeClass("animated fadeInUp");
            }

        }
    });

    ////////////////
    // FORMULARIO //
    ////////////////

    $('#formContacto').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            // handle the invalid form...
        } else {
            // everything looks good!

            e.preventDefault();
            Custombox.open({
                target: '#modal-formulario',
                effect: 'blur',
                position: ['center', 'center']
            });

            // Envio formulario mediante PHP



            var parametros = {
                "_nombre": $("#input-nombre").val(),
                "_apellidos": $("#input-apellidos").val(),
                "_telefono": $("#input-telefono").val(),
                "_email": $("#input-email").val(),
                "_mensaje": $("#input-mensaje").val()

            };
            $.ajax({
                data: parametros,
                url: 'php/sendFormEmail.php',
                type: 'post',
                beforeSend: function () {
                    //alert("Enviado");
                },
                success: function (response) {
                    //alert("Error");
                }
            });
            return false;

        }
    })

    ////////////
    // VIDEOS //
    ////////////

    var vid = document.getElementById("bgvid");
    var vid2 = document.getElementById("bgvid2");
    var vid_ = $("#bgvid");
    var vid2_ = $("#bgvid2");
    var pauseButton = document.querySelector("#apartado2 .video-controls button");
    var pauseButton2 = document.querySelector("#apartado5 .video-controls button");
    var titulo;
    var titulo2;
    var subtitulo;
    var subtitulo2;
    var tempPlayPause;
    var tempPlayPause2;
    var timeout = null;
    var timeout2 = null;
    var moviendo = false;
    var moviendo2 = false;
    var hoverButton = false;
    var hoverButton2 = false;

    $("#apartado2 .video-controls button").hover(
        function () {
            hoverButton = true;
        },
        function () {
            hoverButton = false;
        }
    );

    $("#apartado5 .video-controls button").hover(
        function () {
            hoverButton2 = true;
        },
        function () {
            hoverButton2 = false;
        }
    );

    function vidFade() {
        vid.classList.add("stopfade");
    }

    function vidFade2() {
        vid2.classList.add("stopfade");
    }

    vid.addEventListener('ended', function () {
        // only functional if "loop" is removed 
        vid.pause();
        // to capture IE10
        vidFade();
        $("#apartado2 .video-controls").fadeOut();
    });

    vid2.addEventListener('ended', function () {
        // only functional if "loop" is removed 
        vid2.pause();
        // to capture IE10
        vidFade2();
        $("#apartado5 .video-controls").fadeOut();
    });


    $("#apartado2").on("click", function () {
        titulo = $(this).find("h1");
        subtitulo = $(this).find("p");
        vid.classList.toggle("stopfade");
        if (vid.paused) {
            vid.play();
            vid_.css('opacity', '1');
            $("#apartado2 .imgPlay").fadeIn(0);
            $("#apartado2 .imgPlayPause").attr("src", "img/play-icon.png");
            titulo.fadeOut(300);
            subtitulo.fadeOut(300);
            tempPlayPause = setInterval(function () {
                showHidePlayPause()
            }, 100);
        } else {
            $("#apartado2 .video-controls").fadeIn(300);
            vid.pause();
            vid_.css('opacity', '0.5');
            $("#apartado2 .imgPlayPause").attr("src", "img/pause-icon.png");
            titulo.fadeIn(300);
            subtitulo.fadeIn(300);
            if (tempPlayPause) {
                clearInterval(tempPlayPause);
            }
        }
    });

    $("#apartado5").on("click", function () {
        titulo2 = $(this).find("h1");
        subtitulo2 = $(this).find("p");
        vid2.classList.toggle("stopfade");
        if (vid2.paused) {
            vid2.play();
            vid2_.css('opacity', '1');
            $("#apartado5 .imgPlay").fadeIn(0);
            $("#apartado5 .imgPlayPause").attr("src", "img/play-icon.png");
            titulo2.fadeOut(300);
            subtitulo2.fadeOut(300);
            tempPlayPause2 = setInterval(function () {
                showHidePlayPause2()
            }, 100);
        } else {
            $("#apartado5 .video-controls").fadeIn(300);
            vid2.pause();
            vid2_.css('opacity', '0.5');
            $("#apartado5 .imgPlayPause").attr("src", "img/pause-icon.png");
            titulo2.fadeIn(300);
            subtitulo2.fadeIn(300);
            if (tempPlayPause2) {
                clearInterval(tempPlayPause2);
            }
        }
    });


    $("#apartado2").on('mousemove', function () {
        moviendo = true;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            moviendo = false;
        }, 1000);
    });

    $("#apartado5").on('mousemove', function () {
        moviendo2 = true;
        clearTimeout(timeout2);
        timeout2 = setTimeout(function () {
            moviendo2 = false;
        }, 1000);
    });

    function showHidePlayPause() {
        if (!$("#apartado2 .video-controls").is(":animated") && moviendo) {
            $(".video-controls").fadeIn(300);
        }
        if (moviendo == false && hoverButton == false) {
            $("#apartado2 .video-controls").fadeOut(300);
        }

    }

    function showHidePlayPause2() {
        if (!$("#apartado5 .video-controls").is(":animated") && moviendo2) {
            $("#apartado5 .video-controls").fadeIn(300);
        }
        if (moviendo2 == false && hoverButton2 == false) {
            $("#apartado5 .video-controls").fadeOut(300);
        }

    }

    $(window).resize(function () {
        var size = $("#bgvid").height();
        $("#apartado2").css("height", size + 'px');
        $("#apartado5").css("height", size + 'px');


    });
    var size = $("#bgvid").height();
    $("#apartado2").css("height", size + 'px');
    $("#apartado5").css("height", size + 'px');

    ////////////////////////////////
    // Cookies & Google Analytics //
    ////////////////////////////////

    $.cookieBar({

        message: 'Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, adaptarse a sus preferencias y realizar labores analíticas. Si continua navegando consideramos que acepta su uso.', //Message displayed on bar
        acceptButton: true, //Set to true to show accept/enable button
        acceptText: 'Acepto', //Text on accept/enable button
        acceptFunction: activateGoogleAnalytics, //Callback function that triggers when user accepts
        declineButton: false, //Set to true to show decline/disable button
        declineText: 'Desactivar', //Text on decline/disable button
        declineFunction: false, //Callback function that triggers when user declines
        policyButton: true, //Set to true to show Privacy Policy button
        policyText: 'Leer más', //Text on Privacy Policy button
        policyFunction: showAvisoLegal, //Callback function that triggers before redirect when user clicks policy button
        policyURL: '', //URL of Privacy Policy
        autoEnable: true, //Set to true for cookies to be accepted automatically. Banner still shows
        acceptOnContinue: false, //Set to true to silently accept cookies when visitor moves to another page
        expireDays: 365, //Number of days for cookieBar cookie to be stored for
        forceShow: false, //Force cookieBar to show regardless of user cookie preference
        effect: 'slide', //Options: slide, fade, hide
        element: 'body', //Element to append/prepend cookieBar to. Remember "." for class or "#" for id.
        append: false, //Set to true for cookieBar HTML to be placed at base of website. YMMV
        fixed: true, //Set to true to add the class "fixed" to the cookie bar. Default CSS should fix the position
        bottom: true, //Force CSS when fixed, so bar appears at bottom of website
        customClass: '', // Optional cookie bar class. Target #cookiebar.<customClass> to avoid !important overwrites and separate multiple classes by spaces
        zindex: '', //Can be set in CSS, although some may prefer to set here
        redirect: false, //Current location. Setting to false stops redirect
        domain: String(window.location.hostname), //Location of privacy policy
        referrer: String(document.referrer) //Where visitor has come from
    });

    function showAvisoLegal(e) {
        
        Custombox.open({
            target: '#modal-legal',
            effect: 'blur'
        });
    }

    function activateGoogleAnalytics() {
        /*var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-XXXXX-X']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();*/
    }




});