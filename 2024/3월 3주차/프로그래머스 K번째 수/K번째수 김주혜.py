def solution(array, commands):
    answer = []
    
    for i in commands:
        n = i[0] - 1  # 시작
        f = i[1]  # 끝
        k = i[2]  # k번째 수
        a = sorted(array[n:f])
        answer.append(a[k - 1])
    
    return answer