
let nums= [1,2,3,4,5];
let k = 2;

function rotateArray(nums, k){

    k%=nums.length;
 
        let endNums = nums.splice(nums.length- k);

        nums.unshift(...endNums);

       return nums;
    
     
}

rotateArray(nums, k);


// let nums = [-10,-1,2,5];
// res = [1, 4,25,100]

// function twoPointers(nums){
//     let start = 0;
//     let end = nums.length-1;
//     let array =[];

//     while (start < end){
//         let startNum = nums[start]*nums[start];
//         let endNum = nums[end]*nums[end];
//         console.log(startNum +" , "+ endNum);

//         if (startNum > endNum){
//             array.unshift(startNum);
//             console.log(array);
//             start ++;
           
//         }else{
//             array.unshift(endNum);
//             end --;
//         } 
//     }
//     return array;
// }

// twoPointers(nums);



// let nums = [-4, -1, 2,3,4,5];
// function sortedSquare(nums){

//     let newNums = nums.map(n => {
//         console.log(Math.pow(n, 2));
//         return Math.pow(n, 2);
//     });
//     console.log(newNums);
//     console.log(newNums.sort((a,b) => {return a-b}))
// }

// sortedSquare(nums);

//Search Insert Position

// let nums = [1,3,5,6];
// let target = 4;

// function insertPosition(nums, target){

//     let low = 0;
//     let high = nums.length;
//     let mid;

//     while (low < high){
//         mid = Math.floor((low + high)/2);
//         console.log("mid = "+mid);

//         if(target === nums[mid]){
//             return mid;
//         }else if(target > nums[mid]){
//             low = mid;
//             //
//         }else{
//             high = mid-1;
//         }
//     }
// }
// insertPosition(nums, target)


//Binary SEarch

// var arr = [-1,0,3,5,9,12];
// var target = 9;

// function binarySearch(arr, target){
//     let low = 0;
//     let high = arr.length -1;
//     let mid;

//     if(target < arr[0] || target > arr[high]) return -1 

//     //because it issorted array, we can see if target less than firstelement 
//     //of array and bigger than last element of array itdoesn't exist and return -1
   
//         while(low <= high){
//             mid = low + Math.floor((high - low)/2);
//             console.log(low, high, mid);
        

//             if(arr[mid] === target){
//                 console.log(mid)
//                 return mid;
//             }else if(target > arr[mid]){
//                 low = mid+1;
//             }else{
//                 high = mid -1;
                
//             }
              
//         }
//         return -1
// }

// binarySearch(arr, target);


// const nums =[1,3,4,2]
// const target = 6
// function twoSum(nums, target){
//     let mapOfNumbers = {};
//     let twoIndexes = [];

//     for(i=0; i<nums.length; i++){
//         mapOfNumbers[nums[i]] = i;
       
//     }

//     for(i=0; i<nums.length; i++){

//         let goal = target - nums[i];
       
//         if(mapOfNumbers[goal]){

//             if(i !== mapOfNumbers[goal]){

//                 twoIndexes.push(i, mapOfNumbers[goal]);
//                 return twoIndexes;

//             }
//         }

//     }
  
// }

// twoSum(nums, target);

// // for(i=0; i <= nums.length-1; i++){
      
// //     for(j=0; j <=nums.length-1; j++){
      

// //       if(nums[i] + nums[j] === target){
// //           return new Array[i, j]
         
// //       }


// //     }
// // }