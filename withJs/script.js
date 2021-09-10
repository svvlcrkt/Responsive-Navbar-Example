// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class (add or remove)

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    // console.log(links.classList.contains('links'));

    //addClass-removeClass-toggleClass

    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    else{
        links.classList.add('show-links');
    }

    // we can use another method; toggle
    // links.classList.toggle('show-links');

})

