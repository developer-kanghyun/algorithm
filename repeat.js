// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 문자열 : my_string
// parameter : n
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열

const solution1 = (my_string, n) => {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
};

const solution2 = (my_string, n) => {
  let result = "";
  for (let char of my_string) {
    result += char.repeat(n);
  }
  return result;
};

const solution3 = (my_string, n) =>
  my_string
    .split("")
    .map((char) => char.repeat(n))
    .join("");

console.log(solution1("hello", 3));
console.log(solution2("hello", 3));
console.log(solution3("hello", 3));
