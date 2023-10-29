// ALL COUNTERuP CORD
let counterUp = document.querySelectorAll(".counterUp");
let arr = Array.from(counterUp);

// NTERVAL CODE

let interimTime = arr.map((item) => {
  return item.dataset.num;
});

function myArrMax(arr) {
  return Math.max.apply(null, arr);
}

let maxNum = myArrMax(interimTime);

let interval = maxNum * 10;

// INTERVAL CODE

arr.map((item) => {
  let counter = 0;
  let count = () => {
    counter++;
    item.innerHTML = counter;
    if (item.dataset.num == counter) {
      clearInterval(stop);
    }
  };

  let stop = setInterval(() => {
    count();
  }, interval/item.dataset.num);
});

// ALL COUNTERuP CORD 
































// let counterUp = document.querySelectorAll(".counterUp");
// let arr = Array.from(counterUp);
// console.log(arr)

// // let x = (arr) => {
// //   let maxNum = arr[0];
// //   for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > maxNum) {
// //       maxNum = arr[i];
// //     }
// //   }
// //   return maxNum;
// // };
// // const array = [1,10, 3, 7, 25, 15, 40, 50,233];
// // const largestNumber = x(array);

// // console.log("The largest number in the array is:", largestNumber);

// arr.map((item) => {
//   let counter = 0;
//   let x = Array.from(item.dataset.num)
//   console.log(x)

//   // let interval = (...arrX) => {
//   //   let maxNum = arrX[0];
//   //   for (let i = 1 ; i < arrX.length; i++) {
//   //     if (arrX[i] > maxNum) {
//   //       maxNum = arrX[i];
//   //     }
//   //   }
//   //   return maxNum
//   // };
//   // let y = [item.dataset.num];
//   // let n = [y]
//   // let arra = interval(y);

//   // console.log(arra);
//   // let count = () => {
//   //   counter++;
//   //   item.innerHTML = counter;
//   //   if (counter == item.dataset.num) {
//   //     clearInterval(stop);
//   //   }
//   // };

//   // let stop = setInterval(() => {
//   //   count();
//   // }, interval() / item.dataset.num);
// });

// // let counterUp = document.querySelectorAll(".counterUp");

// // let arr = Array.from(counterUp);

// // arr.map((item) => {
// //   let counter = 0;

// //   function count() {
// //     counter++;
// //     item.innerHTML = counter;
// //     if (counter == item.dataset.num) {
// //       clearInterval(stop);
// //     }
// //   }

// //   let stop = setInterval(() => {
// //     count();
// //   }, 500/item.dataset.num);
// // });

// function findLargestNumber(arr) {
//     let maxNumber = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxNumber) {
//         maxNumber = arr[i];
//       }
//     }

//     return maxNumber;
//   }

//   const array = [10, 3, 7, 25, 15, 40, 50];
//   const largestNumber = findLargestNumber(array);
//   console.log("The largest number in the array is:", largestNumber);
