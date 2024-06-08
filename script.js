const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

const gallery2Container = document.querySelector('.gallery2-container');
const gallery2ControlsContainer = document.querySelector('.gallery2-controls');
const gallery2Controls = ['previous', 'next'];
const gallery2Items = document.querySelectorAll('.gallery2-item');

class Carousel2 {
    constructor(container2, items2, controls2){
        this.carousel2Container = container2;
        this.carousel2Controls = controls2;
        this.carousel2Array = [...items2];
    }

    updateGallery2(){
        this.carousel2Array.forEach(el => {
            el.classList.remove('gallery2-item-1');
            el.classList.remove('gallery2-item-2');
            el.classList.remove('gallery2-item-3');
            el.classList.remove('gallery2-item-4');
            el.classList.remove('gallery2-item-5');
        });
        this.carousel2Array.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery2-item-${i+1}`);
        });
    }

    setCurrentState2(direction2){
        if (direction2.className == 'gallery2-controls-previous'){
            this.carousel2Array.unshift(this.carousel2Array.pop());
        }else{
            this.carousel2Array.push(this.carousel2Array.shift());
        }
        this.updateGallery2();
    }

    setControls2(){
        this.carousel2Controls.forEach(control2 => {
            gallery2ControlsContainer.appendChild(document.createElement('button')).className = `gallery2-controls-${control2}`;
            document.querySelector(`.gallery2-controls-${control2}`).innerText = control2;
        });
    }

    useControls2(){
        const triggers = [...gallery2ControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState2(control);
            });
        });
    }
}

const exampleCarousel2 = new Carousel2(gallery2Container, gallery2Items, gallery2Controls);

exampleCarousel2.setControls2();
exampleCarousel2.useControls2();

const gallery3Container = document.querySelector('.gallery3-container');
const gallery3ControlsContainer = document.querySelector('.gallery3-controls');
const gallery3Controls = ['previous', 'next'];
const gallery3Items = document.querySelectorAll('.gallery3-item');

class Carousel3 {
    constructor(container3, items3, controls3){
        this.carousel3Container = container3;
        this.carousel3Controls = controls3;
        this.carousel3Array = [...items3];
    }

    updateGallery3(){
        this.carousel3Array.forEach(el => {
            el.classList.remove('gallery3-item-1');
            el.classList.remove('gallery3-item-2');
            el.classList.remove('gallery3-item-3');
            el.classList.remove('gallery3-item-4');
            el.classList.remove('gallery3-item-5');
        });
        this.carousel3Array.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery3-item-${i+1}`);
        });
    }

    setCurrentState3(direction3){
        if (direction3.className == 'gallery3-controls-previous'){
            this.carousel3Array.unshift(this.carousel3Array.pop());
        }else{
            this.carousel3Array.push(this.carousel3Array.shift());
        }
        this.updateGallery3();
    }

    setControls3(){
        this.carousel3Controls.forEach(control3 => {
            gallery3ControlsContainer.appendChild(document.createElement('button')).className = `gallery3-controls-${control3}`;
            document.querySelector(`.gallery3-controls-${control3}`).innerText = control3;
        });
    }

    useControls3(){
        const triggers = [...gallery3ControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState3(control);
            });
        });
    }
}

const exampleCarousel3 = new Carousel3(gallery3Container, gallery3Items, gallery3Controls);

exampleCarousel3.setControls3();
exampleCarousel3.useControls3();