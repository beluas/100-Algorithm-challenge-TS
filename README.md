# 100-Algorithm-challenge-TS

100 Algorithms challenge using Typescript

# Add n numbers Algorithm

1. Function : return the sum of 2 numbers
2. Function : return the sum of indefinite number of elements

function add(param1: number, param2: number): number {
return param1 + param2;
}

function add2(...param1: number[]): number {
return param1.reduce((tot: number, num: number) => tot + num);
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
