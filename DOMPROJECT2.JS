let image = document.querySelector('img');
let icon = document.querySelector('i');

image.addEventListener('dblclick', function () {
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    icon.style.opacity = 0.7;

    setTimeout(() => {
        icon.style.opacity = 0;
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
    }, 500)
})

