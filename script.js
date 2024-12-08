//Operators
//Arithmetic operator
 let x = '5-2';
 console.log(x);

 //addition
 let a = '5+3';
 console.log(a);
 //multiply
 let b = '2*2';
 console.log(b)

 //assignment oberator
 let y = 5;
 y+=4;
 console.log(y);

 //loops
 //for loop
 for(i=0; i<=10; i++){
    console.log("shamsa")
 }

 //for loop array

 let personc = ["ali", "ahmed", "ayaan"]

 for(i=1; i=person.length; i++){
    console.log(person[i])
 }

 //while loop

 let i =1;
 while(i<=10){
    console.log(i);
    i++;
 }
 
 //do while loop

 let j =1;
 do{
    console.log(j);
    j++;

 }while(j<=5);

 //break / continue
 for(let i=1; i<=5; i++){
    if(i==3){
        break;
    }
    console.log(i);
 }
//switch

 let value = 43;

 switch(typeof value){
    case "number":
        console.log("Number");
        break;
    case "string":
        console.log("string");
        break;
    case "boolean":
        console.log("boolean");
        break;
    default:
        console.log("other");
        break;
    
 }

 let dayName = 3;
 switch(typeof dayName){
    case 1:
        dayName = "suturday";
        break;
    case 2:
        dayName = "sunday";
        break;
    case 3:
        dayName = "monday";
        break;
    case 4:
        dayName = "tuesday";
        break;
    case 5:
        dayName = "wednesday";
        break;
    default:
        dayName = "free";
 }
 console.log("the day is " +dayName);
