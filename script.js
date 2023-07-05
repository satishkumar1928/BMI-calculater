let weight;
let height;


weight=prompt("Enter your weight");
height=prompt("Enter your height");


height /= 100;
height *=height;

bmi=weight / height;

if(bmi<= 18.4){
    alert(`yous bmi is ${bmi} which means you are under weight`);
}else if(bmi >=18.5 && bmi <=24.9){
    alert(`your bmi is ${bmi} which means you are normal`);
}else if (bmi>=25 && bmi<=39.9){
    alert(`your bmi is ${bmi} which means your over weight`);
}else if(bmi>=40){
    alert(`your bmi is ${bmi} which means your are obese`);
}