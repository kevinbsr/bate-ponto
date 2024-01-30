const timeSheet = require('./time-sheet.json')
const employeeData = require('./employee-data.json')

let salario = employeeData.Kevin.salary;
console.log(`Salario: ${salario}`);

let inssDescount = (salary) => {
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

console.log(`Desconto INSS: ${inssDescount(salario)}`)

let getInssDescount = (salary, inssDescount) => {
  return (salary - (salary * (inssDescount/100)))
}

let salarioFinal = 0;

function descountOnSalary(salario, inssDescount) {
  salarioFinal = getInssDescount(salario, inssDescount)
}

descountOnSalary(salario, inssDescount)

console.log(`Salario com desconto: ${salarioFinal}`);

// console.log(getInssDescount(salario, inssDescount));

/* 
function getDiaryValue() {
  return (getInssDescount(salary, inssDescount) / 30)
}

function getHourlyValue() {
  return (getDiaryValue() / 8)
}

function get50PercentValue() {
  return (getHourlyValue() * 1.5)
}

function get100PercentValue() {
  return (getHourlyValue() * 2)
}

function getDayTotal() {
  let extraHours = getTotalExtraHours()
  let diary = getDiaryValue()
  let extraHoursPrice = get50PercentValue()
  let total = diary + (extraHours * extraHoursPrice)

  return console.log(`No dia ${timeSheet.janeiro[14].dia}: \nO valor total é de R$ ${(total).toFixed(2)}. \nA diária foi R$ ${(diary).toFixed(2)}. \nA hora extra foi R$ ${(extraHours * extraHoursPrice).toFixed(2)}`);
}

(function main() {
  workedHours = []
  extra = []
  
  for(i = 0; i < timeSheet.janeiro.length; i++) {
    workedHours.push(timeSheet.janeiro[i].saida - timeSheet.janeiro[i].entrada + (timeSheet.janeiro[i].almoco - timeSheet.janeiro[i].voltaAlmoco));
  }

  workedHours.forEach((hours) => {
    return extra.push(hours - 8)
  })
  
  totalExtra = []
  totalPayment = []
  diary = getDiaryValue()

  for(i = 0; i < extra.length; i++){
    totalExtra.push(get50PercentValue() * extra[i])
  }

  for(i = 0; i < extra.length; i++){
    let total = totalExtra[i] + diary;
    totalPayment.push(total)
  }

  for (let i = 0; i < totalPayment.length; i++) {
    const element = totalPayment[i];
    const dia = timeSheet.janeiro[i].dia
    console.log(`Dia ${dia} - R$ ${(element).toFixed(2)}`);
  }

  totalMonth = totalPayment.reduce((acc, cur) => acc + cur)
  console.log(`Total: R$ ${totalMonth.toFixed(2)} / ${timeSheet.janeiro.length} dias.`);
})() */