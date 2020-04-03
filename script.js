document.addEventListener('DOMContentLoaded', () => {

    const menu = document.getElementById("menu");
    const burger = document.getElementById("burger");
    const burgerShow = document.getElementById('burgerShow');
    const buttonLeft = document.getElementById("buttonLeft");
    const buttonRight = document.getElementById("buttonRight");
    const slides = document.querySelectorAll('.slide');
    const vertical = document.getElementById('vertical');
    const blackVertical = document.getElementById('blackVertical');
    const horizontal = document.getElementById('horizontal');
    const blackHorizontal = document.getElementById('blackHorizontal');
    const sortAll = document.querySelector('button#sortAll');
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
    const anchors = document.querySelectorAll('a[href*="#"]');

    // -----NAV-----

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    menu.addEventListener('click', (event) => {
        menu.querySelectorAll('a').forEach(elem => elem.classList.remove('active'));
        event.target.classList.add('active');
    });

    function clickHandler() {
        let target = event.target;

        if (target.classList.contains('nav__link')) {
            event.preventDefault();
            target.classList.add('active');
        }
    }

    // -----BURGER MENU-----

    burger.onclick = () => {
        burger.classList.toggle('rotate');
        if (menu.className === "menu") {
            menu.className += " show";
            burgerShow.style.display = 'block';
            burgerShow.classList.add('burger__show-active');
        } else {
            menu.className = "menu";
            burgerShow.style.display = null;
            burgerShow.classList.remove('burger__show-active');
        }
    }

    // -----PHONE ON/OFF-----

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

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function previousSlide() {
        goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
        slides[currentSlide].className = 'slide';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    buttonLeft.onclick = () => {
        nextSlide();
    };
    buttonRight.onclick = () => {
        previousSlide();
    };

    // -----PORTFOLIO-----

    sortAll.onclick = () => {
        shuffle();
    };
    sortWeb.onclick = () => {
        shuffle();
    };
    sortGraf.onclick = () => {
        shuffle();
    };
    sortArt.onclick = () => {
        shuffle();
    };

    function shuffle() {
        imgGal.forEach(element => {
            element.style.order = Math.floor(1 + Math.random() * 12);
        })
    }

    iBorder.querySelectorAll('img').forEach(label =>
        label.addEventListener('click', (event) => {
            iBorder.querySelectorAll('img').forEach(elem => elem.classList.remove('image__border'));
            event.target.classList.toggle('image__border');
        }));


    // -----Form-----

    const dataForm = {};

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        [...form.elements].forEach((elem) => {
            if ((elem.tagName === 'INPUT') ||
                (elem.tagName === 'TEXTAREA')) {
                dataForm [elem.name] = elem.value;
            }
            if (dataForm.subject === 'singolo' || dataForm.subject !== "") {
                outputSub.textContent = 'Subject: ' + dataForm.subject;
            } else {
                outputSub.textContent = "No subject";
            }

            if (dataForm.message === 'Portfolio project' || dataForm.message !== "") {
                outputDesc.textContent = 'Description: ' + dataForm.message;
            } else {
                outputDesc.textContent = "No description";
            }
        });
        form.reset();
    });

    formBtn.addEventListener('click', () => {
        if(document.getElementsByName('email')[0].value === ""
            && document.getElementsByName('name')[0].value === ""
        ) {
            alert("Пожалуйста заполните, 'Name' и 'Email'");
        } else { modal.style.display = 'block';}
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




