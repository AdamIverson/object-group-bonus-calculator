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

//   function bonusMaker (arr) {
//     let bonusPercentage = 0

//     for (let employee of arr){
    
//         if (employee.reviewRating === 3 || employee.employeeNumber < 10000 || employee.annualSalary < 65000) {
//             bonusPercentage = 9;
//         } else if (employee.reviewRating === 3 || employee.employeeNumber < 10000 || employee.annualSalary > 65000) {
//             bonusPercentage = 4;
//         } else if (employee.reviewRating === 3 || employee.employeeNumber > 9999 || employee.annualSalary > 65000) {
//             bonusPercentage = 3;
//         } else if (employee.reviewRating === 3 || employee.employeeNumber > 9999 || employee.annualSalary < 65000) {
//             bonusPercentage = 9;
//         } else if (employee.reviewRating === 4 || employee.employeeNumber < 10000 || employee.annualSalary < 65000) {
//             bonusPercentage = 11;
//         } else if (employee.reviewRating === 4 || employee.employeeNumber < 10000 || employee.annualSalary < 65000) {
//             bonusPercentage = 11;
//         } else if (employee.reviewRating === 4 || employee.employeeNumber > 9999 || employee.annualSalary < 65000) {
//             bonusPercentage = 6;
//         } else if (employee.reviewRating === 4 || employee.employeeNumber > 9999 || employee.annualSalary < 65000) {
//             bonusPercentage = 10;
//         } else if (employee.reviewRating === 5 || employee.employeeNumber < 10000 || employee.annualSalary < 65000) {
//             bonusPercentage = 11;
//         } else if (employee.reviewRating === 5 || employee.employeeNumber < 10000 || employee.annualSalary < 65000) {
//             bonusPercentage = 11;
//         } else if (employee.reviewRating === 5 || employee.employeeNumber > 9999 || employee.annualSalary < 65000) {
//             bonusPercentage = 6;
//         } else if (employee.reviewRating === 5 || employee.employeeNumber > 9999 || employee.annualSalary < 65000) {
//             bonusPercentage = 10;
//         }
//     } return bonusPercentage;
}

function bonusMaker(arr) {
    let bonusPercentage = 0;

    for (let employee of arr) {
        if (employee.reviewRating === 3) {
            bonusPercentage += 4;
        }
    }    
}

console.log(bonusMaker(employees));

function reviewRatingGrader() {
    if 
}