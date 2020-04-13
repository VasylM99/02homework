let numberN = parseFloat(prompt('Задайте число N'));
do {
    numberN = parseFloat(prompt('Задайте число N'));
} while (isNaN(numberN) || (numberN%1!== 0)) {
    console.log('numberN: ', numberN);
};

let numberM = parseFloat(prompt('Задайте число M'));
do{
    numberM = parseFloat(prompt('Задайте число M'));
} while (isNaN(numberM) || (numberM%1!== 0)) {
    console.log('numberM: ', numberM);
};



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