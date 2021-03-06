window.addEventListener("DOMContentLoaded", () => {

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

    //Modal

    let modals = document.querySelectorAll("[data-modal]"),
        modalWindow = document.querySelector("[data-modalWindow]"),
        modalClose = document.querySelector("[data-modalCLose]"),
        modalArea = document.querySelector(".modal__content");

    function openModal() {
        modalWindow.classList.toggle("show");
        document.body.style.overflow = "hidden";
        clearInterval(openModal);
    }


    modals.forEach((item) => {
        item.addEventListener("click", openModal);
    });

    function modalCloseFunc() {
        modalWindow.classList.toggle("show");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", () => {
        modalCloseFunc();
    });


    modalWindow.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target == modalWindow) {
            modalCloseFunc();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.code == "Escape" && modalWindow.classList.contains("show")) {
            modalCloseFunc();
        }
    });

    // setTimeout(openModal, 6000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
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
                        <div class="menu__item-cost">????????:</div>
                        <div class="menu__item-total"><span>${this.price}</span> ??????/????????</div>
                    </div>
          `;

            this.parent.append(element);

        }

    }

    // "img/tabs/vegy.jpg",

    let firstM = new Menufiller(
        '???????? "????????????"',
        "???????? '????????????' - ?????? ?????????? ???????????? ?? ?????????????????????????? ????????: ???????????? ???????????? ???????????? ?? ??????????????. ?????????????? ???????????????? ?? ???????????????? ??????????. ?????? ?????????????????? ?????????? ?????????????? ?? ?????????????????????? ?????????? ?? ?????????????? ??????????????????!",
        9,
        "img/tabs/vegy.jpg",
        "vegy",
        ".menu .container",
        "menu__item"

    );
    firstM.render();

    secondM = new Menufiller(
        '???????? "??????????????"',
        "?? ???????? ???????????????????? ???? ???????????????????? ???? ???????????? ???????????????? ???????????? ????????????????, ???? ?? ???????????????????????? ???????????????????? ????????. ?????????????? ????????, ????????????????????????, ???????????? - ?????????????????????? ???????? ?????? ???????????? ?? ????????????????!",
        20,
        "img/tabs/elite.jpg",
        "elite",
        ".menu .container",
        "menu__item"
    );
    secondM.render();

    third = new Menufiller(
        "???????? '??????????????'",
        "???????? '??????????????' - ?????? ???????????????????? ???????????? ????????????????????????: ???????????? ???????????????????? ?????????????????? ?????????????????? ??????????????????????????, ???????????? ???? ??????????????, ????????, ???????????? ?????? ????????????, ???????????????????? ???????????????????? ???????????? ???? ???????? ???????? ?? ?????????????????? ???????????????????????????? ??????????????.",
        14,
        "img/tabs/post.jpg",
        "post",
        ".menu .container",
        "menu__item"
    );

    third.render();

    //back-end interaction



    let form = document.querySelectorAll("form"),
        messagesCatalog = {
            loading: "????????????????...",
            sucsess: "??????????",
            failure: "????????????"
        };

    form.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let loadDiv = document.createElement("div");
            loadDiv.classList.add("status");
            loadDiv.textContent = messagesCatalog.loading;
            form.appendChild(loadDiv);

            let request = new XMLHttpRequest();
            request.open("POST", "server.php");
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");
            let formData = new FormData(form);
            let object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            let json = JSON.stringify(object);
            request.send(json);

            request.addEventListener("load", () => {
                if (request.status === 200) {
                    console.log(request.response);
                    loadDiv.textContent = messagesCatalog.sucsess;
                    form.reset();
                    setTimeout(() => {
                        loadDiv.remove();
                    }, 2000);

                } else {
                    loadDiv.textContent = messagesCatalog.failure;
                }
            });
        });
    }
});