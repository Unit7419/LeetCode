class Solution {
  public int numWays(int n, int m_1, int m) {
    if (n == 1 | n == 0) {
      return m % 1000000007;
    }

    // 0 < n < 46 works fine, Precision error at n >=46
    return this.numWays(n - 1, m, m + m_1);
  }

  public int numWays(int n) {
    if (n == 1 | n == 0) {
      return 1;
    }

    return this.numWays(n - 1, 1, 2);
  }
}