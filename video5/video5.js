console.log("Hello world from HTML")
// let arr = [1,2,3,4,5,6,7,8,9,10]
let arr = [
    {name: 'Tuan', age :24},
    {name: 'Kieu', age :23},
    {name: 'Minh', age :26},
    {name: 'Thai', age :24},
    {name: 'Hieu', age :17},
    {name: 'Hoan', age :27},
]
//search filter
let filter = arr.filter((item,index) =>{
    return item && item.age===24;
})

console.log(filter)
//search find
let find = arr.find((item,index) =>{
    return item && item.age===24;
})

console.log(find)