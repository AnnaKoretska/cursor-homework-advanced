let valueN;

do {
    valueN = prompt('Enter number N', "");
    if (isNaN(valueN)){
    alert("It's not a number!Write a number");
    }  else valueN=Math.round(valueN);
    
}  while (isNaN(valueN));

let valueM;

do {
    valueM = prompt('Enter number M', "");
    if (isNaN(valueM)){
    alert("It's not a number!Write a number");

} else valueM = Math.round(valueM);

} while(isNaN(valueM));

let sum = 0;
if (confirm("Skip even numbers?")){
for (let i = valueN; i <= valueM; i++){
    if (i % 2 == 0 ) {
        continue
    }
    sum += i;
    }
} else {
    for (let i= valueN; i <= valueM; i++) {
        sum +=i;
    }
}
alert(sum);