let numberN = parseFloat(prompt('Задайте число N'));
let numberM = parseFloat(prompt('Задайте число M'));

if (isNaN(numberN) || isNaN(numberM) || (numberN%1!== 0) || (numberM%1!== 0)  ) {
    console.log('You need to enter a number!');
    alert ('You need to enter a number');
} else{
    let parity = confirm('Пропускать четные числа?');
    
    let sum = 0;
    if (parity) {
        for(i=numberN; i<=numberM; i++){
            if (i%2==0) {
                continue;
            }else{
            sum+=i;
            }
        }
    console.log('sum', sum);
    } else {
        for(n=numberN; n<=numberM; n++){
        sum+=n;
        }
    console.log('sum', sum);
    }
}