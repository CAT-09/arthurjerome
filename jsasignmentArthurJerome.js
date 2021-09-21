//You declared the function tests and returns test2 as the value of 
//the greater variable. This is because the ternary operator will always evaluate to false irrespective of the values 
//provided to test1 or test2 variables. //The code within the tests function was not, also closed off with a curlyy brace 
//function tests (test1, test2) {
    let greater = test1 > test1? test1 : test2
    return greater


//A function called coursework is defined. In it, a parameter called cswork is put. The function logs (to the
    //console) and returns the coursework variable. To the coursework variable, the value of the cswork argument and the 
    //results of the tests function (in which the parameters of 80 and 80) have been summed. 

function coursework (cswork){
    let coursework = cswork + tests(80, 80)
    console.log(coursework)
    return coursework
}


//A new function avg is defined.It contains the avg variable that returns the value of coursework with a cswork argument 
//of 90 whichis divided by an a, a new parameter. 


function avg(a)
 {
 let avg =coursework(90)/a  //avg = 170/a
 return avg

 }

 
 //The crsmark function contains the exm variable that stores and returns the value of the product between the return value
 //from the avg function with an argument of 2 and the a variable divided by 100. 
 
 
 function crsmark(a)
 {
 let exm = avg(2)*(a/100) //exm = 85 * (a/100)
  return exm 
 }

 
 //The exam function holds and returns the fexam variable. The fexam variable contains the product of 0.6 and the arguments
 //passed through the a parameter. 
 
 
 function exam(a)
 {
 let fexam = (60/100)*a //fexam = 0.6*a
 return fexam

 }


//The fnal function contains the fmark variable that is the sum of the return values from the exam function and the crsmark
//function respectively. The value of the computation is, thereafter, logged to the console. 

 function fnal()
 {
 let fmark = exam(75)+crsmark(40) //fmark = (0.6*75) +  (85*40/100)
 console.log(fmark)  

 }
 fnal()  
 //If a syntax of the very first function was right, the value 79 would have been logged onto the console
        //when this function is called