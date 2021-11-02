const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

const yesBonus = [];

employeeInfo){
 
  for (let employee of employeeInfo){
    if (employee.reviewRating < 2){
    console.log('no bonus');
    } else if (employee.reviewRating > 2) {
      yesbonusPercentage (percentOfBonus)

// function bonusPercentage(amount) {  
//     for (let employee of employeeInfo);{
// 
// }
// }
console.log ('who has what bonus',bonusPercentage(employees) ) yesBonus.push(employee);
      console.log('Bonus');
  } // end else
} // end for loop
//return yesBonus;
//} // end employeeLoop

console.log(employeeLoop(employees));

console.log('This is who is getting a bonus', yesBonus);

function bonusPercentage (){
  sum = 0
  let firstNumber = employees.reviewRating
  let secondNumber = employees.annualSalary
  sum = firstNumber * secondNumber
  return sum;
}

function reviewDetermine(arr){
  for (let employee of arr){
    if (employee.reviewRating ===3 && employee.employeeNumber.length === 4 && employee.annualSalary < 65000) {
      employee.bonusPercentage === 4;
    }  
      }
}
function finalFunction(employee) {
  newArray = [];
 const newObject = {
   bonusPercentage: bonusPercentageInput, 
   totalCompensation: totalCompensationInput, 
   totalBonus: totalBonusInput, 
  }
}


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
