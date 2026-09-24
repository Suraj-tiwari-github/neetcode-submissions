class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map={};

        for(let i=0; i<nums.length; i++){
            let value=nums[i];
            let result=target-value;

            if(map[result]!==undefined){
                return [map[result],i]
            }

            else{
                map[value]=i;
            }
            
        }
    }
}
