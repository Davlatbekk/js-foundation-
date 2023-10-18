let foundation = [122225,"Kamron","Muhammadamin","Alisher"]
console.log(foundation)

foundation[1] = 2
console.log(foundation)


let str = "Zafar"
console.log(str[0]);



let bmw= { 
	model: "BMW",
    years: 2023,
    color: "black",
    engine: "v8"
 }

 let mers = { 
	model: "MERS",
    years: 2022,
    color: "white",
    engine: "v12"
 }

 let cars = [bmw, mers]

 console.log(cars[0].model);

 console.log(cars[0].color == "white");


// let bmw = ["BMW", 2023, "black", "v8"]
// let mers = ["MERS", 2022, "white", "v12"]

// let cars = {
//     car1: bmw,
//     car2: mers
// }

// console.log(cars.car1);


let x = [0]
x.push("qwerty")
console.log(x);
x.pop()
console.log(x);
