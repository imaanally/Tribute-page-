//console.log --- debugging by printing out information 

//exercise from a gross salary 
const bonus="200"
const salary=50000

const salaryGross=bonus+salary;
console.log("Gross salary is ",salaryGross,"its type ",typeof salaryGross)   //--> more helpful
//tax calc 
const paye=salaryGross*0.16
console.log("For gross salary of ", "salaryGross", "Paye is ", paye)
const nhif=2500
console.log("nhif deduction ", nhif)
const sha=2500
console.log("SHA is ", sha)
const totalDeductions=paye+nhif+sha
console.log("TOtal deductions Are ", totalDeductions)
const netSalary=salaryGross-totalDeductions 
console.log("Your net salary is ",netSalary)