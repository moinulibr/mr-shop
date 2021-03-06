$(function () {

    utils();


    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");


        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

    });


    $('i.delete').on('click', function () {
        $(this).parents('.item').fadeOut();
    });


    // ------------------------------------------------------- //
    // Open & Close Search Panel
    // ------------------------------------------------------ //
    $('.search').on('click', function () {
        $('.search-area').fadeIn();
    });

    $('.search-area .close-btn').on('click', function () {
        $('.search-area').fadeOut();
    });

    // ------------------------------------------------------- //
    // Autoplay videos only on desktops
    // ------------------------------------------------------ //
    var screenWidth = $(window).width();
    // if window width is smaller than 800 remove the autoplay attribute
    // from the video
    if (screenWidth > 800) {
        $('video.bg-video').attr('autoplay', true);
        $('video.bg-video').each(function () {
            this.play();
        });
    }


    // ------------------------------------------------------- //
    // Countdown on coming soon page
    // ------------------------------------------------------ //

    if ($('#countdown').length > 0) {

        $('#countdown').countdown('2020/10/10', function (event) {
            $(this).html(event.strftime(
                '<div class="col-6 col-sm-3"><div class="display-3 text-shadow">%D</div>days</div>' +
                '<div class="col-6 col-sm-3"><div class="display-3 text-shadow">%H</div>hours</div>' +
                '<div class="col-6 col-sm-3"><div class="display-3 text-shadow">%M</div>minutes</div>' +
                '<div class="col-6 col-sm-3"><div class="display-3 text-shadow">%S</div>seconds</div>'));
        });

    }


    // ------------------------------------------------------- //
    // Items Carousel
    // ------------------------------------------------------ //
    $('.items-slider').owlCarousel({
        loop: true,
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        dots: false,
        responsiveClass: false
    });


    // ------------------------------------------------------- //
    // Increase/Reduce product amount
    // ------------------------------------------------------ //
    var currency = $('body').data('currency');
    $('.basket-body .btn-dec').click(function () {
        var siblings = $(this).siblings('input.quantity-no');
        if (parseInt(siblings.val(), 10) >= 1) {
            var qty = parseInt(siblings.val(), 10) - 1;
            siblings.val(qty);
            cartSinglePrice(this, qty);
        }
    });
    $('.basket-body .btn-inc').click(function () {
        var siblings = $(this).siblings('input.quantity-no');
        var max = parseFloat($(this).data('max')) || 0;

        if ( parseFloat(siblings.val()) < max ) {
            var qty = parseInt(siblings.val(), 10) + 1;
            siblings.val(qty);
            cartSinglePrice(this, qty);
        }else{
            console.log('Max over!');
        }
    });

    $('.basket-body .cart_qty').keyup(function(e) {
        if(e.keyCode == 17) return;
        var max = parseFloat($(this).data('max')) || 0;
        var qty = parseFloat($(this).val()) || 0;

        if ( qty < max ) {
            cartSinglePrice(this, qty);
        }else{
            $(this).val(max)
            console.log('Max over!');
        }
    });
    function cartSinglePrice(el, qty){
        var price = parseFloat($(el).parents('.item').data('price')) || 0;
        $(el).parents('.item').find('.cart_price').text( currency +''+(price * qty).toFixed(2) )
    }





    var detail_item_max = parseFloat($('#details').data('max')) || 0;
    var detail_item_price = ($('#details').data('price'))? parseFloat($('#details').data('price')) || 0 :  parseFloat($('#details').data('sell')) || 0;
    var detail_item_sell = parseFloat($('#details').data('sell')) || 0;
    var detail_item_qty = parseFloat($('#quantity').val()) || 0;

    function singlePricesInit(){
        detail_item_max = parseFloat($('#details').data('max')) || 0;
        detail_item_price = ($('#details').data('price'))? parseFloat($('#details').data('price')) || 0 :  parseFloat($('#details').data('sell')) || 0;
        detail_item_sell = parseFloat($('#details').data('sell')) || 0;
        detail_item_qty = parseFloat($('#quantity').val()) || 0;
    }

    $('body').on('click', '.product_popup', function(e){
      e.preventDefault();
      let url = $(this).data('url');
      $.ajax({
        type: 'GET',
        url,
        success: function(response){
          if (response.success) {
            $('#productPopupModal .modal-body').html(response.html);
            $('#productPopupModal').modal('show');
            singlePricesInit();
            $('.bs-select').selectpicker({
                size: 4
            });    
          }
        }
      })
    })


    //Single
    $(document).on('click','.details .dec-btn', function () {
        var siblings = $(this).siblings('input.quantity-no');
        if (parseInt(siblings.val(), 10) >= 1) {
            var qty = parseInt(siblings.val(), 10) - 1;
            siblings.val(qty);
            detail_item_qty = qty;
            detailsSinglePrice(this);
        }
    });


    $(document).on('click','.details .inc-btn', function () {
        var siblings = $(this).siblings('input.quantity-no');
        if ( parseFloat(siblings.val()) < detail_item_max ) {
            var qty = parseInt(siblings.val(), 10) + 1;
            siblings.val(qty);
            detail_item_qty = qty;
            detailsSinglePrice(this);
        }else{
            console.log('Max over!');
        }
    });
    $(document).on('keyup','.details #quantity', function (e) {
        if(e.keyCode == 17) return;
        var qty = parseFloat($(this).val()) || 0;
        if ( qty < detail_item_max ) {
            $(this).val(qty);
            detail_item_qty = qty;
            detailsSinglePrice(this);
        }else{
            $(this).val(detail_item_max);
            detail_item_qty = detail_item_max;
            console.log('Max over!', detail_item_qty);
        }
    });

    function detailsSinglePrice(el){
        var offer_price = (detail_item_price>0)? detail_item_price : detail_item_sell;
        $(el).parents('.details').find('.current').text(currency+''+ (offer_price * detail_item_qty).toFixed(2) );
        if(detail_item_sell>0 && detail_item_price>0){
            $(el).parents('.details').find('.original').text(currency+''+ (detail_item_sell * detail_item_qty).toFixed(2));  
        }else{
            $(el).parents('.details').find('.original').text('');
        }
    }






    $(document).on('change', '.details .variation_select', function(){
        singleProductPriceUpdate(this);
    })

    function singleProductPriceUpdate(el){
        var $varient = $(el).find('option:selected');
        var price = ($varient.data('price'))? parseFloat($varient.data('price')) || 0 : parseFloat($varient.data('sell_price')) || 0;
        var sell_price = parseFloat($varient.data('sell_price')) || 0;
        var quantity = parseFloat($varient.data('quantity')) || 0;

        var img = $varient.data('img');
        var original_img = $(el).parents('.details').data('img');

        // var currency = $('body').data('currency');
        // $(el).parents('.details').attr('data-price', price);
        // $(el).parents('.details').attr('data-sell', sell_price);
        // $(el).parents('.details').attr('data-max', quantity);
        detail_item_max = quantity;
        detail_item_price = price;
        detail_item_sell = sell_price;

        if(detail_item_qty > detail_item_max){
          $('#quantity').val(detail_item_max);
          detail_item_qty = detail_item_max;
        } 

        (img)? $('#image_product').show().attr('src', img) : (original_img)? $('#image_product').show().attr('src', original_img) : $('#image_product').hide();
        if( $('.thumb-varient-'+$varient.val()).length ){
            $('.thumb-varient-'+$varient.val()).click();
        }else{
            if($('.owl-thumb-item.init-thumb-0').length) $('.owl-thumb-item.init-thumb-0').click();
        }


        var offer_price = (detail_item_price>0)? detail_item_price : detail_item_sell;
        $(el).parents('.details').find('.current').text(currency+''+ (offer_price * detail_item_qty).toFixed(2) );
        if(detail_item_sell>0 && detail_item_price>0){
            $(el).parents('.details').find('.original').text(currency+''+ (detail_item_sell * detail_item_qty).toFixed(2));
        }else{
            $(el).parents('.details').find('.original').text('');
        }
    }






    // ------------------------------------------------------- //
    // Scroll to top button
    // ------------------------------------------------------ //
    // Scroll to top button
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 1500) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });


    $('#scrollTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



    // ------------------------------------------------------- //
    // Bootstrap select
    // ------------------------------------------------------ //
    $('.bs-select').selectpicker({
        size: 4
    });


    // ------------------------------------------------------- //
    // Hero Slider
    // ------------------------------------------------------ //
    var owl = $('.hero-slider');
    owl.owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 500,
        responsiveClass: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 1,
                nav: false,
                dots: true
            },
            1120: {
                items: 1,
                dots: false,
                nav: true
            }
        },
        onRefresh: function () {
            owl.find('.item').height('');
        },
        onRefreshed: function () {
            var maxHeight = 0;
            var items = owl.find('.item');
            items.each(function () {
                var itemHeight = $(this).height();
                if (itemHeight > maxHeight) {
                    maxHeight = itemHeight;
                }
            });
            items.height(maxHeight);
        }
    });

    // ------------------------------------------------------- //
    // Products Slider
    // ------------------------------------------------------ //
    $('.products-slider').owlCarousel({
        loop: false,
        margin: 20,
        dots: true,
        nav: false,
        smartSpeed: 400,
        responsiveClass: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // ------------------------------------------------------- //
    // Brands Slider
    // ------------------------------------------------------ //
    $('.brands-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        smartSpeed: 400,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6,
                loop: false
            }
        }
    });

    // ------------------------------------------------------- //
    //  Styled Leaflet Map
    // ------------------------------------------------------ //

    var mapId = 'map',
        mapCenter = [53.14, 8.22],
        mapMarker = true;

    if ($('#' + mapId).length > 0) {

        var icon = L.icon({
            iconUrl: 'img/marker.png',
            iconSize: [25, 37.5],
            popupAnchor: [0, -18],
            tooltipAnchor: [0, 19]
        });

        var dragging = false,
            tap = false;

        if ($(window).width() > 700) {
            dragging = true;
            tap = true;
        }

        var map = L.map(mapId, {
            center: mapCenter,
            zoom: 13,
            dragging: dragging,
            tap: tap,
            scrollWheelZoom: false
        });

        var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: 'abcd',
            minZoom: 0,
            maxZoom: 20,
            ext: 'png'
        });

        Stamen_TonerLite.addTo(map);

        map.once('focus', function () {
            map.scrollWheelZoom.enable();
        });

        if (mapMarker) {
            var marker = L.marker(mapCenter, {
                icon: icon
            }).addTo(map);

            marker.bindPopup("<div class='p-4'><h5>Info Window Content</h5><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
                minwidth: 200,
                maxWidth: 600,
                className: 'map-custom-popup'
            })

        }
    }



});

// ------------------------------------------------------ //
// For demo purposes, can be deleted
// ------------------------------------------------------ //

var stylesheet = $('link#theme-stylesheet');
$("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
var alternateColour = $('link#new-stylesheet');

if ($.cookie("theme_csspath")) {
    alternateColour.attr("href", $.cookie("theme_csspath"));
}

$("#colour").change(function () {

    if ($(this).val() !== '') {

        var theme_csspath = 'css/style.' + $(this).val() + '.css';

        alternateColour.attr("href", theme_csspath);

        $.cookie("theme_csspath", theme_csspath, {
            expires: 365,
            path: document.URL.substr(0, document.URL.lastIndexOf('/'))
        });

    }

    return false;
});

function utils() {

    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */

    $('.scroll-to, .scroll-to-top').click(function (event) {

        var full_url = this.href;
        var parts = full_url.split("#");
        if (parts.length > 1) {

            scrollTo(full_url);
            event.preventDefault();
        }
    });

    function scrollTo(full_url) {
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }

        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
    }
}