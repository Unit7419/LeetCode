public class SolutionA {
    public int numWays(int n) {
        if (n == 0) return 1;
        if (n == 1) return 1;
        int a = 1;
        int b = 1;
        for (int i = 2; i <= n; i++) {
            b += a;
            a = b - a;
            b %= 1e9 + 7;
            a %= 1e9 + 7;
        }
        return b;
    }
}