#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(string a, string b) {
    return a + b > b + a;
}

string solution(vector<int> numbers) {
    string answer = "";
    vector<string> vec;
    for(auto num : numbers)
        vec.push_back(to_string(num));
    sort(vec.begin(), vec.end(), compare);
    if(vec[0] == "0")
        return "0";
    for(auto num : vec)
        answer += num;
    return answer;
}
