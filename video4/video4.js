console.log("Hello world from HTML")
let sum = (a,b,callback) => {
    let tong = a+b
    setTimeout(() => {
        callback(tong)
    },5000)
    
}


let printsum = (numbera) => {
    console.log('Tong', numbera)
}

sum(5,3,printsum)
