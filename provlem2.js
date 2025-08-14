function  onlyCharacter( str ) {
          // You have to write your code here

        if(typeof str !== 'string'){
            return 'Invalid'
        }

        let noSpace = str.split(" ").join("");
        let fainal = noSpace.toUpperCase();
        return fainal ; 
}
console.log(onlyCharacter([" ha ck m e 1 @ru.c  n  "]))