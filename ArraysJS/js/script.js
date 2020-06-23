// Завдання 1:
arr = [2, -5, -9, 2, -4, 5, 34, -11, 2, -3, 4, 5, -6, 9]
// Задано масив з числовими значеннями 2,-5,-9,2,-4,5,34,-11,2,3-,4,5,-6,9;
// 1. В масиві визначити суму від’ємних елементів
let sum = 0;
arr.forEach(element => {
    if (element < 0)
        sum += element;
});
console.log(sum)
// 2. Знайти добуток елементів, розташованих між найбільшим та
// найменшим елементами.
function between(array, operation) {
    let min = Math.min.apply(null, array);
    let max = Math.max.apply(null, array);

    let indexMin = array.indexOf(min);
    let indexMax = array.indexOf(max);

    if (indexMin > indexMax) {
        [indexMin, indexMax] = [indexMax, indexMin];
    }

    let res = 1;
    switch (operation) {
        case '*':
            for (let index = indexMin; index <= indexMax; index++) {
                res *= array[index];
            }
            break;
        case '+':
            for (let index = indexMin; index <= indexMax; index++) {
                res += array[index];
            }
            break;
        default:
            break;
    }
    return res;
}
console.log(between(arr, "*"));

// Завдання 2:
// Задано масив з числовими значеннями 45,-65,48,52,-45,-78,-96,25,14,25,45;
arr2 = [45, -65, 48, 52, -45, -78, -96, 25, 14, 25, 45]

// 1. В масиві визначити добуток елементів з парними номерами.
let res2 = 1;
arr2.forEach(element => {
    if (arr2.indexOf(element) % 2 == 0)
        res2 *= element;
});
console.log(res2);
// 2. Знайти суму елементів, розташованих між найбільшим та
// найменшим елементами..
console.log(between(arr2, "+"));
// Завдання 3:
// Задано масив з числовими значеннями 45,65,48,52,45,-78,-96,25,14,25,45;
// 1. В одновимірному масиві визначити номер максимального
// елемента масива.
console.log(arr2.indexOf(Math.max.apply(null, arr2)));
// 2. Визначити суму елементів, розташованих до першого від’ємного
// елемента.
sum = 0;
for (let index = 0; index < arr2.length; index++) {
    if (arr2[index] < 0)
        break;
    sum += arr2[index];
}
console.log(sum);
// Завдання 4:
function getRandomArr(lenght) {
    let arr = [];
    for (let i = 0; i < lenght; i++) {
        num = Math.trunc(1 + Math.random() * (5 - 1 + 1));
        arr.push(num);
    }
    return arr;
};
// Задано масив А, що містить 100 цілих чисел. Знайти суму елементів цього
// масиву.
let arrA = getRandomArr(100);
sum = 0;
arrA.forEach(element => {
    sum += element;
});

console.log(arrA);
console.log(sum);
// Завдання 5:
// Задано масив В, що містить 50 цілих чисел. Знайти добуток елементів масиву,
// що є непарними числами.
let arrB = getRandomArr(100);

res = 1;
arrB.forEach(element => {
    if (element % 2 != 0)
        res *= element;
});
console.log(arrB);
console.log(res);

// Завдання 6:
// Задано масив С, що містить 50 цілих чисел. Знайти позицію(позиції) елементу,
// що має мінімальне значення. Якщо таких елементів декілька, сформувати
// додатковий масив індексів

let arrC = getRandomArr(50);

let min = Math.min.apply(null, arrC);
console.log("array");
console.log(arrC);
console.log("minimum value");
console.log(min);
minArr = arrC.filter(element => element == min);
console.log(typeof(minArr));
minArr = Array.from(minArr);
// console.log(typeof(minArr));
// console.log(typeof(minArr[].lenght));

arrLenght = Object.keys(minArr).length;

if (arrLenght > 1) {
    let indexArr = [];
    for (let index = 0; index < arrC.length; index++) {
        if (arrC[index] == min)
            indexArr.push(index);
    }
    console.log(indexArr);
}



