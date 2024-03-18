import sys

N = int(sys.stdin.readline())

l = []
dic = {}

# O(N)
for i in range(N):
    a = sys.stdin.readline().strip()
    l.append(a)
    
    
def sol(nums):
    dic = {}
    
    # 딕셔너리에 넣기
    # O(N)
    for _ in nums:
        dic[_] = len(_)
        
    # O(NlogN)
    dic_r = dict(sorted(dic.items()))

    # O(NlogN)
    dic_t = dict(sorted(dic_r.items(), key=lambda item:item[1]))

    return dic_t


# O(N)
for _ in sol(l):
    print(_)
 