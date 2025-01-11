var box = document.querySelector('#main');
var nav = document.querySelector('#nav');
var container = document.querySelector('#stories');
var play = document.querySelector('#playstatus');
var playstatus = document.querySelector('#indiv');
var dp1 = document.querySelector('#d1a');
var clse = document.getElementById('close');
var clutter = '';
var clicked = false;
var click = true;


leftnav.addEventListener('click', function () {
    if (!clicked) {
        clicked = true;
        initial.style.display = 'block'
    } else {
        clicked = false;
        initial.style.display = 'none'
    }
})

// story feature

var arr = [
    { dp: 'https://images.unsplash.com/photo-1615868167768-6fe2e8eaacd8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHAlMjBpbWFnZSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D', story: 'https://images.unsplash.com/photo-1594643781026-abcb610d394f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHAlMjBpbWFnZSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
    { dp: 'https://images.unsplash.com/photo-1683491753112-604719ba1797?q=80&w=389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1677276055738-193956797e6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8' },
];


arr.forEach(function (val, index) {
    clutter += `<div id="st"><div id="story"><img src="${val.dp}" id="${index}"></div></div>`;
})
container.innerHTML = clutter;
container.addEventListener('click', function (e) {
    if (e.target.id) {
        play.style.display = 'initial';
        dp1.innerHTML = `<img src="${arr[e.target.id].dp}" alt=""></img>`;
        playstatus.style.backgroundImage = `url(${arr[e.target.id].story})`;
    }
    setTimeout(() => {
        box.style.overflow = 'hidden';
    }, 100)
    var hap = setTimeout(() => {
        play.style.display = 'none'
    }, 4000)


    clse.addEventListener('click', function () {
        clearInterval(hap);
        play.style.display = 'none'
    })

})

// close play div using cross icon.

