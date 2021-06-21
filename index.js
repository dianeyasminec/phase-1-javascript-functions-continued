// Your code here
function saturdayFun (activity="roller-skate"){
 return "This Saturday, I want to "+activity+"!"
}


function mondayWork(activity="go to the office"){
    return "This Monday, I will "+activity+"."
}

function wrapAdjective (string="*"){
    
        return function(string2){
            const var1="You are"
            
            return var1+" "+string+string2+string+"!"
            

        }
    

}
let result=wrapAdjective()
let emphatic=result("a hard worker")
console.log(emphatic)