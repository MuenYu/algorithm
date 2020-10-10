package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Println(maxProfit([]int{3, 2, 6, 5, 0, 3}))
}

func maxProfit(prices []int) int {
	profit := 0

	if len(prices) > 1 {
		//数组简化
		for i := 0; i < len(prices)-2; {
			if prices[i] < prices[i+1] && prices[i+1] < prices[i+2] || prices[i] > prices[i+1] && prices[i+1] > prices[i+2] {
				prices = append(prices[:i+1], prices[i+2:]...)
			} else {
				i++
			}
		}
		//大减小
		for i := 0; i < len(prices)-1; i++ {
			if prices[i] < prices[i+1] {
				profit += prices[i+1] - prices[i]
			}
		}
	}
	return profit
}

// 一个失败的尝试
func maxProfitFailed1(prices []int) int {
	profit, length := 0, len(prices)

	if length > 1 {
		resultSet := make([]int, 0)
		for i := 0; i < length; i++ {
			tempProfit := 0
			for j := i + 1; j < length; j++ {
				if j == length-1 {
					if prices[i] < prices[j] {
						tempProfit += prices[j] - prices[i]
					}
				} else {
					if prices[j] > prices[j+1] && prices[i] < prices[j] {
						tempProfit += prices[j] - prices[i]
						// 卡住了。。。
					}
				}
			}
			resultSet = append(resultSet, tempProfit)
		}
		sort.Ints(resultSet)
		profit = resultSet[len(resultSet)-1]
	}

	return profit
}
