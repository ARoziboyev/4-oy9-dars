
// 1.at

// 1.Massivning oxiridan berilgan indeksga nisbatan qiymatni topuvchi funksiyani yozing. (Masalan, -1 indeksdan ikkinchi elementni toping.)

// let arr = [1,4,5]
// console.log(arr.at(-1));

// 2.Berilgan massivdagi barcha juft indeksdagi elementlarni yangi massivga yig'uvchi funksiyani yarating.

// let arr = [1, 4, 5, 8, 10];
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr2.push(arr.at(i)); 
//     }
// }

// console.log(arr2);

// 3.Massivning ixtiyoriy indeksidagi qiymatni o'zgartirib, yangi massiv qaytaruvchi funksiyani yarating.

// let arr = [1, 4, 5];

// let index = 1;
// let newValue = 10;

// let newArr = [...arr];
// newArr[index] = newValue;

// console.log(newArr);

// 2.join

// 1.Massivning barcha elementlarini berilgan biriktiruvchi belgi bilan birlashtirib, umumiy uzunligini qaytaruvchi funksiyani yozing.

// let arr = ["olma", "banan", "uzum"];
// let arr2 = ", ";

// let res = arr.join(arr2);
// let sm = res.length;

// console.log(sm);


// 2.Berilgan massiv elementlarini teskari tartibda qo'shuvchi va belgi bilan birlashtiruvchi funksiyani yarating.

// let arr = ["olma", "banan", "uzum"];
// let arr2 = "  ";

// let res = arr.reverse().join(arr2);

// console.log(res); 

// 3.Berilgan massivning faqat toq sonli elementlarini ajratib, ularni biriktiruvchi funksiyani yarating.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         arr2.push(arr[i]);
//     }
// }

// let res = arr2.join(', ');

// console.log(res);


// 3.toStrong

// 1.Massiv elementlarini stringga aylantirib, har bir elementning uzunligini qaytaruvchi funksiyani yarating.

// let arr = ["olma", "banan", "uzum"];
// let arr2 = ", ";

// let res = arr.toString(arr2);
// let sm = res.length;

// console.log(sm, 'sm');


// 2.Massiv elementlarini string shaklida birlashtirib, belgilangan elementni qidiruvchi funksiyani yozing.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr.join(' ');

// let qidirish = '5';
// let res = arr2.indexOf(qidirish) !== -1;

// console.log(arr2);
// console.log(res);


// 6.copyWithing
// 1.Berilgan massivning elementlarini ko'chirish orqali faqat oxirgi uch elementni boshiga o'tkazuvchi funksiyani yozing.


// function sum(array) {

//     array.copyWithin(0, array.length - 3);

//     return array;
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = sum(num);

// console.log(result);

// 2.Massivning bir qismini ko'chirish orqali oxirgi bo'lakni juft indekslarga qo'yuvchi funksiyani yarating.


// function sum(array, segmentSize) {

//     let lastarr = array.slice(-segmentSize);

//     for (let i = 0; i < lastarr.length; i++) {
//         array[2 * i] = lastarr[i];
//     }

//     return array;
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let num2 = 4;
// let res = sum(num, num2);

// console.log(res);  


// 3.Massivning biror qismini boshqa indeksga ko'chirgan holda yangi massiv qaytaruvchi funksiyani yarating.

// function sum(array, start, end, segmentSize) {
//     const segment = array.slice(start, start + segmentSize);

//     for (let i = 0; i < segmentSize; i++) {
//         array[end + i] = segment[i];
//     }

//     if (start + segmentSize < array.length) {
//         array.splice(start, segmentSize);
//     }

//     return array;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const num = 2;
// const num2 = 5;
// const num3 = 3;
// const res = moveSegmentToIndex(arr, num, num2, num3);

// console.log(res);

// 7.flat

// 1.Ichma-ich massivlardan iborat massivni tekis qilib, faqat toq sonlarni o'z ichiga oluvchi yangi massiv yaratuvchi funksiyani yozing.

// function sum(arr) {

//     let flatArray = arr.flat();

//     let Numbers = flatArray.filter(number => number % 2 !== 0);

//     return Numbers;
// }

// let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let res = sum( num );

// console.log(res);


// 3.Ichma-ich massivlarning faqat elementlari yig'indisini qaytaruvchi funksiyani yozing.

// function sum(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//         }
//     }

//     return sum;
// }

// let num = [[1, 2, 3], [4, 5], [6, 7, 8]];
// let res = sum(num);

// console.log(res);


// 8.splice, toSpliced

// 1.Massivdan ixtiyoriy indeksdagi 3 ta elementni olib tashlaydigan va yangi massiv qaytaradigan funksiyani yozing.

// function sum(arr1, arr2) {

//     let newArray = [];

//     for (let i = 0; i < arr2; i++) {
//         newArray.push(arr1[i]);
//     }

//     for (let i = arr2 + 3; i < arr1.length; i++) {
//         newArray.push(arr1[i]);
//     }

//     return newArray;
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let index = 2;
// let res = sum(num, index);

// console.log(res); 



// 2.Massivning boshiga yangi elementlar qo'shib, asl massivni o'zgartiruvchi funksiyani yarating.


// function sum(arr, arr2) {

//     for (let i = arr2.length - 1; i >= 0; i--) {
//         arr.unshift(arr2[i]);
//     }

//     return arr;
// }

// let num = [3, 4, 5];
// let num2 = [1, 2];
// let res = sum(num, num2);

// console.log(res); 


// 9.slice

// 1.Massivning faqat o'rtadagi elementlarini ajratib oluvchi funksiyani yozing.


// function sum(arr) {
//     let length = arr.length;
//     let mid = Math.floor(length / 2);

//     let arr2;
//     if (length % 2 === 0) {
//         arr2 = arr.slice(mid - 1, mid + 1);
//     } else {
//         arr2 = [arr[mid]];
//     }

//     return arr2;
// }

// let num1 = [1, 2, 3, 4, 5, 6];
// let result = sum(num1);

// console.log(result);

// let num2 = [1, 2, 3, 4, 5];
// let res = sum(num2);

// console.log(res);

// 2.Massivning oxirgi qismidan belgilangan uzunlikda yangi massiv qaytaruvchi funksiyani yarating.

// function sum(arr, length) {
//     let result = [];

//     for (let i = arr.length - length; i < arr.length; i++) {
//         if (i >= 0) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// let length = 3;
// let res = sum(num, length);

// console.log(res);


// 3.Massivning faqat juft indekslaridagi elementlardan yangi massiv yaratadigan funksiyani yozing.

// function sum(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// let nums = [10, 20, 30, 40, 50, 60];
// let res = sum(nums);

// console.log(res);

// 11.includes

// 1.Massivning faqat musbat sonlardan iboratligini tekshiruvchi funksiyani yozing.

// function sum(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let num1 = [1, 2, 3, 4, 5];
// let num2 = [1, -2, 3, 4, 5];

// console.log(sum(num1));
// console.log(sum(num2)); 


// 2.Massivda berilgan qiymat mavjudligini tekshirib, mavjud bo'lsa, massivga yana qo'shmaydigan funksiyani yarating.


// function sum(arr, arr2) {
//     if (arr.includes(arr2) === -1) {
//         arr.push(arr2);
//     }
//     return arr;
// }

// const num = [1, 2, 3, 4];
// console.log(sum(num, 3));
// console.log(sum(num, 5));



// 3.Massivda ketma-ketligi bo'yicha elementlar mavjudligini tekshiruvchi funksiyani yarating.

// function sum(arr, arr2) {
//     if (arr.indexOf(arr2) === -1) {
//         arr.push(arr2);
//     }
//     return arr;
// }

// const num = [1, 2, 3, 4];
// console.log(sum(num, 3));
// console.log(sum(num, 5));

// 12.sort

// 1.Berilgan massivni kamayish tartibida saralab, faqat oxirgi uch elementni qaytaruvchi funksiyani yozing.

function sum(arr) {
    let arr2 = arr.slice().sort((a, b) => b - a);

    let arr3 = [];
    for (let i = 0; i < 3; i++) {
        if (i < arr2.length) {
            arr3.push(arr2[i]);
        }
    }

    return arr3;
}

let num = [5, 3, 8, 1, 7, 4];
let res = sum(num);

console.log(res); 
