const banana = 15.678;
const peach = 123.965; 
const grape = 90.2345;
const sum = banana + peach + grape;  
const sumLow = Math.floor(banana) + Math.floor(peach) + Math.floor(grape);
const even = Math.floor(sum)/2 ==0;
const difference = Math.abs (sum - 500);
const middlePrice = (sum/3).toFixed(2);
const discount = Math.floor(Math.random(5)*80); 
const sumWithDiscount = (sum-discount).toFixed(2);
const netProfit = (sum/2) - (sum*discount/100);
console.log ( "Максимальне значення:" + Math.max(banana, peach, grape));
console.log ("Мінімальне значення:" + Math.min(banana, peach, grape));
console.log ("Сума:" + (sum));
console.log ("Сума з округленням в меншу сторону:" + sumLow);
console.log ("Сума товарів округлена до сотень:" + Math.round(sum/100)*100);
console.log ("Сума товарів округлена в меншу сторону, парне число:" + even )
console.log ("Решта якщо покупець платить 500 грн:" + difference);
console.log ("Середнє значення цін округлене до 2 знаку після коми:" + middlePrice);
console.log ("Ваша знижка:" + discount + "%" );
console.log ("До оплати зі знижою:" + sumWithDiscount);
console.log ("Чистий прибуток:" + netProfit); 

document.writeln(
    `<p>Максимальне значення : ${Math.max(banana, peach, grape)}</p>
    <p>Мінімальне значення: ${Math.min(banana, peach, grape)}</p>
    <p>Сума: ${sum}</p>
    <p>Сума з округленням в меншу сторону: ${sumLow}</p>
    <p>Сума товарів округлена до сотень: ${Math.round(sum/100)*100}</p>
    <p>Сума товарів округлена в меншу сторону, парне число: ${even}</p>
    <p>Решта якщо покупець платить 500 грн: ${difference}</p>
    <p>Середнє значення цін округлене до 2 знаку після коми: ${middlePrice}</p>
    <p>Ваша знижка: ${discount + "%"}</p>
    <p>До оплати зі знижою: ${sumWithDiscount}</p>
    <p>Чистий прибуток: ${netProfit}</p>`)