// level {2}

const removeEvenNo = (arr)=>{
    let newArr = []
    arr.forEach((data)=>{
        if(data%2!=0){
            newArr.push(data)
        }
    })
    return newArr;
}

const vowelsUpperCase = (str)=>{
    let vowels = ['a','e','i','o','u',]
    let arr = []
    for(let i=0 ; i<str.length ; i++){
        arr.push(str[i])
    }
    let newArr = arr.map((data)=>{
        if(vowels.includes(data)){
            return data.toUpperCase()
        }else {
            return data
        }
    })
    str = ""
    newArr.forEach((data)=>{
        str = str + data
    })

    return str
}


const findMaxNo = (arr)=>{
    let maxNo = arr[0];
    arr.map((data)=>{
        if(maxNo<data){
            maxNo = data
        }
    })
    return maxNo;
}