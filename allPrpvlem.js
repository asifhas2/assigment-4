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
else if(Array.isArray(player1) || Array.isArray(player2)){
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