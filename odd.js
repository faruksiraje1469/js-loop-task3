// for (let i = 0; i < 20; i++){
//     if (i % 2 === 1){
//         console.log(i);
//     }
// }



//another way
// for (let i = 1; i < 20; i++){
//    console.log(i);
// }


//5 dara bivajjo number
// for (let i = 0; i < 30; i++){
//     if (i % 3 ===0 || i % 5 === 0){
//         console.log(i);
//     }
// }


// 3 ,5 diya bivajjo number
// for (let i = 1; i <= 30; i++){
//     if (i % 3 ===0 && i % 5 === 0){
//         console.log(i);
//     }
// }



let total = 0;
for (let i = 1; i <= 20; i++){
    if (i % 3 ===0 ){
        console.log(i);
        total = total + i;
        console.log('Total:', total);

    }
        
}
console.log('Total value:', total);
