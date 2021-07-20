let checkbox = document.querySelector("[type='checkbox']"),
    form = document.querySelector("form"),
    change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg")) {
    form.style.backgroundColor = "yellow";
}

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
    if (localStorage.getItem("bg")) {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "yellow";
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "black";
    }
});

let persone = {
    name: "Ivan",
    age: 22
};

let jsonPersone = JSON.stringify(persone);

localStorage.setItem("alec", jsonPersone);