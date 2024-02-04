let num1 = 7;
let num2 = 9;
let num3 = 0;
let bol1=true;
let bol2 = false;
let str1="hello";
let str2= "bye";
let str3= "0";



let str1num = Number (str1)
console.log(`We had ${typeof(str1)}, now we have ${typeof(str1num)}`);

let num1bol = Boolean (num1)
console.log(`We had ${typeof(num1)}, now we have ${typeof(num1bol)}`);

let bol1str = String (bol1)
console.log(`We had ${typeof(bol1)}, now we have ${typeof(bol1str)}`);




let num2str = String (num2)
console.log(`We had ${typeof(num2)}: ${num2}, now we have ${typeof(num2str)}: ${num2str}`);

let str2num = Number (str2)
console.log(`We had ${typeof(str2)}: ${str2}, now we have ${typeof(str2num)}: ${str2num}`);

let str3bol = Boolean (str3)
console.log(`We had ${typeof(str3)}: ${str3}, now we have ${typeof(str3bol)}: ${str3bol}`);

let num3bol = Boolean (num3)
console.log(`We had ${typeof(num3)}: ${num3}, now we have ${typeof(num3bol)}: ${num3bol}`);

let num3str = String (num3)
console.log(`We had ${typeof(num3)}: ${num3}, now we have ${typeof(num3str)}: ${num3str}`);

let bol2str = String (bol2)
console.log(`We had ${typeof(bol2)}: ${bol2}, now we have ${typeof(bol2str)}: ${bol2str}`);

let bol3num = Number (bol1)
console.log(`We had ${typeof(bol1)}: ${bol1}, now we have ${typeof(bol3num)}: ${bol3num}`);

let bol2num = Number (bol2)
console.log(`We had ${typeof(bol2)}: ${bol2}, now we have ${typeof(bol2num)}: ${bol2num}`);
