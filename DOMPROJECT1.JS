let btn = document.querySelector('#add');
let friend = document.querySelector('#stran')


var check =0;
btn.addEventListener('click', function () {

     if(!check){
        check =1;
        friend.innerHTML = 'Friend';
        friend.classList.add("green");
        btn.innerHTML ="Remove Friend"
     }else{
        check =0;
        btn.innerHTML ="Add a friend"
        friend.innerHTML = 'Stranger'
        friend.classList.remove("green")
     }

})

