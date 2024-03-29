const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    return salary*this.tax;
}
console.log(getMyTaxes.call(ukraine,1789));

function getMiddleTaxes(){
    return this.tax*this.middleSalary;
}
console.log(getMiddleTaxes.call(latvia));

function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(litva));

function getMySalary(country) {
    let mySalary = {};
    setInterval(() => {
      mySalary["salary"]= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        mySalary["taxes"] = Math.round(getMyTaxes.call(country, mySalary.salary));
        mySalary["profit"] = mySalary.salary - mySalary.taxes;
        console.log(mySalary);
    }, 10000);
}
getMySalary(litva);

