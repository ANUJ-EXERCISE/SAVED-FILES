var btn = document.querySelectorAll('button');
var input = document.querySelector('input');
var string = '';

var arr = Array.from(btn);

arr.forEach((val) => {
    val.addEventListener('click', (e) => {
        var a = true;
        if (e.target.innerHTML == "Del") {
            string = string.substring(0, string.length - 1)
            input.value = string;
        }else if(e.target.innerHTML == "AC"){
            string = '';
            input.value = string;
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        } else {
            string += e.target.innerHTML
            input.value = string;
        }
    })
})