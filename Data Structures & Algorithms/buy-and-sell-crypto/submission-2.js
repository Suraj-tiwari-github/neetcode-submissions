class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit=0;
        let buy=0;
        let sell=1;
        while(sell<prices.length){
            if(prices[sell]<prices[buy]){
                buy=sell;
                sell++
            }
            else{
                if(prices[sell]-prices[buy]>maxProfit){
                    maxProfit=prices[sell]-prices[buy]
                }
                sell++;
            }
        }

        return maxProfit;
    }
}
