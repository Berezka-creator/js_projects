
s="adsa";

function palindromStr(s){

    let start=0;
    let end =0;
    let newArr=[];

  
    let arr = s.split('');
    let copy = arr;
    let revArr=arr.reverse();

    console.log(revArr);
    console.log(copy);

}

palindromStr(s);




const foo = {
    bar(){
      console.log("Hello, world!");
    },
    name: "Albert",
    age: 26,
  }


  console.log(foo);

n=14;

function numOfSteps(n){
    count=0;

    while(n != 0){
        console.log(n);


        if(n%2 === 0){
        
            n=n/2;
            console.log(n)
           
        }else{
            n=n-1;
            console.log(n)
        }
    
        count++;
      



    }
    return count;
}


function subtract(n){
    
    let str = n.toString().split("");
    let sumReducer = (pr, cu) => parseInt(pr) + parseInt(cu);
    let prodReducer = (pr,cu) => parseInt(pr) * parseInt(cu);


    let sum = str.reduce(sumReducer);
    let product = str.reduce(prodReducer);

  

    return product -sum;

   
    
    // for(i=0; i<str.length;i++){
    //     console.log(i);
    // }

}


nums = [1,2,3,1,1,3];

function numIdenticalPairs(nums) {
    let i=0;
    let j = nums.length-1;
    let count = 0;
    
    while(i<j){
        console.log("i "+nums[i]);
        console.log("j "+ nums[j]);

        if(nums[i]==nums[j]){
            count++;
            
        } 
        j--;
         if(i==j){
            console.log("IF")
            i++;
            j=nums.length-1;
        }
        
    }
    
    console.log("count "+count)
    
};

function loops(){
str = "";
    for(i=0; i<7; i++){
        str += "#";
        console.log(str);
    }
}

function fizzBuzz(){

    for(i=0; i<=100; i++){

        if(i %3==0 && i%5==0){
            console.log("FizzBuzz");
        }

        if(i%3 == 0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}


function chessBoard(){

    let str =""

    for(let j=1; j<=8;j++){
        
            for(let i=0;i<4;i++){
 
               if(j%2!=0){
                   str +=" #";
               }else{
                   str +="# ";
               }
            }

        console.log(str)
        str ="";
     
    } 
}


// let strs = ["flower","flat","flor"];

// function prifix(strs){

//     for (let i=0; i<strs[0].length; i++){
//         console.log("strs[0][i] " +strs[0][i])
//         console.log(" strs[strs.length -1][i] " + strs[strs.length -1][i])

//         if(strs[0][i] !== strs[strs.length -1][i]){
//             return strs[0].substr(0, i);    
//         }
//     }
//  console.log(strs[0]);
//     return strs[0];
  
// }
// prifix(strs);


// let s = "IX";

// function romNums(s){

//     let roman = new Map();
//     roman.set("I", 1);
//     roman.set("V", 5);
//     roman.set("X", 10);
//     roman.set("L", 50);
//     roman.set("C", 100);
//     roman.set("D", 500);
//     roman.set("M", 1000);
//     console.log(roman);
//     let answer = 0;

//     for ( let i=0; i<s.length; i++ ){
//         console.log(s[i]);

//         for(let [key, value] of roman){
          
//             if(s[i]=== key){
//                 answer +=value;
//                 console.log(answer);

//                 if((s[i]+s[i+1] == "IV") || 
//                 (s[i]+s[i+1] == "IX") ||
//                 (s[i] + s[i+1] == "XL") ||
//                 (s[i] + s[i+1] == "XC") ||
//                 (s[i]+s[i+1] == "CD") ||
//                 (s[i]+s[i+1] == "CM") 
//                 ){
//                     answer -=value*2;
//                     console.log(answer)
    
//                 }
//             }
//         }
//     }
//     return answer;
// }

// romNums(s);

// let x=1234;

// function palindrom(x){
//     let num =String(x).split("");
//     let left = 0;
//     let right = num.length-1;
   
//     let answer = false;

//     for(var i=left; i<right; i++){
//         console.log(num[left]+ ", "+num[right]);
//         if(num[left] !== num[right]){
//             return false;
//         }else{
           
//             left++;
//             right--;

//         }
//     }

//     return true;
    // while(left < right){
    //     console.log(x[left]);
    //     if(x[left] !== x[right]){
            
    //         break;
          

    //     }else{
    //         left++;
    //         right--
    //     }

    // }
  
// }

// palindrom(x);

// var isPalindrome = function(x) {
//     const s = String(x).split("")
//     for(let i = 0; i < s.length; i++){
//         if(s[i] !== s[s.length - i - 1]) return false
//     }
//     return true
// };

// let s="kacka";

// function longestSub(s){
//     let start=0, end=0;
//     let saveLength = 0;
//     let tempStr = '';
    
//     while(end !== s.length){
//         console.log("s[end] "+s[end])
//         if(!tempStr.includes(s[end])){
//             end++;
//             tempStr = s.slice(start, end);
//             console.log(tempStr)
//         }else{
//             start++;
//             tempStr = tempStr.substring(1);
//             console.log(tempStr)
//         }
//         if(tempStr.length > saveLength){
//             saveLength = tempStr.length;   
//         }
//     }
//     console.log(tempStr)
//     return saveLength;


// }

// longestSub(s);
  // let map = new Map()
    // let max = 0
    // let start = 0
  
    // for (let i = 0; i < s.length; i++) {
    //   const char = s[i];
    //   console.log(char);
    //   console.log(map);
  
    //   if (map.has(char)) {
    //     start = Math.max(start, map.get(char) + 1);
        
      
    //   }

    //   console.log("i " +i);
    //   console.log("start "+ start);
    //   console.log("max "+ max);

  
    //   max = Math.max(max, i - start + 1);

    //   map.set(char, i)
    // }
  
    // return max


// let nums = [0,3,12]
// // [1,3,12,0]

// function moveZeroes(nums){

//     let begin = 0;
//     let end = nums.length -1;
//     console.log(nums);

//     while (begin < end){
//         if(nums[begin] === 0){
//             let store = nums[begin];
//             console.log("store " +store);
           
//             nums[begin] = nums[begin+1];
//             nums[begin] = store;
//         }   
//     }
// }

// moveZeroes(nums);



// let nums= [1,2,3,4,5];
// let k = 2;

// function rotateArray(nums, k){

//     k%=nums.length;
 
//         let endNums = nums.splice(nums.length- k);

//         nums.unshift(...endNums);

//        return nums;
    
     
// }

// rotateArray(nums, k);


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