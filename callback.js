/*function Sum(x, y){
    return x+y;
}
function sumWithMsg(callback,msg){
    const result=callback(20,30);
    const fresult="Hi "+msg+" Your score is: "+result;
    console.log(fresult);
}
sumWithMsg(Sum,"Ms. Anshi");*/

function username(user,pass){
    if(user==pass){
        console.log("Your username is correct");
    }
    else 
       console.log("your username is incorrect");
}
function  result(callback,msg){
    const Msg=callback("Anshi","Anshi");
}
result(username,"Yes");