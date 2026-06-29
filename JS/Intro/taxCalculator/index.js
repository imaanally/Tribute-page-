//check if its a number
//1. isNaN
//Number->
//3.+<>

//stay here until he has entered the correct gross

let grossMonthlySalary = null;

while (true) {
  let gross = prompt("enter your gross salary");
  if (!isNaN(gross)) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }
  alert(`Invalid amount entered.
        Ensure you enter greater than 0`);
}
console.log(`got gross salary, $(grossMonthlySalary) 
its type $(typeof grossMonthlySalary)`);

//calculate paye

let paye = null;

if (grossMonthlySalary >= 0 && grossMonthlySalary <= 24000) {
  paye = grossMonthlySalary * 0.1;
} else if (grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333) {
  paye = grossMonthlySalary * 0.25;
} else if (grossMonthlySalary >= 32334 && grossMonthlySalary <= 500000) {
  paye = grossMonthlySalary * 0.3;
} else if (grossMonthlySalary >= 500001 && grossMonthlySalary <= 800000) {
  paye = grossMonthlySalary * 0.325;
} else if (grossMonthlySalary >= 800000) {
  paye = grossMonthlySalary * 0.35;
}
console.log(`paye = ${paye}`);

let nssf = 0;

if (grossMonthlySalary <= 9000) {
  nssf = grossMonthlySalary * 0.06;
} else if (grossMonthlySalary <= 108000) {
  nssf = 9000 * 0.06 + (grossMonthlySalary - 9000) * 0.06;
} else {
  nssf = 6480;
}

console.log(`Employee nssf:kes ${nssf}`);

const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.1;
const band2 = (bracket2 - bracket1) * 0.25;
const band3 = (bracket3 - bracket2) * 0.3;
const band4 = (bracket4 - bracket3) * 0.325;

const personal_relief = 2400;

if (taxableIncome <= 24000) {
  paye = taxableIncome * 0.1;
  paye_tier = "Paye 0-24000 KES";
} else if (taxableIncome <= 32333) {
  let diff = taxableIncome - 24000;
  let tax = diff * 0.25;
  paye = tax + band1;
  paye_tier = "Paye 24000-32333 KES";
} else if (taxableIncome <= 500000) {
  let diff = taxableIncome - 32333;
  let tax = diff * 0.3;
  paye = tax + band1 + band2;
  paye_tier = "Paye 32333-500000 KES";
} else if (taxableIncome <= 800000) {
  let diff = taxableIncome - 500000;
  let tax = diff * 0.325;
  paye = tax + band1 + band2 + band3;
  paye_tier = "Paye 500000-800000 KES";
} else {
  let diff = taxableIncome - 800000;
  let tax = diff * 0.35;
  paye = tax + band1 + band2 + band3 + band4;
  paye_tier = "Paye 800000 to infinity KES";
}

const final_paye = Math.max(0, paye - personal_relief);

alert(`Taxable Income ${taxableIncome}
    Paye ${paye}
    Personal Relief ${personalRelief}
    Final Paye ${final_paye}
    Tier ${paye_tier}
`);