import sys

N = int(sys.stdin.readline().strip())

def sol(N):
    left, right = 1, N
    while left <= right:
        mid = (left + right) // 2
        if mid * mid == N:
            return mid
        elif mid * mid < N:
            left = mid + 1
        else:
            right = mid - 1
    return None

print(sol(N))