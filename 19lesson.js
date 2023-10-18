// function kombination(str) { 
//     for (let i = 0; i < str.length; i++) {
//         for (let k = 1; k < str.length; k++) {
//             if()
//         }
//     }
// }
// let x = "dog"
// kombination(x)


// function sorting(str) {
//     return str.split("").sort().join("")
// }

// console.log(sorting("qwertgvfcx"))



function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));













// function teskari(x) {
//     let str = x.toString()
//     let y = ''
  
//     for (let i =str.length-1; i >= 0; i--) {
//         y += str[i]
//         // console.log(str[i]);
//     }
//     console.log(y);
// }

// let x =1234
// teskari(x)