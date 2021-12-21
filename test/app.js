
const nums =[1,3,4,2]
const target = 6
function twoSum(nums, target){
    let mapOfNumbers = {};
    let twoIndexes = [];

    for(i=0; i<nums.length; i++){
        mapOfNumbers[nums[i]] = i;
       
    }

    for(i=0; i<nums.length; i++){

        let goal = target - nums[i];
       
        if(mapOfNumbers[goal]){

            if(i !== mapOfNumbers[goal]){

                twoIndexes.push(i, mapOfNumbers[goal]);
                return twoIndexes;

            }
        }

    }
  
}

twoSum(nums, target);

// for(i=0; i <= nums.length-1; i++){
      
//     for(j=0; j <=nums.length-1; j++){
      

//       if(nums[i] + nums[j] === target){
//           return new Array[i, j]
         
//       }


//     }
// }