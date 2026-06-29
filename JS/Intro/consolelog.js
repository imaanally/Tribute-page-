//console.log --- debugging by printing out information 

//exercise from a gross salary 
const bonus=200
const salary=50000

const salaryGross=bonus+salary;
console.log(`Gross salary is ${salaryGross} and its type is ${typeof salaryGross}`)   //--> more helpful
//tax calc 
const paye=salaryGross*0.16
console.log("paye deduction is ", paye , "its type is ", typeof paye )
const nhif=2500
console.log("NHIF is ", nhif)
const sha=2500
console.log("SHA is ", sha)
const totalDeductions=paye+nhif+sha
console.log("total deductions is ", totalDeductions)
const netSalary=salaryGross-totalDeductions 
console.log("Your net salary is ",netSalary)

