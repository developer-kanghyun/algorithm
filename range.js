// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// lowercase() 함수를 사용하여 문자를 소문자로 바꾼다.
// split() 함수를 사용하여 문자열을 나눈다.
// sort() 함수를 사용하여 알파벳을 순서대로 정렬한다.
// join() 함수를 사용하여 하나의 문자열로 다시 합친다.

const solution = (my_string) => {
  return my_string.toLowerCase().split("").sort().join("");
};

const solution1 = (my_string) => {
  return [...my_string]
    .map((v) => v.toLowerCase())
    .sort()
    .join("");
};

const solution2 = (my_string) => {
  return [...my_string.toLowerCase()].sort().join("");
};

console.log(solution("Bcad"));
console.log(solution1("Bcad"));
console.log(solution2("Bcad"));
