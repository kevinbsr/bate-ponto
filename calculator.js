const timeSheet = require('./time-sheet.json')
const employeeData = require('./employee-data.json')

let salary = employeeData.Kevin.salary;
let finalSalary = 0;

let getInssDescount = (salary) => {
  if (salary <= 1412) {
    return 0.075
  } else if (salary > 1412 && salary < 2666.68) {
    return 0.09
  } else if (salary > 2666.68 && salary < 4003.03) {
    return 0.12
  } else if (salary > 4000.02 && salary < 7786.02) {
    return 0.14
  } else {
    return "Invalid salary range";
  }
}

let getFinalSalary = (salary, inss) => {
  return finalSalary = (salary - (salary * (inss)))
}

main = () => {
  getInssDescount(salary);
  getFinalSalary(salary, getInssDescount(salary))
}

console.log(finalSalary)