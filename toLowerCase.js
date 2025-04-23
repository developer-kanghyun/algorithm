// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

// 1. toLowerCase() 함수를 사용하여 문자열 myString을 소문자로 변환한다.

function solution(myString) {
  var answer = "";
  answer = myString.toLowerCase();
  return answer;
}

console.log(solution("aBcDeFg"));
