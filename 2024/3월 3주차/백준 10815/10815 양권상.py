import sys

N = int(sys.stdin.readline().strip())
Nnums = list(map(int,sys.stdin.readline().split(' ')))

M = int(sys.stdin.readline().strip())
Mnums = list(map(int,sys.stdin.readline().split(' ')))

def sol(Nnums, Mnums):
    nums = set(Nnums)
    res =[]

    for _ in Mnums:
        if _ in nums:
            res.append(1)
        else:
            res.append(0)
    return res

print(*sol(Nnums,Mnums))