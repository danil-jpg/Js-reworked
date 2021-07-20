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