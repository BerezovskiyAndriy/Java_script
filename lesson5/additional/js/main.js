// 1. Дано натуральное число n. Выведите все числа от 1 до n
// let number = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// number(25);

// 2. Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
//    или в порядке убывания в противном случае.
// let numbers = (a,b) => {
//    let x = a;
//    let y = b;
//    if (x < y) {
//        for (let i = a; i <= y; i++) {
//            console.log(i);
//        }
//    } else if (x > y) {
//        for (let i = x; i >= y; i--) {
//            console.log(i);
//        }
//    }
// }
// numbers(35,5);

// 3.  Функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//       EXAMPLE:
//       foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//       foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//       foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let array = [9,8,0,4];
// let number = 2;
// let foo = () => {
//         for (let i = 0; i < array.length; i++) {
//             let x = array[number];
//             if (i === number) {
//                 array[i] = array[i+1]
//                 array[i+1] = x;
//                 console.log(array);
//             }
//         }
//
// }
// foo(array,number)

// 4. Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
//    Зберігаючи при цьому порядок не нульових значень. Довжина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
// let value = [1,0,6,0,3];
// let array = (arr) => {
//    let arrLenght = arr.length;
//    for (let i = 0; i < arrLenght; i++) {
//        if (arr[i] === 0) {
//            arr.push(arr[i])
//            arr.splice(i,1);
//            i--;
//            arrLenght--;
//        }
//    }
// console.log(arr);
// }
// array(value);