class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    say() {
        console.log(`Имя пользователя ; ${this._name} , возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof(age === "number") && age < 110 && age > 0) {
            this._age = age;
        } else {
            console.log("Проверка не пройдена");
        }
    }

    get name() {
        return this._name;
    }
    set name(name) {
        if ((/\d/g).test(name) === false && typeof(name === "string") && name.length > 2) {
            this._name = name;
        } else {
            console.log(1);
        }
    }
}
let ivan = new User("ivan", 28);
console.log(ivan._name);
ivan.name = "illya";
console.log(ivan._name);
// let patt = /\w/g;
// console.log(patt.test("1111dd"));

// проверку на числа сделать н могу