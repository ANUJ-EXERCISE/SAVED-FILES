const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

var image = document.querySelector('#box2 img');
var div = document.querySelector('#main');

div.addEventListener('mouseenter',function(details){
    gsap.to(image,{
        rotate:'0deg',
        width:'100px',
        opacity:1,
        ease:Power4
    })

    gsap.to(image,{
        opacity:1,
        ease:Power4
    })
})

div.addEventListener('mouseleave',function(details){
    gsap.to(image,{
        rotate:'60deg',
        opacity:1,
        width:'200px',
        ease:Power4
    })
})













