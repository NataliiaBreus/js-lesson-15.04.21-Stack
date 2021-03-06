'use strict';
/*
// 4 Создать классы

class Book {
    constructor (author, name, year, publishingHouse) {
        this.author = author;
        this.name = name;
        this.year = year;
        this.publishingHouse = publishingHouse; 
    }
    set author (newAuthor){
        if (typeof newAuthor !== 'string'){
            throw new TypeError();
        }
        this._author = newAuthor;
    }
    get author() {
        return this._author;
    }
    set name (newName){
        if (typeof newName !== 'string'){
            throw new TypeError();
        }
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set year (newYear){
        if (typeof newYear !== 'number'){
            throw new TypeError();
        }
        this._year = newYear;
    }
    get year() {
        return this._year;
    }
    set publishingHouse (newPublishingHouse){
        if (typeof newPublishingHouse !== 'string'){
            throw new TypeError();
        }
        this._publishingHouse = newPublishingHouse;
    }
    get publishingHouse() {
        return this._publishingHouse;
    }
}
class ElectronicBook extends Book {
    constructor (author, name, year, publishingHouse, format, elNumber) {
        super (author, name, year, publishingHouse);

        this.format = format;
        this.elNumber = elNumber;
    }
    set format (newFormat){
        if (typeof newFormat !== 'string') {
            throw new TypeError();
        }
        this._format = newFormat;
    }
    get format(){
        return this._format;
    }

}
const b = new Book ('Mark Tven', 'Tom Soyer', 2019, 'Svet');
const elB = new ElectronicBook ('Pushkin', 'Evgeniy Onegin', 1995, 'Ranok', 'elBook', '12345');
console.log(b);
console.log (elB);

// 2 Реализовать с использованием классов. Для каждого поля создать get set с проверкой типов

class Student {
    constructor (name, surname, isMale, contactInfo, univerInfo) {
        this.name = name;
        this.surname = surname;
        this.isMale = isMale;
        this.contactInfo = contactInfo;
        this.univerInfo = univerInfo;
    }
    set name (newName){
        if (typeof newName !== 'string') {

            throw new TypeError();
        }
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set surname (newSurname){
        if (typeof newSurname !== 'string') {

            throw new TypeError();
        }
        this._surname = newSurname;
    }
    get surname() {
        return this._surname;
    }
    set isMale (newIsMale){
        if (typeof newIsMale !== 'boolean') {

            throw new TypeError();
        }
        this._isMale = newIsMale;
    }
    get isMale() {
        return this._isMale;
    }
    set contactInfo (newContactInfo){
        if (typeof newContactInfo !== 'string') {

            throw new TypeError();
        }
        this._contactInfo = newContactInfo;
    }
    get contactInfo() {
        return this._contactInfo;
    }

    get faculty() {
        return this._univerInfo.faculty;
    }
    get department () {
        return this._univerInfo.department;
    }
}

class UniverInfo {
    constructor (faculty, department) {
        this.faculty = faculty;
        this.department = department;
    }
    set faculty (newFaculty){
        if (typeof newFaculty !== 'string'){
            throw new TypeError();
        }
        this._faculty = newFaculty;
    }
    set department (newDepartment){
        if (typeof newDepartment !== 'string'){
            throw new TypeError();
        }
        this._departmnet = newDepartment;
    }
}
const ui = new UniverInfo ('management', 'Organization Management');

const stud1 = new Student ('Mark', 'Smith', true, 'contact info',ui);
const stud2 = new Student ('Alica', 'Ivanova', false, 'contacts', ui)

console.log (stud1);
console.log (stud2);
console.log (ui);

// 1 Вычислить сумму первых п элементов последовательности. Параметр N задает пользователь

let sumCounter = 0;
const number = +prompt ("Write a number:");
let sum = 0;

while(sumCounter < number) {
    sumCounter ++;
    sum += sumCounter;
}
console.log (sum);

*/

const mySymbol = Symbol('test');

const obj = {
    test: 'test',
    [mySymbol]: 5
};
const myMap = new Map();
myMap.set(1, {});
myMap.set('1', true);
myMap.set(obj, 'testValue');


console.log(myMap.get(1));

const vocabulary = new Map();
vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');
vocabulary.set('table', 'стол');
vocabulary.set('screen', 'экран');
vocabulary.set('structure', 'структура');
vocabulary.set('algorithm', 'алгоритм');
vocabulary.set('count', 'считать');
vocabulary.set('set', 'установить');
vocabulary.set('kernel', 'ядро');
vocabulary.set('queue', 'очередь');

const inputStr = 
"Cat count Dog set queue Kernel algOrithm strUcTure TABLE";

const translate = (str) => {
    return str
    .trim()
    .toLowerCase()
    .split (" ")
    .map ((word) =>{
        return vocabulary.has(word) ? vocabulary.get(word) : word;
    })
    .join(" ");
};
console.log(translate(inputStr));

// Есть 2 объекта с пользователями и 2 массива с их сообщениями. 1)объединить пользователей и их сообщения.

 const user1 = {
     id:1,
     name: 'John',
     age: 18,
 };
 const user2 = {
     id: 2,
     name: 'Jane',
     age: 24,
 };

 const johnMsgs = ['1234', 'egfewhgf', 'gefwegyuiyweiu'];
const janeMsgs = ['fhhfk', 'hfuwyfi7yo', 'gfuywegfk', 'wjhgfjm'];

 const usersMap = new Map();
 usersMap.set(user1.id, johnMsgs);
 usersMap.set (user2.id. janeMsgs);

const getUserMsgs = (userId) => {
    return usersMap.get(userId);
}
