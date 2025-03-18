// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

const solution = (my_string) => {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    let char = my_string[i];
    if (char === char.toUpperCase()) {
      answer += char.toLowerCase();
    } else {
      answer += char.toUpperCase();
    }
  }
  return answer;
};

function solution1(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

console.log(solution("cccCCC"));
console.log(solution1("cccCCC"));
