var a = document.querySelector('#box1');
var b = document.querySelector('#box2');

a.addEventListener('mouseenter', function () {
    gsap.to(a, {
        width: "55%"
    })

    gsap.to(b, {
        width: '45%'
    })

})

a.addEventListener('mouseleave', function () {
    gsap.to(a, {
        width: "50%"
    })

    gsap.to(b, {
        width: '50%'
    })
})


b.addEventListener('mouseenter', function () {
    gsap.to(b,{
        width:'55%'
    })

    gsap.to(a,{
        width:'45%'
    })
})

b.addEventListener('mouseleave', function () {
    gsap.to(b,{
        width:'50%'
    })

    gsap.to(a,{
        width:'50%'
    })
})