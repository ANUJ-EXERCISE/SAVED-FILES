var display = document.querySelector('#display');
var btn = document.querySelectorAll('button');

var arr = Array.from(btn);
var string = '';
var clicked =true;


arr.forEach(function (btn) {
    btn.addEventListener('click', function (details) {

        if (details.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }else if(details.target.innerHTML == 'AC'){
            string = '';
            display.value = string
        }else if(details.target.innerHTML == '='){
            string = eval(string)
            display.value = string;
        }else {
            string += details.target.innerHTML
            display.value = string;
        }

        if(clicked){
            clicked =true;
            btn.style.boxShadow ="none";
            setTimeout(()=>{
                clicked =true;
                btn.style.boxShadow ="10px 10px 20px black"
            },200)
        }


    })
})




