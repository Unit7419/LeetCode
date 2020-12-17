export function aspow(a, n) {
    if (n == 0) {
        return 1
    } else {
        return n > 0 ? a * aspow(a, n - 1) : 1 / (a * aspow(a, Math.abs(n) - 1))
    }
}