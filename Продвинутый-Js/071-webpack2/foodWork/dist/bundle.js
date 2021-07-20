/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((module) => {

function calc() {
    let calculatingResult = document.querySelector(".calculating__result span"),
        sex, height, weight, age, ratio;

    if (localStorage.getItem("sex")) {
        sex = localStorage.getItem("sex");
    } else {
        sex = "female";
        sex = localStorage.setItem("sex", "female");
    }

    if (localStorage.getItem("ratio")) {
        ratio = localStorage.getItem("ratio");
    } else {
        ratio = 1.375;
        ratio = localStorage.setItem("ratio", 1.375);
    }



    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            calculatingResult.textContent = "нехватает данных";
            return;
        }
        if (ratio === female) {
            calculatingResult.textContent = ((447.6 + (9, 2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed(0);
        } else {
            calculatingResult.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(0);
        }
    }

    calcTotal();

    function getStaticInf(Selector, activeElement) {
        let element = document.querySelectorAll(`${Selector} `);

        element.forEach(i => {
            i.addEventListener("click", (e) => {
                if (e.target.getAttribute("data-ratio")) {
                    ratio = e.target.getAttribute("data-ratio");
                    localStorage.setItem("ratio", e.target.getAttribute("data-ratio"));
                    calcTotal();
                } else {
                    sex = e.target.getAttribute("id");
                    localStorage.setItem("sex", e.target.getAttribute("id"));
                    calcTotal();
                }
                element.forEach((i) => {
                    i.classList.remove(activeElement);
                });
                e.target.classList.add(activeElement);
            });
        });
        calcTotal();
    }

    function getStaticInfFromLocal(Selector, activeElement) {
        let element = document.querySelectorAll(`${Selector}`);

        element.forEach(i => {
            i.classList.remove(activeElement);
            if (i.getAttribute("id") === localStorage.getItem("sex")) {
                i.classList.add(activeElement);
            }
            if (i.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
                i.classList.add(activeElement);
            }
        });
    }

    function getDymnamicInf(parentSelector) {
        let element = document.querySelectorAll(`${parentSelector} input`);

        document.querySelector(parentSelector).addEventListener("input", (e) => {
            switch (e.target.getAttribute("id")) {
                case "height":
                    height = +document.getElementById("height").value;
                    console.log(height);
                    break;
                case "weight":
                    weight = +document.getElementById("weight").value;
                    console.log(weight);
                    break;
                case "age":
                    age = +document.getElementById("age").value;
                    console.log(age);
                    break;
            }
            if (e.target.value.match(/\D/g)) {
                e.target.style.border = "1px solid red";
            } else {
                e.target.style.border = "none";
            }
            calcTotal();
        });

    }
    getStaticInf("#gender div", "calculating__choose-item_active");
    getStaticInf(".calculating__choose_big div", "calculating__choose-item_active");
    getDymnamicInf(".calculating__choose_medium");
    getStaticInfFromLocal("#gender div", "calculating__choose-item_active");
    getStaticInfFromLocal(".calculating__choose_big div", "calculating__choose-item_active");
    console.log(sex, height, weight, age, ratio);
}

module.exports = calc;

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((module) => {

function cards() {
    class Menufiller {
        constructor(title, desk, price, src, alt, parentSelector, ...classes) {
            this.title = title;
            this.desk = desk;
            this.price = price;
            this.src = src;
            this.classes = classes;
            this.alt = alt;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 28;
            this.changeToUan();

        }

        changeToUan() {
            this.price = this.price * this.transfer;
        }


        render() {
            let element = document.createElement("div");

            if (this.classes.length === 0) {
                element.classList.add("menu__item");
            } else {
                this.classes.forEach((value) => {
                    element.classList.add(value);
                });
            }

            this.classes.forEach((value) => {
                element.classList.add(value);
            });
            element.innerHTML = ` 
          
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desk}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
          `;

            this.parent.append(element);

        }

    }

    let getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url} , status ${res.status}`);
        }

        return await res.json();
    };

    axios.get("http://localhost:3000/menu")
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new Menufiller(title, descr, price, img, altimg, ".menu .container").render();
            });
        });
}

module.exports = cards;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((module) => {

function forms() {
    const form = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    form.forEach(item => {
        bindPostData(item);
    });

    let postData = async(url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            let json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            modalCloseFunc();
        }, 4000);
    }
    fetch("058db.json").
    then(data => data.json()).
    then(res => console.log(res)).
    catch(() => { console.log("Mistake"); });
}

module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
    let modals = document.querySelectorAll("[data-modal]"),
        modalWindow = document.querySelector("[data-modalWindow]");

    function openModal() {
        modalWindow.classList.add("show");
        modalWindow.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(timerInt2);
    }

    modals.forEach((item) => {
        item.addEventListener("click", openModal);
    });

    function modalCloseFunc() {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove("show");
        document.body.style.overflow = "";
    }

    modalWindow.addEventListener("click", (event) => {
        if (event.target === modalWindow || event.target.getAttribute("data-modalclose") == "") {
            modalCloseFunc();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.code == "Escape" && modalWindow.classList.contains("show")) {
            modalCloseFunc();
        }
    });

    let timerInt2 = setTimeout(openModal, 100000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);


    //back-end interaction
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
    let slides = document.querySelectorAll(".offer__slide"),
        slider = document.querySelector(".offer__slider"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        current = document.querySelector("#current"),
        total = document.querySelector("#total"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0,
        dots = [];

    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = "hidden";
    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach((item) => {
        item.style.width = width;
    });
    total.textContent = slides.length;

    slider.style.position = "relative";

    let indicators = document.createElement("ol");
    indicators.classList.add("carousel-indicators");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.classList.add("dot");
        indicators.append(dot);
        dots.push(dot);
        if (i === 0) {
            dot.style.opacity = "1";
        }
    }

    next.addEventListener("click", () => {
        if (offset == wC(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += wC(width);
        }
        slidesField.style.transform = `translateX(${-offset}px)`;
        if (slideIndex == slides.length) {
            slideIndex = 1;
            current.textContent = slideIndex;

        } else {
            slideIndex += 1;

            current.textContent = slideIndex;
        }
        dotsforEach();
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = wC(width) * (slides.length - 1);
        } else {
            offset -= wC(width);
        }
        slidesField.style.transform = `translateX(${-offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
            current.textContent = slideIndex;
        } else {
            slideIndex--;
            current.textContent = slideIndex;
        }
        dotsforEach();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            let slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideIndex - 1);
            slidesField.style.transform = `translateX(${-offset}px)`;
            dotsforEach();
            current.textContent = slideIndex;
        });
    });

    function dotsforEach() {
        dots.forEach(dot => {
            dot.style.opacity = ".5";
            dots[slideIndex - 1].style.opacity = "1";
        });
    }

    function wC(w) {
        return +w.replace(/\D/g, "");
    }

}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
    var tabsParent = document.querySelectorAll(".tabheader__items")[0],
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabs = document.querySelectorAll(".tabheader__item");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show");
        });
    }

    tabs.forEach(item => {
        item.classList.remove("tabheader__item_active");
    });

    function showTabContent(index = 0) {
        tabsContent[index].classList.add("show", "fade");
        tabsContent[index].classList.remove("hide");
        tabs[index].classList.add("tabheader__item_active");
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
    let days = document.querySelector("#days"),
        hours = document.querySelector("#hours"),
        minutes = document.querySelector("#minutes"),
        seconds = document.querySelector("#seconds");

    let deadline = "2021-08-27";

    function date(endline) {
        let t = Date.parse(endline) - Date.parse(new Date()),
            sec = Math.floor(t / 1000) % 60,
            min = Math.floor(t / 1000 / 60) % 60,
            hour = Math.floor(t / 1000 / 60 / 60) % 24,
            day = Math.floor(t / 1000 / 60 / 60 / 24);

        if (sec < 10) {
            sec = "0" + Math.floor(t / 1000) % 60;
        } else if (min < 10) {
            min = "0" + Math.floor(t / 1000 / 60) % 60;
        } else if (hours < 10) {
            hour = Math.floor(t / 1000 / 60 / 60);
        }

        return {
            "total": t,
            "seconds1": sec,
            "min": min,
            "hours": hour,
            "day": day
        };
    }

    function interval(endline) {

        let timerInt = setInterval(clock, 1000);

        function clock() {
            let t = date(endline);
            days.textContent = t.day;
            hours.textContent = t.hours;
            minutes.textContent = t.min;
            seconds.textContent = t.seconds1;

            if (t.total <= 0) {
                mins.textContent = "00";
                hours.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInt);
            }
        }
    }

    date(deadline);
    interval(deadline);
}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener("DOMContentLoaded", () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
        cards = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js"),
        calculator = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js"),
        forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

    tabs();
    modal();
    timer();
    cards();
    calculator();
    forms();
    slider();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map