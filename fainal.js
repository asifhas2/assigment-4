/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var result = area / 2;
console.log(result);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >=25000){
    console.log('Laptop')
}
else if (money >=10000){
    console.log('Cycle')
}
else{
    console.log('Chocolate')
}


/** Problem -03 ( Medicine Planner ) */
var lastDay =11 ;
//write your code here
for(var i =1; i<=lastDay; i++){
    if(i %3 ===0){
        var result = i.toString() + ' - medicine';
        console.log(result)
        
    }
    else {
         var result = i.toString() + ' - rest';
        console.log(result)
        
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if(fileName.startsWith('#')){
    console.log('Store');
}
 else if(fileName.endsWith('.pdf')){
    console.log('Store');
}
else if(fileName.endsWith('.docx')){
    console.log('Store');
}
else{
    console.log('Delete')
}


/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var email = student.name+student.roll.toString()+'.'+student.department+'@ph.ac.bd';
console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience =3
var startingSalary = 15000
//write your code here
  var totalYear = experience;
  var presentSalary =startingSalary;
  for(var yearCount =1; yearCount<=totalYear; yearCount++){
    presentSalary=presentSalary+(presentSalary*0.05);
  }
  var salary= presentSalary.toFixed(2);
  console.log(salary)
