function numberToDay(n){
    let day ="";
    switch(n){
            case 1:
                console.log("monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log(" Wednsday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("day is not available");}   
return day;
}
let v=numberToDay(6);
console.log(v);

function maxNumber(a,b,c){
    
    let max = a;

if (b > max) {
    max = b;
}
if(c > max) {
    max = c;
}
return max;
}
let o=maxNumber(2,3,7);
console.log("le max est "+o);


function myGradeScore(score){
    
switch (true){
    case score>85:
        console.log("grade is A.");
        break;
    case score<=85 && score>70:
        console.log("grade is B.");
        break;
    case score<=70 && score>55:
        console.log("grade is C.");
        break;
    case score<=55 && score>40:
        console.log("  grade is D.");
        break;
    case score <=40 && score>15:
        console.log("grade is E.");
        break;
    case score<= 15:
        console.log("grade is D.");
        break;
    default:
        console.log("add a number between 0 and 100!");
        
              
        
}
 return score;   
}
let p=myGradeScore(70);



function factoriel(num) {
   let sum = 1
for(let i=1;i<=num;++i ){ 
        sum=sum*i;
}
return sum;
}

let b =factoriel(5);
console.log(b);



function combination(c,d){
let fa= factoriel(c)/(factoriel(d)*factoriel(c-d));
    return fa;
}    
    
    
let ss=combination(5, 2);
console.log("la combinaison"+ss);


function nDigits(n){
    let i=0;
    do {
    n = Math.floor(n / 10);
    i++;
} while (n !== 0);

return i;
    
}
let q=nDigits(3450);
console.log(q);




function calculator (a,op,b){
    let k;
    switch (op){
        case "+":
         k= console.log(a+b);
            break;
        case "-":
           k= console.log(a-b);
            break;
        case "*":
            k=console.log(a*b);
            break;
        case "/":
           k= console.log(a/b);
            break;
        case "%":
            k=console.log(a%b);
            break;

        case "c":
           k= console.log(combination(a,b));
            break;
        default:
            console.log("error operator");
    }
    return k;
    
}
let mm=calculator(5,"c",2);
console.log(mm);



let np=3; 

for( let i=0; i<=np;i++) {
let row= "";
    for(let j=0; j<=np-1; j++) {
        row=row +" ";
    }
    
    for (let z=0; z<2*i+1; z++) {
        row+="*";
    }

    console.log(row);

   
    row="";
}
