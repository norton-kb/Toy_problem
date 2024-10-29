const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  function monthlytpayeRates(grossSalary) {
    
    if (grossSalary < 0 || isNaN(grossSalary)) return "Invalid input";
else if (grossSalary <= 24000) return 0.01;
else if (grossSalary > 24000 && grossSalary <= 32333) return 0.25;
else if (grossSalary > 32333 && grossSalary <= 500000) return 0.03;
else if (grossSalary > 500000 && grossSalary <= 800000) return 0.325;
else return 0.35;
  }

  function nhifDeduction(grossSalary) {
    
    if (grossSalary < 0 || isNaN(grossSalary)) return "Invalid input";
else if (grossSalary <= 5999) return 150;
else if (grossSalary > 5999 && grossSalary <= 7999) return 300;
else if (grossSalary > 7999 && grossSalary <= 11999) return 400;
else if (grossSalary > 11999 && grossSalary <= 14999) return 500;
else if (grossSalary > 14999 && grossSalary <= 19999) return 600;
else if (grossSalary > 19999 && grossSalary <= 24999) return 750;
else if (grossSalary > 24999 && grossSalary <= 29999) return 850;
else if (grossSalary > 29999 && grossSalary <= 34999) return 900;
else if (grossSalary > 34999 && grossSalary <= 39999) return 950;
else if (grossSalary > 39999 && grossSalary <= 44999) return 1000;
else if (grossSalary > 44999 && grossSalary <= 49999) return 1100;
else if (grossSalary > 49999 && grossSalary <= 59999) return 1200;
else if (grossSalary > 59999 && grossSalary <= 69999) return 1300;
else if (grossSalary > 69999 && grossSalary <= 79999) return 1400;
else if (grossSalary > 79999 && grossSalary <= 89999) return 1500;
else if (grossSalary > 89999 && grossSalary <= 99999) return 1600;
else return 1700;
  }

  function nssfPensionablePay(grossSalary) {
    return 200;
  }

  // Calculate PAYE, NHIF, NSSF, total deductions and net salary 
  const paye = grossSalary * monthlytpayeRates(grossSalary);
  const nhifDeductionAmount = nhifDeduction(grossSalary);
  const nssfDeductionAmount = nssfPensionablePay(grossSalary);
  const totalDeductions = paye + nhifDeductionAmount + nssfDeductionAmount;
  const netSalary = grossSalary - totalDeductions;
// displaying results
  console.log("Gross Salary:", grossSalary);
  console.log("PAYE(Tax):", paye);
  console.log("NHIF Deduction:", nhifDeductionAmount);
  console.log("NSSF Deduction:", nssfDeductionAmount);
  console.log("Total Deductions:", totalDeductions);
  console.log("Net Salary:", netSalary);
}

rl.question("Enter your basic salary: ", (basicSalary) => {
  rl.question("Enter your benefits: ", (benefits) => {
    calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
    rl.close();
  });
});