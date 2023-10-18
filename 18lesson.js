let str = "abccva"

function palidrom(arr){
    let flag = false
    for (let i = 0; i <= arr.length/2; i++) {
        if(arr[i] == arr[arr.length-1-i]){
            flag = true
        }else{
            flag = false
            break
        }
        
    }

    if(flag){
        console.log(`${arr} palidrom soz`);
    }else{
        console.log(`${arr} palidrom soz emas`);

    }
}


palidrom(str)









// let arr = [ 712, 234, 9, -2, 600,12, 9, 3,24] 

// let max = arr[0]

// let max_second = arr[1]

// function max_num(arr){
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > max){
//             max_second = max
//             max = arr[i]
//         }else if(max_second < max && max_second < arr[i]){
//             max_second = arr[i]  
//         }
//     }
//     return max_second
// }
// console.log(max_num(arr))