// // ------ Chap # 1  "Alerts" ----------//

// alert("Thanks for your input!")

// // ----- Chap # 2 "Variables" -------//

// var names = "Adil";
// alert(names);

// // -------- Chap # 3 "Variables for numbers" -------//

// var quan = 150;
// alert (quan)

// // -------- Chap # 4 "Variables for legal & illegal" -----------// 

// "legal variables: string(A to Z) and ($ and _)"
// "illegal variables: numbers(0 to 9)"

// //  --------- Chap # 5 "Math expressions:Familiar operators" ----------- //

// var popularNum=4+4;
// alert(popularNum);

// var popularNum=50-4;
// alert(popularNum);

// var popularNum=50%4;
// alert(popularNum);

// var popularNum=50*4;
// alert(popularNum);

// var popularNum=50/4;
// alert(popularNum);

// // ---------- Chap # 6 "Math expressions:Unfamiliar operators" -----------//

// var num = 1;
// var newNum = ++num;
// alert(newNum)

// var num = 21;
// var newNum = num++;
// alert(num)

// var num = 21;
// var newNum = num--;
// alert(newNum)

// var num = 20;
// var newNum= num + 1;
// alert(num)

// // -------- Chap # 7 "Math expressions:Eliminating ambiguity" --------- //

// var totalCost = 7 * (3 + 4);
// alert(totalCost);

// var totalCost =  (1 + 3) * 4;
// alert(totalCost);

// var totalCost = (2 * 4) * 4 + 2;
// alert(totalCost);

// var totalCost =   4 + 2-(2 * 4);
// alert(totalCost);

// var totalCost =   4 * 2-(2 * 4);
// alert(totalCost);

// var totalCost =    ((2 * 4) * 4) + 2;
// alert(totalCost);

// // -------- Chap # 8 "Concatenating text strings" --------- //

//  var message = "Thanks, ";
//  var banger = "!";
//  var userName = "Adil";
//  alert(message + userName + banger);

// var message = "Thanks, ";
// var userName = "Adil";
// var banger = "!";
// var customMess = message + userName + banger;
// alert(customMess);

// // -------- Chap # 9  "Prompts" --------- //

// var question = "Your species?";
// var defaultAnswer = "Adil";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats?")
// alert(numberOfCats)

// // -------- Chap # 10 "IF Statment" --------- //

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }
// else{
//     alert("InValid")
// }

// // --------------------- Chap # 11 "Comparison operators" --------------------- //

// var yourTicketNumber=+prompt("Enter your ticket number")
// if (yourTicketNumber !== 487208) {
//      alert("Better luck next time.");
//      }
//      else{
//         alert("Founded")
//      }

// // ----------------- Chap # 12 "if...else and else if statements" ----------------//

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//   alert("Correct!");
// }
// if (x !== "Vatican") {
//   alert("Wrong answer");
// }

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//   alert("Correct!");
// } else {
//     alert("Incorrect");
// }

// var x = prompt("Where does the Pope live?");
//  var correctAnswer = "Vatican";
//  if (x === correctAnswer) {

//  alert("Correct!");
//  }
//  else if (x === "Rome") {
//  alert("Incorrect but close");
//  }
//  else {
//  alert("Incorrect");
// }

// // ------------- Chap # 13 "Testing sets of conditions" ---------- //

// var per = +prompt("Enter percentage and see your grade");
// if (per < 100 && per >= 80) {
//   document.write("your grade is A+");
// } else if (per < 80 && per >= 70) {
//   document.write("your grade is A");
// } else if (per < 70 && per >= 60) {
//   document.write("your grade is b");
// } else if (per < 60 && per >= 50) {
//   document.write("your grade is c");
// } else if (per < 50 && per >= 40) {
//   document.write("your grade is d");
// } else if (per < 40 && per >= 0) {
//   document.write("Fail");
// } else {
//   alert("you have entered wrong percentage");
// }

// // ----------- Chap # 14 "if statements nested" ----------------//
// // var age = prompt()
// // if (c === d) {
// //     if (x === y) {
// //         alert(g = h)
// //     }
// //     else if (a === b) {
// //         alert(g = h)
// //     }
// //     else {
// //         alert(e = f)
// //     }
// // }
// // else {
// //     e = f;
// // }
// // alert(age   )

// // ---------- Chap # 15 "Arrays" ----------------//

// var city0 = "Atlanta";
// var city1 = "Baltimore";
// var city2 = "Chicago";
// var city3 = "Denver";
// var city4 = "Los Angeles";
// var city5 = "Seattle";

// alert("Welcome to " + city3);

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// console.log(cities)

// //----------- Chap # 16 "Arrays:Adding and removing elements" -----------------//

// var pets = ["Fish","Lion","Tiger","Snake","Bear"]
// pets.push("Cat","Dog")
// pets.pop()
// console.log(pets)

// // ---------- Chap # 17 "Arrays:Removing, inserting,and extracting elements" ---------//

// var pets = ["Fish","Lion","Tiger","Snake","Bear"]
// pets.shift()
// pets.unshift("Fox")
// pets.splice(0,1,"Cat","Dog")
// console.log(pets)
// var pets = ["Fish","Lion","Tiger","Snake","Bear"]
// var pets4 = pets.slice(0,5)
// console.log(pets4)

// // --------- Chap # 18 "For loops" -------------//

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var citytocheck = prompt("Check Your City")
// for(i = 0 ; i < cleanestCities.length ; i++){
//     if(citytocheck === cleanestCities[i]){
//         alert("Your City is exist")
//     }
//     else{
//         alert("Your City is not exist")
//     }
// }


// // --------- Chap # 19 "For loops: Flags, Booleans, array length,and loopus interruptus" ------------//

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var citytocheck = prompt("Check Your City")
// flagvalue = false
// for(i = 0 ; i <= 5 ; i++){
//     if(citytocheck === cleanestCities[i]){
//         flagvalue = true
//         alert("Your City is exist")
//     }
// }
// if(!flagvalue){
//     alert("Your City is not exist")
// }

// // -------- Chap # 20 "Nested loop" ----------------//

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// for(i = 0; i < 5; i++){
//     for(j = 0; j < 4; j++){
//         console.log(firstNames[i],lastNames[j])
//     }
// }

// --------------- Chap # 21 "Changing Case" --------------------//

// var citytocheck = prompt("Check Your City")
// citytocheck = citytocheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for(i = 0 ; i <= 4 ; i++){
//     if(citytocheck === cleanestCities[i]){
//         alert("Your City is exist")
//     }
// }

// -------------- Chap # 22 "Strings : Measuring lengthand extracting parts" ------------------//

// var str = "haseeb"
// var first = str.slice(0,1)
// var other = str.slice(1)
// first = first.toUpperCase()
// other = other.toLowerCase()
// console.log (first + other)

// ------------- Chap # 23 "Strings : Finding Segment" -------------------- //

// text = "corrupti Lorem ipsum corrupti dolor sit amet, consect corrupti adipisicing elit. Nemo laudantium officia corrupti dicta eos vel veniam quidem sed. Dolorum corrupti facilis dolores earum, illo esse minus corrupti iste magnam enim, corrupti molestiae aspernatur corrupti"
// for(i = 0; i < 8; i++){
//     if(text.slice(i,i + 8) === "corrupti"){
//     text = text.slice(0,i) + "My Text" + text.slice(i + 8)
//     }
//     console.log(text)
// }

// var firstChar = text.indexOf("corrupti");
// console.log(firstChar)

// var segIndex = text.lastIndexOf("corrupti");
// console.log(segIndex)



// ------------- Chap # 24 "Strings:Finding a character at a location" ------------------- //

// text = "corrupti Lorem ipsum corrupti dolor sit amet, consect corrupti adipisicing elit. Nemo laudantium officia corrupti dicta eos vel veniam quidem sed. Dolorum corrupti facilis dolores earum, illo esse minus corrupti iste magnam enim, corrupti molestiae aspernatur corrupti"
// var firstChar = text.charAt(30)
// console.log(firstChar)

// ------------- Chap # 25 "Strings:Replacing characters" -------------- //

// text = "corrupti Lorem ipsum corrupti dolor sit amet, consect corrupti adipisicing elit. Nemo laudantium officia corrupti dicta eos vel veniam quidem sed. Dolorum corrupti facilis dolores earum, illo esse minus corrupti iste magnam enim, corrupti molestiae aspernatur corrupti"
// var corrupti = text.replace("corrupti","Adil") 
// console.log(corrupti)
// var newText = text.replace(/corrupti/g, "the Second World War");
// console.log(newText)

// ------------ Chap # 26 "Rounding numbers" ----------- //

// var num = 4.6
// var rounded = Math.round(num)
// console.log(rounded)

// var num = 4.1
// var ceil = Math.ceil(num)
// console.log(ceil)

// var num = 5.8
// var floor = Math.floor(num)
// console.log(floor)


// ------------- Chap # 27 "Random Number" ------------------ //

// var random = Math.random()
// console.log(Math.ceil(random * 5))

// ------------ Chap # 28 "Converting strings to integers and decimals" ------------ //

// var num = "1"
// var num2 = 5
// num = Number(num) 
// console.log(num + num2)

// ----------- Chap # 29 "Converting strings to numbers, numbers to strings" --------- //

// var num = 1
// var num2 = 5
// num = num.toString()
// console.log(num + num2) 

// ------------------ Chap # 30 "Controlling the length of decimals" --------------- //

// var decimal = 2.136216467485
// var fixed = decimal.toFixed(2)
// console.log(fixed)

// ----------------- Chap # 31 "Getting the current date and time" --------------- //

// var now = new Date 
// console.log(now)

// ---------------- Chap # 32 "Extracting parts of the date and time" ----------- //

// var daynames = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
// var day = now.getDay()
// console.log(daynames[day])

// var monnames = ["jan","feb","mar","Apr"]
// var mon = now.getMonth()
// console.log(monnames[mon])


// var date = now.getDate()
// console.log(date)



// var year = now.getFullYear()
// console.log(year)


// var hour = now.getHours()
// console.log(hour)


// var min = now.getMinutes()
// console.log(min)


// var sec = now.getSeconds()
// console.log(sec)


// var millisec = now.getMilliseconds()
// console.log(millisec)


// var time = now.getTime()
// console.log(time)

// ------------- Chap # 33 "Specifying a date and time" --------------- //

// var now = new Date()
// var nowTime = now.getTime()
// console.log(nowTime)

// var nowbirth = new Date("April 30 2006")
// var nowbirthtime = nowbirth.getTime()
// console.log(nowbirthtime)

// var diff = nowTime - nowbirthtime
// console.log(diff)

// var myage = (diff / (1000 * 60 * 60 * 24 * 365 ))
// console.log(Math.floor(myage))



// -------------- chap # 35 "Function" -------------------- //

// function getTime()

// ------------ Chap # 36 "Functions:Passing them data" -------------- //

// function getTime(){
//     var now = new Date()
//     var hrs = now.getHours()
//     var Minute = now.getMinutes()
//     var sec = now.getSeconds()
//     console.log("Now The Time is " + hrs + ":" + Minute + ":" + sec)
// }
// getTime()

// --------------- Chap # 37 "Functions:Passing data back from them" ----------------- //

// var names = prompt("Enter Your Name")
// function getname(greeting,age){
//     alert(greeting,age)
// }
// getname("Welcome"+names)


// function getdata(){
//     var a = 5
//     var b = 10
//     var total = 5 + 10
//     return total   
// }
// var myval = getdata()
// console.log(myval)

// ---------------- Chap # 38 "Local Vs GLobal Variable" -------------------------- //

// Global Variable
// var num = 1

// // Local Variable

// function getglobal(){
//     var num  = 5
// }






