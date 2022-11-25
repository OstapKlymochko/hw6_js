

// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
let arr = [1,55, -22, 2, 6, 0, -100, 256, 1024, -777, 342, 11, -4, 85, 5434, 654];
let sorted = arr.sort((a, b) => a - b);
console.log(sorted);
sorted = arr.sort((a, b) => b - a);
console.log(sorted);
console.log(arr.filter((val) => val% 3 === 0));
console.log(arr.filter((val) => val% 10 === 0));
arr.forEach((val) => val);
let newArr = arr.map((val) => val*3);
console.log(newArr);

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let strs = ['html', 'css', 'js', 'react', 'angular', 'php', 'python', 'java', 'c++', 'c', 'c#', 'assembler', 'fortran', 'basic', 'unix'];
console.log(strs.sort(function (a,b) {
    if(a === b){
        return 0;
    }
    return a < b ? -1 : 1;
}));
console.log(strs.sort(function (a,b) {
    if(a === b){
        return 0;
    }
    return a < b ? 1 : -1;
}));
console.log(strs.filter((val) => val.length < 4));
strs = strs.map((val) => val += '!')
console.log(strs)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users.sort(function (a, b) {
    return a.age - b.age;
}));
console.log(users.sort(function (a, b) {
    return b.age - a.age;
}));
console.log(users.sort(function (a, b) {
    return a.name.length - b.name.length;
}));
console.log(users.sort(function (a, b) {
    return b.name.length - a.name.length;
}))
let newUsers = [];
users.map((val, index) => newUsers.push({...val, id: Math.floor((Math.random() + index)* val.name.length)}));
console.log(newUsers);
newUsers = newUsers.sort(function (a,b){
    return a.id - b.id;
});
console.log(newUsers);


// -- наисать функцию калькулятора с 2мя числами и колбеком
function calc(operation, ...arr){
    return eval(arr.join(operation));
}

function calculator(a,b,operation, callback){
    return callback(operation,a, b);
}

console.log(calculator(2,3,'+', calc));

// -- наисать функцию калькулятора с 3мя числами и колбеком
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
   // {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
console.log(cars.filter((val) => val.volume === 2));
console.log(cars.filter((val) => val.producer === 'mercedes'));
console.log(cars.filter((val) => val.volume >=3 && val.producer === 'mercedes'));
console.log(cars.filter((val) => val.volume >=3 && val.producer === 'subaru'));
console.log(cars.filter((val) => val.power > 300));
console.log(cars.filter((val) => val.power > 300 && val.producer === 'subaru'));
console.log(cars.filter((val) => val.engine.includes('ej')));
console.log(cars.filter((val) => val.engine.includes('ej') && val.producer === 'subaru' && val.power > 300));
console.log(cars.filter((val) => val.volume <3 && val.producer === 'mercedes'));
console.log(cars.filter((val) => val.volume >2 && val.power > 250));
console.log(cars.filter((val) => val.producer === 'bmw' && val.power > 250));


// - взять слдующий массив
let usersWithAddress = [
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Topol\'na', number: 121}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Zelena', number: 2}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Horodotska', number: 1}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Naukova', number: 115}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Grinchenka', number: 90}},
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Chornovola', number: 16}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Pasichna', number: 16}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Lychakivska', number: 22}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}
];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный
console.log(usersWithAddress.sort(function (a, b){
    return a.id - b.id;
}));
console.log(usersWithAddress.sort(function (a, b){
    return b.id - a.id;
}));
console.log(usersWithAddress.sort(function (a, b){
    return a.age - b.age;
}));
console.log(usersWithAddress.sort(function (a, b){
    return b.age - a.age;
}));
console.log(usersWithAddress.sort(function (a, b) {
    if(a.name === b.name){
        return 0;
    }
    return a.name < b.name ? -1 : 1;
}));
console.log(usersWithAddress.sort(function (a, b) {
    if(a.name === b.name){
        return 0;
    }
    return a.name < b.name ? 1 : -1;
}));
console.log(usersWithAddress.sort(function (a, b) {
    if(a.address.street === b.address.street){
        return 0;
    }
    return a.address.street < b.address.street ? -1 : 1;
}));
console.log(usersWithAddress.sort(function (a, b) {
    return a.address.number - b.address.number
}));
usersWithAddress = usersWithAddress.filter((val) => val.address.number%2 === 0);
console.log(usersWithAddress)
usersWithAddress = usersWithAddress.filter((val) => val.age < 30);
console.log(usersWithAddress)
usersWithAddress = usersWithAddress.filter((val) => !val.status);
console.log(usersWithAddress)
usersWithAddress = usersWithAddress.filter((val) => val.age <30 && !val.status);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

cars = [
    {producer:"subaru",year: 2010,power: 400},
    {producer:"subaru",year: 2007,power: 250},
    {producer:"subaru",year: 2011,power: 300},
    {producer:"subaru",year: 1998,power: 140},
    {producer:"subaru",year: 2014,power: 200},
    {producer:"subaru",year: 2014,power: 165},
    {producer:"bmw",year: 2013, power: 120},
    {producer:"bmw",year: 2010, power: 120},
    {producer:"bmw",year: 2009, power: 350},
    {producer:"bmw",year: 2012, power: 180},
    {producer:"mercedes",year: 1990,power: 180},
    //{producer:"mercedes",year: 2017,power: 400},
    //{producer:"mercedes",year: 2017,power: 230}
];
cars.forEach(function (value, index) {
    value.price = value.year > 2005 ? value.power*15 : value.power*10;
    //let u = JSON.parse(JSON.stringify(users));
    value.driver = {name: users[index].name, age: users[index].age, experience: Math.floor(Math.random()* users[index].age*0.5)};
});

console.log(cars);
cars.forEach(function (value, index){
    if(index < Math.round(cars.length / 2)){
        value.power += Math.round(value.power*0.1);
        value.improved = true;
    }
    else{
        value.improved = false;
    }
});

console.log(cars);
newDrivers = []
cars.forEach(function (value){
    if(value.improved){
        value.driver = {name: users[Math.floor(Math.random()*(users.length - 1))].name,
            age: users[Math.floor(Math.random()*(users.length - 1))].age,
            experience: Math.floor(Math.random()* users[Math.floor(Math.random()*(users.length - 1))].age*0.5)
            };
    }
});

console.log(cars);
for (let i = 0; i < cars.length; i+=2) {
    cars[i].power += cars[i].power*0.1;
    cars[i].price += cars[i].price*0.05;
}
cars.forEach(function (value){
   if(value.experience < 5 && value.age >25){
       value.experience+=1;
   }
});
let sum =0;
for (let i = 0; i < cars.length; i++) {
    sum+= cars[i].price;
}
console.log(`Cars sum ${sum}$`);
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
let Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
function minMaxInd(key, arr){
    if(!arr.includes(key)){
        return -1;
    }
    return {minIndex: arr.indexOf(key), maxIndex: arr.length - arr.reverse().indexOf(key) - 1};
}

console.log(minMaxInd(4,Arr));