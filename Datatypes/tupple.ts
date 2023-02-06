let swapNumbers: [number, number];

function swapNumb(num1,num2): [number, number] {
    return [num2, num1];
}

swapNumbers = swapNumb(1,2);
console.log(swapNumbers);
