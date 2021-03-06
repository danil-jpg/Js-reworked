window.addEventListener("DOMContentLoaded", function() {

    'use strict';

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelectorAll(".info-header")[0],
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    };

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    };

    info.addEventListener("click", function(event) {
        if (event.target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);

                }
            };
        }
    });

});