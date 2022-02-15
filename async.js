async function ball1(){
    if(true){
        return('ball one ajrashod');
    }else{
        throw new Error('ball one peydanshod');
    }
}
function ball2(){
    if(true){
        return('ball two ajrashod');
    }else{
        throw new Error('ball two peydanshod');
    }
}
function ball3(){
    if(true){
        return('ball three ajrashod');
    }else{
        throw new Error('ball three peydanshod');
    }
}
function ball4(){
    if(true){
        return('ball for ajrashod');
    }else{
        throw new Error('ball for peydanshod');
    }
}

async function execute(){
    console.log(await ball1());
    console.log(await ball2());
    console.log(await ball3());
    console.log(await ball4());

}
execute();