let arr = [
    {
        dp: 'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D', story: 'https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D'
    },
    {
        dp: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D', story: 'https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww'
    },
    {
        dp: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D', story: 'https://images.unsplash.com/photo-1515138692129-197a2c608cfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
    },
    {
        dp: 'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww', story: 'https://images.unsplash.com/photo-1496672254107-b07a26403885?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww'
    }
]

var clutter = ''
arr.forEach(function (value, index) {
    clutter += `<div id="story">
                <img id ="${index}"src="${value.dp}" alt="">
            </div>`
})


storycontainer.innerHTML = clutter;

var storycontainer = document.querySelector('#storycontainer')

storycontainer.addEventListener('click', function (details) {
    document.querySelector('#play').style.display = 'initial';
    document.querySelector('#play').style.backgroundImage = `url(${arr[details.target.id].story})`

    setTimeout(() => {
        document.querySelector('#play').style.display = 'none'
    }, 2000)
})


// sabse pehle array banaya uske baad usme dp or story ka ek ek sabke liyein object banaya

// iske baad hamne ek clutter name ka ek variable banaya kyonki hame div banake main storycontainer ke andar bhi toh rakhna hain na isliyein.
// uske badd array per foreach loop chalayan jo hamarein array ke har ek object ke dp ko clutter me save karenga like this(clutter+= div) ye div hamane isliyein likha hainn kyonki is div me hamarein img name aaenga or tabi toh add hoge hamarein story container.

//  or us div me hamane id bhi de di kya array ki index ki.
// uske baad hamne clutter ko storycontainer me add kar diya using innerhtml  (pata toh hain na)


// in sabke badd hamne kaha ki jab bhi ham storycontainer per click karenge toh sabse pehle toh ek div create hoga wahin play wala.

// phir jab display initial hoga toh uspe hamne kha ki page per background image per hamne array ke details me jo target hua hain mtlb jonse dp pe click kiya hain uski id aajaengi ki kis per clik hua.

// uske baad .story lagake uski story ko play div per as a background image run karvadi


// or sabse last settimeout ka use karke us story ko display none bhi kardiya
