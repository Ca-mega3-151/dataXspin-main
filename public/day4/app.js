var imgace = document.querySelectorAll('.main_inner img')
var prev = document.querySelector('.arrow_left i')
var next = document.querySelector('.arrow_right i')
var x = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

var currentindex = 0;

function showgallery()
{
    if (currentindex == 0 ) {
        prev.classList.add('hide')
    }
    else  {
        prev.classList.remove('hide')
    }

    if (currentindex == imgace.length - 1 ) {
        next.classList.add('hide')
    }
    else  {
        next.classList.remove('hide')
    }

    //display
    galleryImg.src = imgace[currentindex].src
    gallery.classList.add('show')
}

imgace.forEach((item, index)=>{
    item.addEventListener('click',function (){
        currentindex = index
        galleryImg.src = imgace[currentindex].src
        gallery.classList.add('show')
    })
})

x.addEventListener('click',function ()
{
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27)
        gallery.classList.remove('show')
})

prev.addEventListener('click',function ()
{
    if(currentindex > 0 )
    {
        currentindex--
        showgallery()
    }
})

next.addEventListener('click',function (){
    if (currentindex < imgace.length - 1)
    {
        currentindex++
        showgallery()
    }
})
