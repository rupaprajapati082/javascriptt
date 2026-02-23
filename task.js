// MAPS EXAMPLE
// ------------------------------------------1. Double daily steps count------------------------------------------------
const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);
console.log(newSteps);
// Output: [2000, 4000, 6000]
// ------------------------------------------2. Convert minutes to seconds------------------------------------------------

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds);
// Output: [60, 300, 600]
// -----------------------------------------3. Add ₹50 delivery charge to prices------------------------------------------------

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);
console.log(finalPrices);
// Output: [250, 400, 550]
// -----------------------------------------4. Convert exam marks to grades------------------------------------------------

const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = marks.map(getGrade);
console.log(grades);
// Output: ['Fail', 'Pass', 'Pass', 'Pass']
// ------------------------------------------5. Capitalize names------------------------------------------------

const names = ['rups', 'laxmi', 'mahek'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);console.log(formattedNames);
// Output: ['Rahul', 'Neha', 'Amit']
// -----------------------------------------6. Apply 10% discount------------------------------------------------

const price = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);
console.log(discounted);
// Output: [450, 900, 1350]
// ------------------------------------------7. Add bonus points to scores based on condition------------------------------------------------

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});

console.log(finalScores); 
// Output: [45, 70, 105]
// ------------------------------------------8. Convert temperatures with formula-----------------------------------------------


const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit);
// Output: [32, 68, 86]
// ------------------------------------------9. Generate table of numbers------------------------------------------------

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo);
// Output: [2, 4, 6, 8]
// ------------------------------------------10. Combine map with string formatting------------------------------------------------

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
console.log(messages);
// Output:
// [
//   'Your balance is ₹500',
//   'Your balance is ₹1200',
//   'Your balance is ₹300'
// ]

// FILTER EXAMPLE
// =======================
// JAVASCRIPT FILTER EXAMPLES
// =======================

// 1. Get even numbers
// Real life: Find even roll numbers
const numberss = [1, 2, 3, 4, 5, 6];
const evenNumbers = numberss.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// --------------------------------------------------

// 2. Filter adults
// Real life: Allow only 18+ users
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
console.log(adults); // []

// --------------------------------------------------

// 3. Remove empty items
// Real life: Clean user input
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
console.log(validInputs); // ['Hello', 'World', 'JS']

// --------------------------------------------------

// 4. Filter passing marks
// Real life: Exam result system
const markss = [35, 72, 88, 40, 25];
const passedStudents = markss.filter(mark => mark >= 40);
console.log(passedStudents); // [72, 88, 40]

// --------------------------------------------------

// 5. Get affordable prices
// Real life: Shopping app price filter
const pricess = [199, 499, 999, 1499, 299];
const affordable = pricess.filter(price => price <= 500);
console.log(affordable); // [199, 499, 299]

// --------------------------------------------------

// 6. Filter long words
// Real life: Search keyword validation
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
console.log(longWords); // ['hello', 'javascript']

// --------------------------------------------------

// 7. Filter positive numbers
// Real life: Bank transaction validation
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
console.log(credits); // [200, 500, 300]

// --------------------------------------------------

// 8. Filter numbers within a range
// Real life: Score selection
const score = [45, 60, 85, 30, 90];
const selectedScores = scores.filter(score => score >= 50 && score <= 90);
console.log(selectedScores); // [60, 85, 90]

// =======================
// JAVASCRIPT REDUCE EXAMPLES
// =======================

// 1. Total money in wallet
// Real life: Add all cash amounts
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log('Total money:', totalMoney); // 350

// --------------------------------------------------

// 2. Total steps walked in a week
// Real life: Fitness tracker
const steps1 = [3000, 5000, 4000, 6000];
// function addSteps(total, step) {
//   return total + step;
// }
const total_steps=steps1.reduce((ru,ps)=>ru+ps,0);
// const weeklySteps = steps.reduce(addSteps, 0);
console.log('Weekly steps:', total_steps); // 18000

// --------------------------------------------------

// 3. Find total cart price
// Real life: Shopping bill
const prices1 = [499, 299, 199];
const totalPrice = prices1.reduce((total, price) => total + price, 0);
console.log('Total cart price:', totalPrice); // 997

// --------------------------------------------------

// 4. Find maximum score
// Real life: Highest exam mark
const marks1 = [45, 88, 67, 92];
const highest = marks1.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log('Highest score:', highest); // 92

// --------------------------------------------------

// 5. Count total characters
// Real life: Text length calculation
const word = ['Hi', 'Hello', 'JS'];
const totalChars = word.reduce((count, word) => count + word.length, 0);
console.log('Total characters:', totalChars); // 9

// --------------------------------------------------

// 6. Combine words into a sentence
// Real life: Message builder
const wordsSentence = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = wordsSentence.reduce((text, word) => text + ' ' + word);
console.log('Sentence:', sentence); // "Learning JavaScript is fun"

// --------------------------------------------------

// 7. Count passed students
// Real life: Result summary
const examMarks = [35, 72, 88, 40, 25];
const passCount = examMarks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);
console.log('Passed students:', passCount); // 3

// --------------------------------------------------

// 8. Calculate final balance
// Real life: Bank account calculation
const transaction = [1000, -200, -300, 500];
const finalBalance = transaction.reduce((balance, amount) => balance + amount, 0);
console.log('Final balance:', finalBalance); // 1000

// --------------------------------------------------

// 9. Build comma-separated string
// Real life: Display values in UI
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
console.log('Comma-separated items:', result); // "Pen, Book, Pencil"

// =========================================================================
// MAP + FILTER + REDUCE PRACTICE
// ==========================================================================

// Q1. Shopping App – Discounted Total
const prices3 = [200, 800, 1200, 450, 700];
const total1 = prices3
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);
console.log('Q1 - Total to pay:', total1); // 2430

// --------------------------------------------------

// Q2. Fitness App – Total Active Minutes
const minute = [20, 45, 60, 15, 90];
const totalCalories = minute
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
console.log('Q2 - Total calories burned:', totalCalories); // 975

// --------------------------------------------------

// Q3. Exam System – Average of Passed Marks
const marks3 = [35, 72, 88, 40, 25, 90];
const passed = marks3.filter(mark => mark >= 40);
const averagePassed = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
console.log('Q3 - Average of passed marks:', averagePassed); // 72.5

// --------------------------------------------------

// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
console.log('Q4 - Total payout:', totalPayout); // 2600

// --------------------------------------------------

// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total points:', totalPoints); // 450

// --------------------------------------------------

// Q6. Bank Transactions – Final Balance
const transactions1 = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions1
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
console.log('Q6 - Final credited amount:', creditedAmount); // 4590

// --------------------------------------------------

// Q7. Game App – Final Score
const scores1 = [30, 60, 90, 45, 80];
const finalScore = scores1
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);
console.log('Q7 - Final score:', finalScore); // 250

// --------------------------------------------------

// Q8. E-commerce – Total Taxed Amount
const prices2 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices2
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);
console.log('Q8 - Final payable amount:', finalAmount); // 6746

// --------------------------------------------------

// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const rewardPoints = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
console.log('Q9 - Total reward points:', rewardPoints); // 270

// --------------------------------------------------

// Q10. Interview Brain Teaser ⭐
const numbers1 = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers1
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log('Q10 - Sum of squares of even numbers:', sumOfSquares); // 56

// ===============================
// MAP + FILTER + REDUCE – 20 PRACTICE
// ===============================

// Q1. Grocery Store – Total Cost
const prices4 = [50, 120, 300, 80, 200];
const totalCost = prices4
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((sum, p) => sum + p, 0);
console.log('Q1 - Total cost:', totalCost); // 735

// --------------------------------------------------

// Q2. Fitness App – Weekly Calories
const minutes2 = [10, 25, 40, 15, 60];
const totalCalories2 = minutes2
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);
console.log('Q2 - Total calories:', totalCalories2); // 520

// --------------------------------------------------

// Q3. Exam Results – Total Passed Marks
const marks4 = [35, 55, 80, 20, 45];
const totalPassedMarks = marks4
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);
console.log('Q3 - Total passed marks:', totalPassedMarks); // 180

// --------------------------------------------------

// Q4. Bank App – Total Credits
const transactions4 = [500, -200, 1000, -300, 700];
const totalCredits = transactions4
  .filter(t => t > 0)
  .reduce((sum, t) => sum + t, 0);
console.log('Q4 - Total credits:', totalCredits); // 2200

// --------------------------------------------------

// Q5. Online Sale – Discounted Bill
const prices5 = [800, 1500, 3000, 600, 1200];
const totalPayable = prices5
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((sum, p) => sum + p, 0);
console.log('Q5 - Total payable amount:', totalPayable); // 5100

// --------------------------------------------------

// Q6. Attendance – Reward Points
const hours6 = [5, 7, 8, 6, 9];
const totalPoints6 = hours6
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((sum, p) => sum + p, 0);
console.log('Q6 - Total reward points:', totalPoints6); // 240

// --------------------------------------------------

// Q7. Delivery App – Total Distance
const distances7 = [3, 6, 10, 4, 8];
const totalDistance7 = distances7
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);
console.log('Q7 - Total distance:', totalDistance7); // 27

// --------------------------------------------------

// Q8. Salary System – Final Salary
const salaries8 = [18000, 25000, 30000, 15000];
const totalSalary = salaries8
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((sum, s) => sum + s, 0);
console.log('Q8 - Total salary payout:', totalSalary); // 59000

// --------------------------------------------------

// Q9. Study App – Total Study Time
const hours9 = [0.5, 1.5, 2, 0.75, 3];
const totalStudyMinutes = hours9
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q9 - Total study minutes:', totalStudyMinutes); // 390

// --------------------------------------------------

// Q10. Electricity Usage – Monthly Bill
const units10 = [80, 120, 200, 90, 150];
const totalBill = units10
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((sum, b) => sum + b, 0);
console.log('Q10 - Total electricity bill:', totalBill); // 2820

// --------------------------------------------------

// Q11. Game Scores – Final Power Score
const scores11 = [30, 50, 90, 20, 70];
const totalPowerScore = scores11
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q11 - Total power score:', totalPowerScore); // 420

// --------------------------------------------------

// Q12. Travel App – Total Fare
const rides12 = [5, 12, 20, 8, 15];
const totalFare = rides12
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((sum, r) => sum + r, 0);
console.log('Q12 - Total fare:', totalFare); // 147

// --------------------------------------------------

// Q13. Office Work – Productive Hours
const hours13 = [4, 6, 8, 5, 9];
const totalProductiveMinutes = hours13
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((sum, m) => sum + m, 0);
console.log('Q13 - Total productive minutes:', totalProductiveMinutes); // 1260

// --------------------------------------------------

// Q14. Shopping Cart – Reward Coins
const purchases14 = [300, 800, 1200, 400];
const totalCoins = purchases14
  .filter(p => p > 500)
  .map(p => 10)
  .reduce((sum, c) => sum + c, 0);
console.log('Q14 - Total coins earned:', totalCoins); // 20

// --------------------------------------------------

// Q15. Fuel App – Total Fuel Cost
const liters15 = [3, 6, 10, 4, 8];
const totalFuelCost = liters15
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);
console.log('Q15 - Total fuel cost:', totalFuelCost); // 2940

// --------------------------------------------------

// Q16. Interview Classic – Sum of Cubes
const numbers16 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers16
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((sum, n) => sum + n, 0);
console.log('Q16 - Sum of cubes of odd numbers:', sumOfCubes); // 153

// --------------------------------------------------

// Q17. Performance Tracking – Bonus Points
const scores17 = [10, 20, 30, 40, 50];
const average17 = scores17.reduce((sum, s) => sum + s, 0) / scores17.length;
const totalBonusScore = scores17
  .filter(s => s > average17)
  .map(s => s + 5)
  .reduce((sum, s) => sum + s, 0);
console.log('Q17 - Total score with bonus:', totalBonusScore); // 110

// --------------------------------------------------

// Q18. Subscription App – Final Bill
const plans18 = [199, 399, 599, 299];
const totalBill18 = plans18
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((sum, p) => sum + p, 0);
console.log('Q18 - Final subscription bill:', totalBill18); // 1181.18

// --------------------------------------------------

// Q19. Learning App – Achievement Score
const scores19 = [45, 60, 70, 30, 80];
const totalAchievementScore = scores19
  .filter(s => s >= 60)
  .map(s => s ** 2)
  .reduce((sum, s) => sum + s, 0);
console.log('Q19 - Total achievement score:', totalAchievementScore); // 15800

// --------------------------------------------------

// Q20. Interview Finisher ⭐
const numbers20 = [3, 6, 9, 10, 12];
const totalSum20 = numbers20
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((sum, n) => sum + n, 0);
console.log('Q20 - Total sum:', totalSum20); // 300
