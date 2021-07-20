import $ from "jquery";
import { eq } from "lodash";

// const btn = $("#btn");

// console.log(btn);

$(function() {
    $(".list-item:first").mouseenter(function() {
        $(this).toggleClass("active");
    });
    $(".list-item").eq(2).on("click", () => {
        $(".image:even").fadeToggle("slow");
    });
    $(".list-item").eq(4).on("click", () => {
        $(".image:odd").animate({
            opacity: "toggle",
            height: "toggle"
        }, 3000);
    });

});

//this будет работать также как и e ,то есть к самому элемениу на ,котором произошло событие