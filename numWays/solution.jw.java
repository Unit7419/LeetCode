class Solution {
  public int numWays(int n, int m_1, int m) {
    if (n == 1 | n == 0) {
      return m;
    }

    // 0 < n < 46 works fine, Precision error at n >=46
    // js和java都是使用 IEEE754 格式来表示整数和浮点数 提前模 否则int溢出
    return this.numWays(n - 1, m % 1000000007, (m + m_1) % 1000000007);
  }

  public int numWays(int n) {
    if (n == 1 | n == 0) {
      return 1;
    }

    return this.numWays(n - 1, 1, 2);
  }
}