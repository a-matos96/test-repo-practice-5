var bankAccountBalance = 52.10; 
// The first letter of the first word is lowercase, followed by the first letter in the next words is capalized. This is known as Camelcase. It's the standard practice for Javascript. Always make sure to end each line/statement with a semicolon. Think of it like writing a setnece. You would end a sentence with a period, to close out the current sentence and move on to the next one. In Javascript, we end our lines with a semicolon.

var firstName = "Andre"; // Double Quotes
var lastName = 'Matos'; // Single Quotes
// Notice how Ln 4 has double quotes around Andre, and in Ln 5 are single quotes around Matos. These are referred to as Strings. In theory, there is no difference between the double and single quotes other than the preference of the developer that wrote the code.

var numberOfFriends = 5; 
// Notice how we did not need to put any quotes around 5. Since we are assigning a number value, Javascript already knows since our data: var numberOfFriends, was assigned to the number value 10. 
// If we look back at Ln 1, we did not need to add any quotes around 52.10. Same rule applies for decimals as well just like when assigning number values to our variables. Since we input the following: var bankAccountBalance, Javascript knows that following value does not require neither single or double quotes since we used a decimal, and assigned bankAccountBalance to the 52.10 value.

var isHotOutside = false;
var isHappy = true; 
// When assigning our variable data to a true or false value, this is referred to as a Boolean data. True and false are our Boolean values and are keywords in Javascript. Boolean values do not require single or quotes either.
// Overall: There are various types of data and value keywords used within Javascript. Boolean refers to true or false (Ln 10-11). Number refers to Numeric values. String refers to alphanumeric/text values (Ln 3-4). Camelcase refers to the first letter of the first word variable being lowercased, followed by the following words being captialized with only their first letter. 

// TLDR; String, Number, Boolean are data types for variables. String is assigned to a variable involving quotes around it. Number is assigned to a variable involving numeric numbers. Boolean is assigned to a variable that can be true or false.


// Variable Practice
var firstName = "Dre-Day";
var lastName = "Matos";

var itemPrice = 25.00;

var numberOfGames = 15;

var isRainingOutside = true;
var isSleepy = true;

// Variable Practice #2
var firstName = "Ryu";
var lastName = "Hayabusa";

var numberOfSequels = 3;

var isVeryDifficult = false;
var firstGameIsTheBest = true; 

var itemPrice = 40.00; // The current price of Ninja Gaiden: Master Collection

// Variable Practice #3
var firstName = "xZShootZ";
var lastName = "Discogs";

var amountSpentForMostExpensiveVinyl = 200;

var numberOfVinyls = 60;

var myCollectionIsGreat = true;
var overTwoYearsOfCollecting = true;

console.log("Hello World!");

console.log(5 + 3); // The "+" is our Operator. The 5 and 3 are our Operands.
console.log(4 - 2); // The "-" is our Operator. The 4 and 2 are our Operands.
console.log(6 * 7); // The "*" is our Operator. The 6 and 7 are our Operands.
console.log(8 / 2); // The "/" is our Operator. The 8 and 2 are our Operands.

// Overall: Operators involve anything mathematic/arithmetic such as addition/subtraction/multiplication/division. Operands are the data types. The results are our Operations.

console.log(bankAccountBalance - 30);
console.log(bankAccountBalance * numberOfFriends);

console.log(5 == 5); // The "==" is our Equality Operator. This will determine if two values are equal. The result of an Equality Operator is a Boolean (true or false)
console.log(5 == 6);
console.log(bankAccountBalance == numberOfFriends);
console.log(bankAccountBalance == 52.10);

// Operations can also work with variables and not just hard-coded values.
var bankAccountBalance = 100.24;
bankAccountBalance = bankAccountBalance -5;
console.log(bankAccountBalance);

// To make things easier and shorter, we are able to input the following in reference to Ln 72
bankAccountBalance -= 5; // This is the same as saying 'bankAccountBalance = bankAccountBalance -5'
// We can subsitute the "-=" with any other arthimetic Operator such as "+" "*" "/"

// Operation Practice
console.log(25 + 20);
console.log(100 - 70);
console.log(7 * 3);
console.log(50 / 2);

console.log(itemPrice + numberOfGames); //itemPrice is referring to Ln 40, which is why the Operation result is 55 and not 40.
console.log(amountSpentForMostExpensiveVinyl - numberOfVinyls);

console.log(itemPrice == numberOfSequels);
console.log (myCollectionIsGreat == overTwoYearsOfCollecting);

// Operation Practice #2
console.log(45 + 45);
console.log(250 - 150);
console.log(10 * 5);
console.log(350 / 5);

console.log(numberOfFriends - numberOfSequels);
console.log(amountSpentForMostExpensiveVinyl + numberOfGames);

console.log(bankAccountBalance == bankAccountBalance);
console.log(numberOfVinyls == numberOfFriends);
console.log(itemPrice == 40.00);

// Operation Practice #3
console.log(50 + 50);
console.log(30 - 30);
console.log(125 * 2);
console.log(70 / 5);

console.log(numberOfGames + numberOfVinyls);
console.log(amountSpentForMostExpensiveVinyl / itemPrice);

console.log(amountSpentForMostExpensiveVinyl == amountSpentForMostExpensiveVinyl);
console.log(numberOfSequels == numberOfGames);

var numberOfTheHouseOfTheDeadGames = 6;
numberOfTheHouseOfTheDeadGames = numberOfTheHouseOfTheDeadGames -2;
console.log(numberOfTheHouseOfTheDeadGames);

var highestScoreOnHOTD4 = 502000;
highestScoreOnHOTD4 = highestScoreOnHOTD4 -30000;
console.log(highestScoreOnHOTD4);

// Operation Practice #4
console.log(10 + 20);
console.log(55 - 54);
console.log(90 * 3);
console.log(45 / 2);

console.log(numberOfSequels * numberOfTheHouseOfTheDeadGames);
console.log (amountSpentForMostExpensiveVinyl / 4);

console.log(highestScoreOnHOTD4 == highestScoreOnHOTD4);
console.log(numberOfTheHouseOfTheDeadGames == numberOfVinyls);

var yearsOfPSO2Played = 8;
yearsOfPSO2Played *= numberOfFriends;
console.log(yearsOfPSO2Played);
