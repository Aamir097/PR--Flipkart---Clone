let items= document.querySelectorAll('.slide-item');
let currentIndex=0;
let next= document.getElementById('next');
let prev= document.getElementById('prev');

function removeActiveclass(){
    items.forEach(item => item.classList.remove('active'));
}

const nextslide=()=>{
    currentIndex= (currentIndex + 1) % items.length;
    removeActiveclass();

    items[currentIndex].classList.add('active');
};

const prevslide=()=>{
    currentIndex=(currentIndex - 1 + items.length )% items.length;    
    removeActiveclass();
    items[currentIndex].classList.add('active');
};


setInterval(nextslide,2000);