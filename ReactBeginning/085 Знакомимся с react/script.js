// // console.log(a);

// // let a = 0;

// function max(a, b, ...rest) {
//     console.log(rest)
// }

// max(1, 2, 3, 4, 12, 3245)

// const arr = [1, 4, 5],
//     arr1 = [22, 33, 55]

// let res = Math.max(...arr, ...arr1);

// console.log(res);
// const avatar = "photo"
// const user = {
//     name: {
//         name: "frank",
//         surname: "callson"
//     },
//     pass: "1234567",
//     admin: false,
//     right: "full"
// }
// const admin1 = {
//     name: "admin",
//     pass: "root",
//     admin1: true
// }

// const { name: { name, surname }, pass, admin, right } = user;
// console.log(name, surname, pass, admin, right)

// // const res = Object.assign({}, user, admin);
// const res = {...user, ...admin, avatar }
// console.log(res);
// console.log(user)

// const ab = "ab";
// const y = 22;
// const obj = {
//     ab,
//     y
// }
// console.log(obj)

// const x = 10,
//     y = 22;

// const obj = {
//     x,
//     y,
//     calcSquare: function() {
//         console.log(this.x * this.y)
//     }
// }

// obj.calcSquare();

// const obj1 = {
//     x,
//     y,
//     calcSquare() {
//         console.log(this.x * this.y);
//     }
// }

// obj1.calcSquare();

// function connect({
//     host = "localhost",
//     port = 3000,
//     user = "default"
// } = {}) {
//     console.log(`host: ${host},port: ${port},user: ${user}`)
// }

// connect({

//     port: 234234,
// })

const population = {
    country: "England",
    id: 22,
    inhabitance: {
        gender: {
            male: ["15%", '44%', '22%', '44%'],
            female: ["22%", "23%"]
        }
    }
}

const { inhabitance: { gender: { male: [maleUnder168, maleMore16] } } } = population;

console.log(maleUnder168);

// var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// var employersNames = [];
// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (var i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }

// var sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };

// function calcCash(own) {
//     own = own || 0;
//     var everyCash = Array.prototype.slice.call(arguments);
//     var total = own;
//     for (var i = 0; i < everyCash[1].length; i++) {
//         total += +everyCash[1][i];
//     }
//     return total;
// }

// var money = calcCash(null, sponsors.cash);

// function makeBusiness(owner, director, cash, emp) {
//     director = director || 'Victor';
//     var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
//     console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
//     emp);
//     console.log('And we have a sponsors: ');
//     console.log.apply(null, sumSponsors);
//     console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
// }
// makeBusiness.apply(null, ['Sam', null, money, employersNames]);