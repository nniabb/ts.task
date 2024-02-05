// I

interface Rectangle {
    width: number;
    height: number
}
const rectangle: Rectangle = { width: 5, height: 8 };

function calculateRectangleArea(rectangle: Rectangle) {
    return rectangle.width * rectangle.height;
}
const rectangleArea = calculateRectangleArea(rectangle);


function calculateRectanglePerimeter(rectangle:Rectangle) {
    return 2 * (rectangle.width + rectangle.height);
}
const rectanglePerimeter = calculateRectanglePerimeter(rectangle);

console.log(
    `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
);
  


interface Circle {
    radius: number;
}
const circle: Circle = { radius: 3 };

function calculateCircleArea(circle:Circle) {
    return Math.PI * Math.pow(circle.radius, 2);
}
const circleArea = calculateCircleArea(circle)
console.log(circleArea)


function calculateCirclePerimeter(circle:Circle) {
    return 2 * Math.PI * circle.radius;
}
const circlePerimeter = calculateCirclePerimeter(circle)
console.log(circlePerimeter)



function addNumbers(a:number, b:number) {
    return a + b;
}
const sumResult = addNumbers(5, 3)
console.log(`Sum: ${sumResult}`)



function multiplyNumbers(a:number, b:number) {
    return a * b;
}
const multiplicationResult = multiplyNumbers(4, 7)
console.log(`Multiplication: ${multiplicationResult}`);



function capitalizeString(str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const capitalizedString = capitalizeString("javascript is fun");
console.log(capitalizedString)



function filterEvenNumbers(numbers:number[]){
    return numbers.filter((num) => num % 2 === 0);
}

const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])
console.log(`Even Numbers: ${evenNumbers}`)



function findMax(numbers:number[]) {
    return Math.max(...numbers);
}
const maxNumber = findMax([23, 56, 12, 89, 43])
console.log(`Max Number: ${maxNumber}`)



function isPalindrome(str: string): boolean{
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama")
console.log(`Is Palindrome: ${isPalindromeResult}`)



function calculateFactorial(n:number):number{
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
}
const factorialResult = calculateFactorial(5)
console.log(`Factorial: ${factorialResult}`)






// II

class BankAccount {
    private accountNumber : string;
    private balance : number;
    private transactionHistory : string[];
    constructor(accountNumber: string, balance : number){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactionHistory = [];
    }
    getAccountInfo() : {accountNumber: string, balance : number}{
        return {
            accountNumber : this.accountNumber,
            balance : this.balance
        }
    }
    deposit(amount: number) : void {
        this.balance += amount;
    }
    withdrow(amount: number) : void {
        this.balance -= amount;
    }
    transferFunds(amount: number, anotherAccount: BankAccount): void{
        if(amount > this.balance){
            console.log("can not transfer")
        } else {
            this.balance -= amount;
            anotherAccount.deposit(amount)
        }
    }
    getTransactionHistory() :string[]{
        return this.transactionHistory
    }
    recordTransaction(transaction : string): void {
        this.transactionHistory.push(transaction)
    }
}

const bankAccount = new BankAccount("200200", 800)
const anotherAccount = new BankAccount("123123", 500)
console.log(bankAccount.getAccountInfo())
console.log(anotherAccount.getAccountInfo())

bankAccount.deposit(100)
console.log(bankAccount.getAccountInfo())

bankAccount.transferFunds(200, anotherAccount)
console.log(bankAccount.getAccountInfo())
console.log(anotherAccount.getAccountInfo()) 