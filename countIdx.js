// 문자열 myString이 주어집니다.
//  myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// 1. split()함수를 이용하여 x를 기준으로 요소를 나눈다.
// 1. map() 함수를 이용하여 요소의 길이를 반환하여 리턴한다.
const solution = (myString) => {
  return myString.split("x").map((v) => v.length);
};

console.log(solution("oxooxoxxox"));
