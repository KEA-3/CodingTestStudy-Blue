
```java
import java.util.Arrays;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int a = 0;
        for(int[] nums : commands){
            int i = nums[0];
            int j = nums[1];
            int k = nums[2];

            int[] arr = Arrays.copyOfRange(array,i-1,j);
            Arrays.sort(arr);
            answer[a] = arr[k-1];
            a++;
        }
        rseturn answer;
    }
}
```