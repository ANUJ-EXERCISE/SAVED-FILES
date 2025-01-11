var body = document.querySelector('body');
var floatingdiv = document.querySelector('#main');


body.addEventListener('mousemove', function (details) {
    setTimeout(()=>{
        floatingdiv.style.left = details.x + "px"
        floatingdiv.style.top = details.y(800) + "px"
    },500)
})

