package main

import "fmt"

func main() {
	fmt.Println(climbStairsAnswer(1))

}

/**
如果你足够聪明，会发现其实是一个斐波那契数列
这种方案比我的方案要更快（毕竟没有递归）
*/
func climbStairsAnswer(n int) int {
	//防止只有1阶台阶下标越界
	if n == 1 {
		return 1
	}
	dp := make([]int, n+1)
	dp[1] = 1
	dp[2] = 2
	for i := 3; i <= n; i++ {
		dp[i] = dp[i-1] + dp[i-2]
	}
	return dp[n]
}
