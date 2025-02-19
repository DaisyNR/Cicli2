let dispari = 0;
let num = 0;

for(let i = 1; i <= 20; i++){
    let modulo = i % 2;
    if (modulo == 0) {
        console.log(i);  
    }else{
        num ++ 
        dispari = dispari + i;
    }
}

let media = dispari / num; 
console.log('La media dei numeri dispari è ' + media);


