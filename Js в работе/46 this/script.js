 "use strict";

 //  function showThis() {
 //      let a = "test"
 //      console.log(this.a)
 //  };

 //  showThis();

 //Правило первое контекст вызова this без строгого режима Window,
 // со строгим режимом  андефайнд

 //  let obj = {
 //      a: 20,
 //      b: 23,
 //      sum: function() {
 //          console.log(this)
 //      }
 //  };

 //  obj.sum();

 //Контекст вызова у методов обьекта - объект

 // function User(name, id) {
 //     this.name = name;
 //     this.id = id;
 //     this.human = true;
 //     console.log(this);
 //     this.hello = function() {
 //         console.log(`hello!${this.name} `);
 //     }
 // };

 // let danil = new User("danil", 43);

 // danil.hello();

 //this в конструкторах и классах - новый екземпляр объекта

 function sayName() {
     console.log(this);

 };

 sayName();

 let user = {
     name: "john"
 };

 sayName.call(user, "paremetrs");
 sayName.apply(user, ["paremetrs"]);

 //  function count(num) {
 //      //  return this * num;
 //      console.log(this * num)
 //  }

 //  let double = count.bind(2);
 //  console.log(double(13));

 //  let btn = document.querySelector("button");

 //  btn.addEventListener("click", function() {
 //      this.style.backgroundColor = "red";
 //  })

 let obj = {
     name: "jlh",
     age: 12,
     isHuman: true,
     sayT: function() {
         let say = () => {
             console.log(this.name)
         }
         say();
     }
 }


 obj.sayT()