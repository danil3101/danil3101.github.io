var btn = $('.btn-m-menu');
var menu = $('.m-menu');

$(btn).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
});