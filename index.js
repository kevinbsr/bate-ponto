const timeSheet = require('./time-sheet.json')
const employeeData = require('./employee-data.json')

function totalWorkHoursDay(day){
  
  return (timeSheet.janeiro[0].saida - timeSheet.janeiro[0].entrada + (timeSheet.janeiro[0].almoco - timeSheet.janeiro[0].voltaAlmoco));
} 
getTotalExtraHours = () => totalWorkHoursDay() - 8;

const salary = employeeData.Kevin.salary;
const inssDescount = employeeData.Kevin.inss;

getInssDescount = (salary, inssDescount) => (salary - (salary * (inssDescount/100)))
getDiaryValue = () => (getInssDescount(salary, inssDescount) / 30)
getHourlyValue = () => (getDiaryValue() / 8)
get50PercentValue = () => (getHourlyValue() * 1.5)
get100PercentValue = () => (getHourlyValue() * 2)

getDayTotal = () => {
  let extraHours = getTotalExtraHours()
  let diary = getDiaryValue()
  let extraHoursPrice = get50PercentValue()

  let total = diary + (extraHours * extraHoursPrice)

  return console.log(`No dia ${timeSheet.janeiro[14].dia}: \nO valor total é de R$ ${(total).toFixed(2)}. \nA diária foi R$ ${(diary).toFixed(2)}. \nA hora extra foi R$ ${(extraHours * extraHoursPrice).toFixed(2)}`);

}
/* getDayTotal() */

function main() {
  for(i = 0; i < timeSheet.janeiro.length; i++) {
    console.log(`${i + 1} - ${timeSheet.janeiro[i].saida - timeSheet.janeiro[i].entrada + (timeSheet.janeiro[i].almoco - timeSheet.janeiro[i].voltaAlmoco)}`);
  }
}

main()