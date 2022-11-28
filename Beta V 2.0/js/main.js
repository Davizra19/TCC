var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{

    if (ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src ='img/menu.png'
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src ='img/close.png'
    }
    
})



'use strict';

const images = [
    { 'id': '1', 'url':'./img/Slide2.jpeg' },
    { 'id': '2', 'url':'./img/Slide1.jpeg' },
    { 'id': '3', 'url':'./img/Slide3.jpeg'  },
    
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);