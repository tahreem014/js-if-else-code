

let strength = 50;
const totalStrength = 50;
if ( totalStrength == strength ) {
   console.log("all present");
 }
else {
  console.log("some are absent");
} 

function resultNum(marks,number) {
  console.log(number);
  if(marks >= 80 && marks <=100){
    console.log("grade is A");
  }else if(marks >= 70 && marks < 80){
    console.log("grade is B");
  }else if(marks >= 60 && marks < 70){
    console.log("grade is C");
  }else if(marks >= 50 && marks < 60){
    console.log("grade is D");
  }else if(marks >=0 && marks < 50){
    console.log("grade is F");
  }else {
    console.log("invalid input");
  }
}
console.log(resultNum(67,60));