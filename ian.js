function ianForEach(array, fn) {
    for( let i = 0; i < array.length; i++){
        fn(array[i], i)
    }
}

function ianFilter(array, fn) {
    const newArray = [];
    for( let i = 0; i < array.length; i++){
        if(fn(array[i]), i){
            newArray.push(array[i])
        }
    }
    return newArray
}


function ianMap(array, fn){
    const newArray = [];
    for( let i = 0; i < array.length; i++){
        newArray.push(fn(array[i]))
    }
    return newArray
}

function ianFind(array, fn){
        for(let i = 0; i < array.length; i++){
            if(fn(array[i])){
                return array[i];
            }
        }
}


function ianFindIndex(array, fn){
    let answer = -1;
    for(let i = 0; i < array.length; i++){
            if(fn(array[i]), i){
                return i;
            }
        }
    return answer
}

function ianContains(array, value, fromIndex = 0){
    for(fromIndex; fromIndex < array.length; fromIndex++){
        if(array[fromIndex] == value){
            return true
         }
    }
    return false
}



function ianPluck(array,value){
    const newArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i] == value){
            newArray.push(array[i])
        }
    }
    return newArray
}



function ianWithout(array,value){
    const newArray = []

    for(let i = 0; i < array.length; i++){
        if(array[i] !== value){
            newArray.push(array[i])
        }
    }
    return newArray
}
