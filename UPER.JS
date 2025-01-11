var div = document.querySelectorAll('#box');
var arr = Array.from(div);

arr.forEach((val)=>{
    val.addEventListener('mouseenter',function(){
        val.childNodes[0].style.transform = 'translateX(0%)';
        val.childNodes[1].style.transform = 'translatex(0%)';
    })
    
    val.addEventListener('mouseleave',function(){
        val.childNodes[0].style.transform = 'translateX(-100%)'
        val.childNodes[1].style.transform = 'translatex(200%)'
    })
})