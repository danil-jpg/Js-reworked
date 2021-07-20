function Car(id, name) {
    this.name = name;
    this.id = id;
    this.isACar = true;
    this.sound = function() {
        console.log(`Vrum-vrum ${this.name}`);
    }
};

Car.prototype.exit = function() {
    console.log(this.name + " ride away!")
}

const lada = new Car(22, "lada"),
    lanos = new Car(23, "lanos");

lada.exit();

lada.sound();

console.log(lada)