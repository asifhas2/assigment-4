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