// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

// 1. includes() 함수를 사용하여 문자열 myString 안에 pat이 포함되는지 확인한다.
// 2. toLowerCase()를 사용하여 두 매개변수의 대소문자를 일치시킨다.
// 3. true면 1, false면 0을 리턴한다.

const solution = (myString, pat) =>
  myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
