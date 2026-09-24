class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix=1;
        let output=new Array(nums.length)
        for(let i=0; i<nums.length; i++){
            output[i]=prefix;
            prefix*=nums[i];
        }
        let postfix=1;
        for(let i=nums.length-1; i>=0; i--){
            output[i]*=postfix;
            postfix*=nums[i];
        }

        return output;
    }
}
