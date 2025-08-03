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