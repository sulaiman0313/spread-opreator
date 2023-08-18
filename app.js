

// let brand={
//     name:'nike',
//     origin:"Argentina",
//     since:1879,
//     owner:'suleman'
// }

// function samebrand({name,origin}){
//     console.log(name)
//     console.log(origin)

// }
// samebrand(brand)

// function cat(...arrs){
//     for(let i of arrs){
//         console.log(arrs)
//     }
// }
// cat(10,12,13)


let arr=[1,2,3,4]
let arr2=[5,6,7,8]
let arr3=[...arr,...arr2]

console.log(arr3)


