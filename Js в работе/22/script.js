// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// };

// let Ivan = new User("ivan", 23),
//     Vladislove = new User("vlad", 44);

// console.log(Ivan);
// console.log(Vladislove);

function smth(a, b) {

    function sum() {
        console.log(this);
        return a + b;
    };
}

smth(8, 10);