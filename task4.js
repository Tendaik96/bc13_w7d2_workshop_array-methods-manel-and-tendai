let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

//4a
function multipleS(num){
    switch( num){
    case 7:
        return true;
    case 14:
        return true;
    case 21:
        return true;
    case 28:
        return true;
    case 35:
        return true;
    case 42:
        return true;
    case 49: 
        return true;
    case 56:
        return true;
    case 63:
        return true;
    case 70:
        return true;
    default: false;                  
        }

}
const checkSeventable = sevenTimesTable.every(multipleS);
 console.log(checkSeventable)

 //4b
//seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];


 function multipleSS(num){
    switch( num){
    case 77:
        return true;
    case 154:
        return true;
    case 231:
        return true;
    case 308:
        return true;
    case 385:
        return true;
    case 462:
        return true;
    case 539: 
        return true;
    case 616:
        return true;
    case 693:
        return true;
    case 770:
        return true;
    default: false;     
        }
    }

 const checkSStable = seventySevenTimesTable.every(multipleSS);
 console.log(checkSStable)

 //4c
const findSS = seventySevenTimesTable.find((num)=>{
    let divide = num / 7
    //console.log(divide)
    if (!Number.isInteger(divide)){
            return num;
    } /* else{
        console.log(num)
        return num;
        
    } */
    
})
console.log(findSS)

//4d
const findIndexofSS = seventySevenTimesTable.indexOf(461)
console.log(findIndexofSS)
// index of 461 is 5
//correct array and check if there is another rouge value
const SS = [...seventySevenTimesTable]
SS[5] = 462

const NewFindSS = SS.find((num)=>{
    let divide = num / 7
    //console.log(divide)
    if (!Number.isInteger(divide)){
            return num;
    } 
    }
    )
    console.log(NewFindSS)
    //538 is no good

const secondFindIndex = SS.indexOf(538)
console.log(secondFindIndex)
//index 6

const correctSSTable = [...SS]
correctSSTable[6] = 539

