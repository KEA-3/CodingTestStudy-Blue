def solution(array, commands):
  answer = []
  for command in range(len(commands)):
    sliced = array[commands[command][0]-1:commands[command][1]]
    sliced.sort()
    answer.append(sliced[commands[command][2]-1])
  return answer
