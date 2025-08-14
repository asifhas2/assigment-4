function totalFine( fare ) {
          // You have to write your code here
    if( typeof fare !== 'number' || fare <=0) {
        return 'Invalid'
    }


    let fine = fare + fare*(20/100)+30;
    return fine;

}


function  onlyCharacter( str ) {
          // You have to write your code here

        if(typeof str !== 'string'){
            return 'Invalid'
        }

        let noSpace = str.split(" ").join("");
        let fainal = noSpace.toUpperCase();
        return fainal ; 
}


function  bestTeam( player1, player2 ) {
          // You have to write your code here
if(typeof player1 !=='object'){
    return 'Invalid'
}
else if(typeof player2 !=='object'){
    return 'Invalid'
}

let team1 = player1.foul + player1.cardY + player1.cardR;
let team2 = player2.foul + player2.cardY + player2.cardR;

if(team1<team2){
    return player1.name;
     
}
else if(team1 = team2){
    return 'Tie'
}
else if(team2<team1){
    return player2.name
}
    

}


function  isSame(arr1 , arr2 ) {
          // You have to write your code here
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return 'Invalid'
    }

   if(arr1.length !== arr2.length){
    return false;
   }
   for(let i = 0; i<arr1.length;i++){
    if(arr1[i] !== arr2[i]){
        return false;
    }
   }
return true;

}


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



// console.log(totalFine(200))
// console.log(onlyCharacter("  h e llo wor   ld" ))
// console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }))
// console.log(isSame([1, undefined , 3] , [1,null ,3]))
// console.log(resultReport(100))

