function ball1(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('ball one ajrashod');
        }else{
           reject('ball one peydanshod');     
        }
    });
}
function ball2(){
    return new Promise((resolve,reject)=>{
       if(true){
           resolve('ball two ajrashod')
       }else{
           reject('ball two peydanshod')
       }
    });
}
function ball3(){
    return new Promise((resolve,reject)=>{
       if(true){
           resolve('ball three ajrashod')
       }else{
           reject('ball three peydanshod')
       }
    });
}
function ball4(){
    return new Promise((resolve,reject)=>{
       if(true){
           resolve('ball fore ajrashod')
       }else{
           reject('ball fore peydanshod')
       }
    });
}

ball1().then((msg)=>{
    console.log(msg)
    return ball2();
}).then((msg)=>{
    console.log(msg)
    return ball3();
}).then((msg)=>{
    console.log(msg)
})  