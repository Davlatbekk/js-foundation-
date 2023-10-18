
// function megicNumber() { 
 
//     let arr = []
//     for(let i = 10; i < 1000; i++) {

//         let bir = i % 10
    
//         let on = parseInt(i / 10) % 10

//         let yuz = parseInt(i / 100)

//         if( yuz == 0) {
             
//             arr.push(i)
//         }else{
//             if( bir == on || bir == yuz || on == yuz ){
//                 arr.push(i)
//             }
//         }
    
//     }

//     return arr
// }
// console.log(megicNumber());






let n = 10000
for (let i = 0; i <= n; i++) {
    if (i %1111 == 0) {
        console.log(i);
    }else if(i% 111 == 0 && n / 10 < 101 ){
        console.log(i);
    }else if (i % 11 == 0 && n / 10 < 11 ){
        console.log(i);
    }
}
