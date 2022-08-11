/* 1 getRandomArray*/ 
function getRandomArray(length, min, max){ 
    let randomArr = []; 
    for ( let i = 0; i< length; i++){ 
        randomArr[i] = Math.floor(Math.random()*(max- min)+ min);
    }
    return randomArr
} 
console.log(getRandomArray(5, 3, 15));
/* 3 getAverage*/ 
const getAverage = (...numbers) => numbers.reduce((a, b) => a + b) / numbers.length;
console.log (getAverage(2, 5, 7, 4, 4));
/* 4 getMedian */ 
function getMedian(...numbers){ 
    numbers.sort((a, b) => a - b);
        if(numbers.length % 2 !== 0){
            return numbers[Math.floor(numbers.length / 2)];
        } else { 
            let mid1 = numbers.length / 2;
            let mid2 = mid1 - 1;
            return (numbers[index1] + numbers[index2]) / 2;
        }
    }
console.log(getMedian(1, 2, 3, 4, 5));
/* 5 filterEvenNumbers filter method */ 
function filterEvenNumbers(...numbers) {
    let evenNumber = numbers.filter(function(item){
        return item % 2 == 1;
})
    return evenNumber;
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
/* 6 countPositiveNumbers filter */ 
function countPositiveNumbers(...numbers){
    return numbers.filter(number => number > 0).length
}
console.log(countPositiveNumbers(0, -3, -1, 5, 1));
/* 7 getDividedByFive fiter*/
function getDividedByFive (...numbers){
    return numbers.filter(number => number % 5 == 0) 
} 
console.log(getDividedByFive(10, 1, 2, 15));
