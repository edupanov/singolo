document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const nav = document.getElementById('nav');
    const buttonLeft = document.getElementById("buttonLeft");
    const buttonRight = document.getElementById("buttonRight");
    const slides = document.querySelectorAll('.slide');
    const vertical = document.getElementById('vertical');
    const blackVertical = document.getElementById('blackVertical');
    const horizontal = document.getElementById('horizontal');
    const blackHorizontal = document.getElementById('blackHorizontal'); const sortAll = document.querySelector('button#sortAll');
    const sortWeb = document.querySelector('button#sortWeb');
    const sortGraf = document.querySelector('button#sortGraf');
    const sortArt = document.querySelector('button#sortArt');
    const imgGal = document.querySelectorAll('div.portfolio__gallery .portfolio__image');
    const iBorder = document.getElementById('imageBorder');
    const form = document.getElementById('form');
    const modal = document.getElementById('modal');
    const formBtn = document.getElementById('formBtn');
    const modalBtn = document.getElementById('modalBtn');
    const outputSub = document.getElementById('outputSub');
    const outputDesc = document.getElementById('outputDesc');



    // -----NAV-----

    nav.addEventListener('click', (event) => {
        nav.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
        event.target.classList.add('active');
    });

    // -----BLACK WINDOW-----

    vertical.addEventListener('click', () => {
        blackVertical.style.display = 'block'
    });

    blackVertical.addEventListener('click', () => {
           blackVertical.style.display = 'none';
      });

    horizontal.addEventListener('click', () => {
        blackHorizontal.style.display = 'block'
    });

    blackHorizontal.addEventListener('click', () => {
        blackHorizontal.style.display = 'none'
    });


    // -----SLIDER-----
    
    let currentSlide = 0;

    function nextSlide(){
        goToSlide(currentSlide+1);
    }
    
    function previousSlide(){
        goToSlide(currentSlide-1);
    }
    
    function goToSlide(n){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }
        
    buttonLeft.onclick = () => {
        nextSlide();
    };
    buttonRight.onclick = () => {
        previousSlide();
    };

console.log(slides);

    buttonLeft.addEventListener('click', (event) => {
        buttonLeft.querySelectorAll('.slide').forEach(elem => elem.classList.remove('showing'));
        event.target.classList.add('showing');
    });

    // -----PORTFOLIO-----

    sortAll.onclick = () => {
        shuffle('style');
    };
    sortWeb.onclick = () => {
        sortList('data-sort');
    };
    sortGraf.onclick = () => {
        sortListDesc('data-sort');
    };
    sortArt.onclick = () => {
        sortList('data-sort');
    };

    function sortList(sort) {
        let imgGal = document.querySelector('.portfolio__gallery');
        for (let i = 0; i < imgGal.children.length - 1; i++) {
            for (let j = i; j < imgGal.children.length; j++) {
                if (+imgGal.children[i].getAttribute(sort) > +imgGal.children[j].getAttribute(sort)) {
                    let replacedNode = imgGal.replaceChild(imgGal.children[j], imgGal.children[i]);
                    insertAfter(replacedNode, imgGal.children[i]);
                }
            }
        }
    }

    function sortListDesc(sort) {
        let imgGal = document.querySelector('.portfolio__gallery');
        for (let i = 0; i < imgGal.children.length - 1; i++) {
            for (let j = i; j < imgGal.children.length; j++) {
                if (+imgGal.children[i].getAttribute(sort) < +imgGal.children[j].getAttribute(sort)) {
                    let replacedNode = imgGal.replaceChild(imgGal.children[j], imgGal.children[i]);
                    insertAfter(replacedNode, imgGal.children[i]);
                }
            }
        }
    }

    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }

    function shuffle(){
        imgGal.forEach(element => {
            element.style.order = Math.floor(1 + Math.random() * 12);
        })
    }

    iBorder.addEventListener('click', (event) => {
        iBorder.querySelectorAll('div.portfolio__image > img').forEach(elem => elem.classList.remove('image__border'));
        event.target.classList.add('image__border');
    });


    // -----Form-----

    const dataForm = {};

    form.addEventListener ('submit', (event) => {
        event.preventDefault();

        [...form.elements].forEach((elem) => {
            if ((elem.tagName === 'INPUT') ||
                elem.tagName === 'TEXTAREA') {
                dataForm [elem.name] = elem.value;
            }

            if (dataForm.subject === 'singolo' || dataForm.subject !== "") {
                outputSub.textContent ='Subject: ' + dataForm.subject;
            } else {
                outputSub.textContent = "No subject";
            }

            if (dataForm.message === 'Portfolio project' || dataForm.message !== "") {
                outputDesc.textContent ='Description: ' + dataForm.message;
            } else {
                outputDesc.textContent = "No description";
            }
        });


        form.reset();
        console.log(dataForm.name);
    });

    console.log(dataForm);

    formBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

});



