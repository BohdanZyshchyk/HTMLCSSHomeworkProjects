class Dog {
    constructor(name, bread, age, energy) {
        this.name = name;
        this.bread = bread;
        this.age = age;
        this.energy = energy;
    }
    ShowDog() {
        console.log(`Name: ${this.name} \n Breed: ${this.bread} \n Age: ${this.age} \n Energy: ${this.energy}`);
    }

    SetName(name) {
        if (name === this.name)
            console.log("Same name");
        else
            this.name = name;
    }
    GetBreead() {
        return this.bread;
    }

    DogPlay(energy) {
        console.log("Dog is playing...")
        this.energy -= energy;
        if (this.energy <= 0)
            this.DogDie();
    }

    DogDie() {
        console.log(`${this.name} dead`);
    }


    DogSleep() {
        console.log("Dog is sleeping...")
        setTimeout(() => this.energy += 25, 2000);
    }

    DogEat(eat) {
        console.log("Dog is eating...")
        this.energy += eat;
        console.log(this.energy);
        if (this.energy > 100)
            this.DogDie();
    }
}


let goodboi = new Dog('GoodBoi', 'korgi', '2', '100');


goodboi.ShowDog();
goodboi.SetName("Barsik")
goodboi.ShowDog();
goodboi.DogPlay(50);
goodboi.DogPlay(40);
goodboi.DogSleep();
setTimeout(() => goodboi.DogEat(25), 2500);

class HunterDog extends Dog {
    constructor(name, bread, age, energy, power) {
        super(name, bread, age, energy)
        this.power = power;
    }
    ShowDog() {
        console.log(`Name: ${this.name} \n Breed: ${this.bread} \n Age: ${this.age} \n Energy: ${this.energy} \n Power: ${this.power}`);
    }
    Hunt() {
        this.energy -= 20;
        console.log("Dog hunts");
    }
}

let rex = new HunterDog("rex", "ukrainian fast", 5, 90, 50);

rex.ShowDog();
rex.Hunt();
rex.ShowDog()

console.dir(rex);

class Figure {
    constructor(tag = 'div') {
        this.element = document.createElement(tag);
        this.element.style.marginBottom = '20px';
    }

    append(){
        document.body.append(this.element);
    }

    hide(){
        this.element.style.opacity = '0'
    }

    show(){
        this.element.style.opacity = '1'
    }


}

class Square extends Figure {
    constructor(color, width = 140, tag) {
        super(tag);
        this.color = color;
        this.width = width;
    }

    create() {
        this.element.style.background = this.color;
        this.element.style.width = this.element.style.height = this.width+'px';
        this.append();
        return this;
    }
}


class Circle extends Square {
    constructor(color, width, radius, tag) {
        super(color, width, tag)
        this.borderRadius = radius;
    }

    create() {
        this.element.style.background = this.color;
        this.element.style.width = this.element.style.height = this.width+'px';
        this.element.style.borderRadius = this.borderRadius + '%';
        this.append();
        return this;
    }
}

let box = new Square('pink', 200).create();
let box2 = new Square('olive').create();
let circle = new Circle('green', 200, 50).create();

circle.element.addEventListener("mouseenter", ()=>{
    circle.hide();
})

circle.element.addEventListener("mouseout", ()=>{
    circle.show();
})