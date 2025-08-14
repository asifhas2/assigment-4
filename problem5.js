function  resultReport( marks ) {
          // You have to write your code here
if(!Array.isArray(marks)){
    return 'Invalid'
}
    
let fainalScore = 0;
let pass = 0;
let fail = 0;
for(let i =0; i<marks.length; i++){
    fainalScore = fainalScore + marks[i];

//    fainalScore = Score/marks.length;


    if(marks[i]>= 40){
        pass++;
    }
    else{
        fail++;
    }
}
let avg = fainalScore/marks.length;
let avgFloor = Math.floor(avg);
if(Number.isNaN(avgFloor)){
    avgFloor = 0;
}

const result = {
 finalScore:avgFloor,
 pass:pass,
 fail:fail
} 

return result;
        
}
let result =[]
console.log(resultReport(result))
