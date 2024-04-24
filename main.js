var arr = [1, 2, 3, 1, 2];

var newArr = [];
newArr = arr.slice(2, -2);

console.log(newArr)

function without(array, ...args) {

    return array.filter(item => !args.includes(item));
}

const data1 = [1, 2, 3, 1, 2];
console.log(without(data1, 1, 2)); 

function unique(array) {
    const uniqueValues = new Set(array);
    return [...uniqueValues];
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); 