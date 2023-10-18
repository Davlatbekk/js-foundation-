let arr = [1,3,5,6,8,9]



function summ(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    }
    return sum
}


console.log(summ(arr))


 //function max_num(x,y,z) {
//     if(x>y && x >z ){
//         return `${x} katta`
//     }else if(y>x && y >z){
//         return `${y} katta`
//     }else{
//         return `${z} katta`
//     }
// }

// function min_num(x,y,z) {
//     if(x<y && x <z ){
//         return `${x} kicik`
//     }else if(y<x && y <z){
//         return `${y} kicik`
//     }else{
//         return `${z} kicik`
//     }
// }

// let a = 4
// let b = 6
// let c = 8

// console.log(max_num(a,b,c))
// console.log(min_num(a,b,c))








//     let speed = 945
// const max_speed = 60
// const coin_speed = 5
// const coin_max = 12
// let coins = 0
// let km = 0
// let speed_limit = 300
// console.log(parseInt(1.8))


// if(speed - 5 > max_speed){
//     coins =parseInt( ((speed-5) - max_speed) / coin_speed )
//     km = speed - max_speed -5
//     if(coins >= 12){
//         console.log(`prava olib quyildi! sizda,${coins}ta coins bor.Siz max tezlikdan ${km}km oshdingiz`);
//     }else{
//         console.log(`sizda ${coins} ta coins bor.Siz max tezlikdan ${km}km oshdingiz`);
//     }
// }else{
//     console.log(`Hammasi yaxshi.Sizning tezligingiz ${speed}km`);
// }

