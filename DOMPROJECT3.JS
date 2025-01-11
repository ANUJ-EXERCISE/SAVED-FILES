var cursor =document.querySelector('#cursor');
var div = document.querySelector('#main');


div.addEventListener('mousemove',function(details){
    cursor.style.left = details.x + 'px';
    cursor.style.top = details.y + 'px';
    cursor.style.display ="initial";
})