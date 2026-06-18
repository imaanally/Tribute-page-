// the type is just to tell you the variable type

let numb1 = 768;
console.log("numb1 ", numb1, "Its type is ", typeof numb1);
let strNumb = "789";
console.log("strNumb ", strNumb, "Its type is ", typeof strNumb);
let myName = "Imaan";
console.log("My name is ", myName, "Its type is ", typeof myName);
let isMarried = true;
console.log("isMarried ", isMarried, "Its type is ", typeof isMarried);
let nullVal = null;
//console.log("nullVall ", nullVall, "Its type is ", typeof nullVall);
let unValue =65;
console.log("unValue ", unValue, "its type is ", typeof unValue);

const bonus = "200";
const salary = 50000;

const salaryGross = bonus + salary;
console.log("Gross salary is ", salaryGross, "its type ", typeof salaryGross); //--> more helpful
//tax calc
const paye = salaryGross * 0.16;
console.log("For gross salary of ", "salaryGross", "Paye is ", paye);
const nhif = 2500;
console.log("nhif deduction ", nhif);
const sha = 2500;
console.log("SHA is ", sha);
const totalDeductions = paye + nhif + sha;
console.log("TOtal deductions Are ", totalDeductions);
const netSalary = salaryGross - totalDeductions;
console.log("Your net salary is ", netSalary);