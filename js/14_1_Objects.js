/* JavaScript обладает набором встроенных классов и функций,
что можно использовать из «коробки».
Мы научимся работать с датой и рассмотрим методы для работы с массивами.
Дополнительно мы научимся создавать свои собственные классы в Js.

Работа с датой
Для работы с датой и временем в JavaScript есть предусмотренный класс Date. 
Сперва необходимо создать объект на основе класса.
Для этого пропишите следующую конструкцию: 
var time_date = new Date();
Далее через объект time_date вы можете обращаться ко всем методам класса Date
и получать все значения связанные с датой и временем.

Работа со строками
Каждая строка представляет из себя массив символов.
По этой причине можно работать с любой строкой как с обычным массивом. 
Пример вывода элемента из строки: 
var string = "Строка";
console.log(string[0]); // Выведет символ "C"
console.log(string[3] + string[1]); // Выведет символы "от" (4 и 2 символ)
Также мы можем искать символы в строке или же возводить все символы
в верхний (toUpperCase) или нижний регистр (toLowerCase).

Классы и объекты. Понятие ООП
На начальном этапе ООП – это тёмный лес, в котором многое непонятно и слишком усложнено.
На самом деле всё вовсе не так.
Предлагаем абстрагироваться от специфических (непонятных) определений
и познакомиться с ООП простыми словами. 

Поскольку на примере все усвоить гораздо проще,
то давайте за пример возьмем робота,
которого постараемся описать за счёт классов в ООП.

Класс в случае с роботом – это его чертёж.
Экземпляром класса (объектом) называет целый робот, который создан точно по чертежу.

Наследование – это добавление полезных опций к чертежу робота.
К примеру, берем стандартный чертёж робота и дорисуем к нему лазеры,
крылья и броню. Все эти дорисовки мы сделаем в классе наследнике,
основной функционал которого взят из родительского класса.

Полиморфизм – это общий функционал для всех роботов
и не важно что каждый робот может очень сильно отличаться друг от друга.
К примеру, в главном классе мы указываем возможность передвижения
для всех последующих роботов. Далее в классе наследнике мы можем
дополнительно указать возможность левитации для робота,
в другом же классе укажем возможность передвижения по воде и так далее.
Получается, что есть общий функционал что записан в главном чертеже,
но его можно переписать для каждого последующего робота (для каждого наследника).

А инкапсуляция является для нас бронёй, защищающей робота.
Под пластырем брони находятся уязвимые элементы, вроде проводов и микросхем.
После прикрытия брешей с помощью брони, робот полностью защищён от внешних вмешательств.
По сути, мы делаем доступ ко всем полям лишь за счёт методов,
тем самым прямой доступ к полю будет закрыт.

У всех классов методы могут отличаться, как и поля с конструкторами. 
Каждый класс позволяет создавать любое количество разных объектов,
все из них имеют собственные характеристики. */

var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth()); // январь - месяц 0 как в массивах - будет 11 если декабрь
console.log(date.getMonth() + 1); // будет текущий месяц
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log("Время" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

date.setHours(23);
date.setMinutes(23);
console.log("Время" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

// Массивы
var arr = [5, 7, 8, 9];
console.log(arr.length);
console.log(arr.join(", ")); // получается строка
console.log(arr.join("|||"));
var arr1 = [8, 90, 5, 7, 0, 8, 9];
console.log(arr1.sort());
console.log(arr1.reverse()); наоборот
var str = console.log(arr.reverse().join("; "));
console.log(str.split("; "));

// Классы
class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }   

    info() {
        console.log("Человек: " + this.name + ". Возраст: " + this.age);
    }
}

var alex = new Person('Alex', 45, true); // выдяляем память под объект
var bob = new Person("Bob", 25, false);
console.log(alex.name);
console.log(alex.age);
console.log(alex.happiness);
console.log(bob.name);

alex.info();
bob.info();

/* In JavaScript, a class is a blueprint for creating objects
with predefined properties and methods.
The class syntax was introduced in ECMAScript 2015 (ES6)
and provides a more straightforward and readable way to create
objects and handle inheritance.
Here is a basic example of how a JavaScript class looks: */

class Human {
    // Constructor method for initializing new instances
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Static method (not available on instances)
    static info() {
        return 'This is a Human class';
    }
}

// Creating an instance of the Person class
const human1 = new Human('Alice', 30);

// Accessing properties and methods
console.log(human1.name);  // Output: Alice
console.log(human1.age);   // Output: 30
console.log(human1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// Calling a static method
console.log(Human.info()); // Output: This is a Human class

/* JavaScript classes also support inheritance using the extends keyword.
Here is an example of how to create a subclass: */

class Employee extends Human {
    constructor(name, age, jobTitle) {
        // Call the parent class constructor
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method specific to Employee class
    work() {
        return `${this.name} is working as a ${this.jobTitle}.`;
    }
}

// Creating an instance of the Employee class
const employee1 = new Employee('Bob', 25, 'Software Engineer');

// Accessing inherited and own properties/methods
console.log(employee1.name);      // Output: Bob
console.log(employee1.age);       // Output: 25
console.log(employee1.jobTitle);  // Output: Software Engineer
console.log(employee1.greet());   // Output: Hello, my name is Bob and I am 25 years old.
console.log(employee1.work());    // Output: Bob is working as a Software Engineer.

/* In modern JavaScript (ES2020 and later), you can define private fields and methods
using the # prefix, making them inaccessible from outside the class: */
class PersonNew {
    // Private field
    #ssn;

    constructor(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.#ssn = ssn;
    }

    // Private method
    #getSSN() {
        return this.#ssn;
    }

    // Public method
    showSSN() {
        return `SSN: ${this.#getSSN()}`;
    }
}

const myPerson = new PersonNew('Charlie', 40, '123-45-6789');

// Trying to access private fields/methods directly will result in an error
console.log(myPerson.#ssn);     // SyntaxError
console.log(myPerson.#getSSN);  // SyntaxError

// Accessing via public method
console.log(myPerson.showSSN()); // Output: SSN: 123-45-6789

