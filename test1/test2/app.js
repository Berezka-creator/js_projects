
let nums = [0,3,12]
// [1,3,12,0]

function moveZeroes(nums){

    let begin = 0;
    let end = nums.length -1;
    console.log(nums);

    while (begin < end){
        if(nums[begin] === 0){
            let store = nums[begin];
            console.log("store " +store);
           
            nums[begin] = nums[begin+1];
            nums[begin] = store;
        }   
    }
}

moveZeroes(nums)


