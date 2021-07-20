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

//  timer

let deadLine = "2021-04-27";

function timerBody(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000) % 60,
        mins = Math.floor(t / 1000 / 60) % 60,
        hours = Math.floor(t / 1000 / 60 / 60);
    if (seconds < 10) {
        seconds = "0" + Math.floor(t / 1000) % 60;
    } else if (mins < 10) {
        mins = "0" + Math.floor(t / 1000 / 60) % 60;
    } else if (hours < 10) {
        hours = Math.floor(t / 1000 / 60 / 60);
    }
    return {
        "total": t,
        "seconds": seconds,
        "mins": mins,
        "hours": hours
    };
};

function clockUpdate(endTime, id) {
    let timer = document.getElementById(id),
        seconds = timer.querySelector(".seconds"),
        mins = timer.querySelector(".minutes"),
        hours = timer.querySelector(".hours"),
        timeInt = setInterval(clock, 1000);


    function clock() {
        let t = timerBody(endTime);
        mins.textContent = t.mins;
        hours.textContent = t.hours;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            mins.textContent = "00";
            hours.textContent = "00";
            seconds.textContent = "00";
            clearInterval(timeInt)
        }
    };
};

timerBody(deadLine);
clockUpdate(deadLine, "timer");