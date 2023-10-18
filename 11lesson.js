let a = 3
let b = 5
let x = 21

if( x % a == 0 && x % b == 0 ){
    console.log("ikalasiga ham bolinadi");
}else if(x % 5 ==0){
    console.log("b ga bolinadi");
}else if(x % a == 0 ){
    console.log("a ga bolinadi");
}else{
    console.log("ikalasiga ham bolinmaydi");
}