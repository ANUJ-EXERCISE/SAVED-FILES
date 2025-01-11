var firstdiv = document.querySelector('#box1');
var firstimage = document.querySelector('#box1 img');
var firstbutton = document.querySelector('#box1 button');

firstdiv.addEventListener('mouseenter',function(){
        gsap.to(firstdiv,{
            width:'55%',
        })
        gsap.to(firstimage,{
            height:'550px',
        })
        gsap.to(firstbutton,{
            backgroundColor: 'white',
            color: 'black'
        })
})


firstdiv.addEventListener('mouseleave',function(){
    gsap.to(firstdiv,{
        width:'50%',
    })
    gsap.to(firstimage,{
        height:'500px',
    })
    gsap.to(firstbutton,{
        backgroundColor: 'transparent',
        color: 'white'
    })
})


// second div

var seconddiv = document.querySelector('#box2');
var seconddiv = document.querySelector('#box2');
var secondimage = document.querySelector('#box2 img');
var secondbutton = document.querySelector('#box2 button');

seconddiv.addEventListener('mouseenter',function(){
        gsap.to(seconddiv,{
            width:'55%',
        })
        gsap.to(secondimage,{
            height:'750px',
        })
        gsap.to(secondbutton,{
            backgroundColor: 'white',
            color: 'black'
        })
})


seconddiv.addEventListener('mouseleave',function(){
    gsap.to(seconddiv,{
        width:'50%',
    })
    gsap.to(secondimage,{
        height:'700px',
    })
    gsap.to(secondbutton,{
        backgroundColor: 'transparent',
        color: 'white'
    })
})