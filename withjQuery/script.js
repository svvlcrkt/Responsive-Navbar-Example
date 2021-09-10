const navToggle = $('.nav-toggle');
const links = $('.links');

navToggle.click(function(){
    links.toggleClass('show-links');
})