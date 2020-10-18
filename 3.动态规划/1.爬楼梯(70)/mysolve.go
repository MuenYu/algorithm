/**
递归，最后一步是确定的，将n阶台阶转换为 n-1、n-2阶台阶问题
即 dp[n]=dp[n-1]+dp[n-2]
*/
package main

import "fmt"

func main() {
	fmt.Println(climbStairs(44))
}

//如果不加一个数组缓存计算结果会超时
var steps = make(map[int]int)

func climbStairs(n int) int {
	if n == 1 {
		return 1
	} else if n == 2 {
		return 2
	}
	if _, exist := steps[n]; !exist {
		steps[n] = climbStairs(n-1) + climbStairs(n-2)
	}
	return steps[n]
}
