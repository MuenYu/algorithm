package main

import "fmt"

func main() {
	prices := []int{2, 1, 4, 5, 2, 9, 7}
	fmt.Println(maxProfit(prices))
}

func maxProfit(prices []int) int {
	// 第1天初始状态
	buy1 := -prices[0] //如果在第一天买入
	sale1 := 0         //如果在第一天卖出（在第一天买了再卖，所以不挣钱）
	buy2 := -prices[0] //如果在第一天买了卖然后再买
	sale2 := 0         //如果在第一天买了卖，然后再买了卖，同样不挣钱
	for i := 0; i < len(prices); i++ {
		buy1 = max(buy1, -prices[i])       //第一次是否买入，买入或者不操作，选择挣得多的那一个
		sale1 = max(sale1, buy1+prices[i]) //第一次买入后，卖出或不卖留着，选择挣得多的那个
		buy2 = max(buy2, sale1-prices[i])  //第二次是否买入，买入或者不操作，选择挣得多的那个
		sale2 = max(sale2, buy2+prices[i]) //第二次买入后，卖出或不卖留着，选择挣得多的那个
	}
	return sale2
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
