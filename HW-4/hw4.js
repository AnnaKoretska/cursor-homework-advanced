
//1 largest number 
function getMaxDigit(number) {
    number=number.toString()
    let currentNumber = number[0]
    for (let i = 0; i < number.length; i++){
        if (currentNumber > number[i]){
            continue
        } else {
            currentNumber = number [i]
        }
    }
    return currentNumber
}
console.log(`Largest number ${getMaxDigit(2165489)}`);

//2 pow
function powFunc(a,b){ 
    let number=1;
    for (let i =0; i<b; i++){
        number *= a; 
    }
    return number
}
console.log(`Power ${powFunc(4,4)}`)

//3 to upper case  
function toUpperCase (sillyString) {
    return sillyString[0].toUpperCase()+sillyString.slice(1).toLowerCase();
}
console.log(`First letter ${toUpperCase("haNnAh")}`);

//4 taxes 
function taxes (num){
    return num - (num * 19.5) / 100;
}
console.log(`Taxes ${taxes(1000)}`);

//5 random number 
function randomNum (min , max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(`Random number ${randomNum(1,11)}`);

//6 count letter 
function count(str, letter) {
    str = str.toLowerCase();
    let letterCount = 0;
    for (let i = 0; i < str.length;i++) {
    if (str.charAt(i) == letter) {
    letterCount +=1;
    }
}
    return letterCount;
}
console.log(`Count letter ${count('Асталавіста', 'а')}`);

//7 convertation
function convertCurr (curr){
    if (curr.includes('$')) {
        return curr.split('').splice(0, curr.length -1).join('') * 35 + 'грн';
    } else if (curr.includes('uah')) {
        return curr.split('').splice(0, curr.length -3).join('') / 35 + '$';
    } else { 
        return 'incorrect value'
    }
}
console.log(`Currency convertation ${convertCurr('3500uah')}`);

//8 random pass
function getRandomPassword (num = 8) { 
    return Math.floor( Math.random(10000000)* Math.pow(10, num));
} 
console.log(`Random pass ${getRandomPassword()}`); 

//9 delete letters
function deleteLetter(letter, string){
    return string.replaceAll(letter, "")
}
console.log(`Delete letter ${deleteLetter("a","blablablabla")}`);

//10 palindrom 
function palindrom (str) {
    return str === str.split("").reverse().join("");
}
console.log(`Palindrom word ${palindrom("мадам")}`); 

//11 delete letters 
function removeDuplicateCharacters(string) {
    return string
    .split('')
        .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
})
        .join('');
}
console.log(`Delete duplicate letter ${removeDuplicateCharacters("барабан")}`);