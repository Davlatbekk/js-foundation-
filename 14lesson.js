let str = "Salom"
let output = ""
for (let index = 0; index < str.length; index++) {
    if(str[index] == "a" || str[index] == "o" || str[index] == "i" || str[index] == "o'"  ){
        output += "#"
    }else{
        output += str[index]
    }
}
console.log(output);
