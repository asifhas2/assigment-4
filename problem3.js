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