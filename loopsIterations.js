// level {2}

const fibonacciSeries = (input)=>{
    let n1 = 0;
    let n2 = 1;
    let n3 = 0;
    let sum = 1;


    for(let i=0 ;i<input-1;i++){
        n3 = n1 + n2;
        n1 = n2
        n2 = n3;
        sum = sum + n3;
        console.log(n3)
        console.log("sum",sum)
    }
    return sum
}
