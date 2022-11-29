// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
//     const card3 = userCard(3); // returns an object with methods
// User Card методи:
//     getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
// карту:
//     card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
//     • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
//     card3.putCredits(150);
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
// баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
// перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
// відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
// як ліміт транзакцій на картці
// card3.setTransactionLimit(5000);
// transferCredits.
//     Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
//     та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
// card3.transferCredits(50, card1);
// Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// транзакцій відправника кредитів (card3).
//     Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
// change операції і зберігайте history log. History log (Дивитись зображення 1)
// інформація має зберігатись в об’єктах з такими властивостями:
//     • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
// Зображення 1 — Приклад виклику функції
// getCardOptions

function userCard(num){
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: num
    }
    return{
        getCardOptions(){
            return{...card};
        },
        putCredits(val){

            card.balance += val;
            let d = new Date();
            card.historyLogs.push({operationType:'Receiveng credits', credits:val,
            operationTime:`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`});
        },
        takeCredits(val){
            if(card.balance >= val && val<=card.transactionLimit)
            {
                card.balance -= val;
                let d = new Date();
                card.historyLogs.push({operationType:'Withdrawal of credits', credits:val,
                    operationTime:`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`});
            }
            else{
                console.log('You can not withdraw so much credits!')
            }
        },
        setTransactionLimit(val){
            card.transactionLimit = val;
            let d = new Date();
            card.historyLogs.push({operationType:'Changing Transactions limit', credits:val,
                operationTime:`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`});
        },
        tranferCredits(val, obj) {
            if (card.balance >= val && val <= card.transactionLimit) {
                this.takeCredits(val + 0.005*val);
                obj.putCredits(val);

            }
            else{
                console.log('You can\'t transfer so much!');
            }
        }
    }
}

let card1 = userCard(1);
let card2 = userCard(2);
card1.putCredits(50);
card1.takeCredits(10);
card1.setTransactionLimit(150);
console.log(card1.getCardOptions());
card1.tranferCredits(20, card2);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

