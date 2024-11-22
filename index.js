document.addEventListener('DOMContentLoaded', function () {
    /*var flkty = new Flickity('.main-carousel');
    var objs = document.querySelectorAll('.obj');
    objs.forEach(function(obj) {
        obj.addEventListener( 'click', function( event ) {
            // filter for obj clicks
            if ( !matchesSelector( event.target, '.obj' ) ) {
                return;
            }
            var selector = event.target.getAttribute('data-selector');
            flkty.selectCell( selector );
        });
    }); */
    
    $('.page-banner-carousel').flickity({
        wrapAround: true,
        cellAlign: 'left',
        pageDots: false,
        arrowShape: 'M-2.1938007e-13,4.0010929 L14.8845268,4.0010929 L-2.1938007e-13,4.0010929 Z M14.8845268,4 L10.862069,0.0655737705 L14.8845268,4 Z M14.8845268,4 L10.862069,7.93442623 L14.8845268,4 Z'
    });
});