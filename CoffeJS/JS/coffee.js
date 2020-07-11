// Автомат гарячих напоїв. 
// Створити ієрархію класів для подання гарячих напоїв Автомату(кава, чай, капучіно та ін.)
// Створити програму для роботи Автомату у  режимах адмін та користувач
// У режимі адміна передбачити 	
// 	Завантаження автомату водою, кава, чай, цукор(адмін)
// 	Вивід статистики наявності складових для приготування напоїв(адмін)	
// 	Зміна цін на напої(адмін)
// 	Вилучення кешу
// У режимі користувача передбачити 		
// Замовлення напою(+ оплата)	

class Drink {
    constructor(name, shugar, clas = "drinks", tag = 'div') {
        this.element = document.createElement(tag);
        this.element.classList.add(clas);
        this.name = name;
        this.shugar = shugar
    }

    append() {
        document.querySelector(".container").append(this.element);
    }

    light(){
        this.element.style.backgroundColor = "lightgray"
    }

    dark(){
        this.element.style.backgroundColor = "lightslategray"
    }
}

class Coffe extends Drink {
    constructor(name, shugar, clas, tag, milk) {
        super(name, shugar, clas, tag);
        this.milk = milk;
    }
    create() {
        let name = document.createElement('h2');
        name.innerText = this.name;
        this.element.append(name);
        this.append();
        return this;
    }
}

class Tea extends Drink {
    constructor(name, shugar, clas, tag, color) {
        super(name, shugar, clas, tag);
        this.color = color;
    }
    create() {
        let name = document.createElement('h2');
        name.innerText = this.name;
        this.element.append(name);
        this.append();
        return this;
    }
}

class Display{
    constructor(name)
    {
        this.name = name;
    }
}

let drinks = [new Coffe('Latte', '0').create(),
new Tea('Tea', '0').create(),
new Coffe('Coffee', '0').create(),
new Coffe('Capuccino', '0').create()]


drinks.forEach(elem => {
    console.log(elem);
    elem.element.addEventListener("mouseover", () =>{
        elem.light();
    })

    elem.element.addEventListener("mouseout", () =>{
        elem.dark();
    })

    elem.element.addEventListener('click', makeDrink)
});

function makeDrink(){
    console.log(this);

    this.querySelector("h2").innerText;

}