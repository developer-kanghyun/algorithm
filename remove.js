// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 1. split() 함수를 이용하여 모든 요소를 각각 분리한다
// 2. replaceAll() 함수를 이용하여 a, e, i, o, u를 제거한다
// 3. join() 함수를 이용하여 다시 한 문자열로 합친다

const solution = (my_string) => my_string.replace(/[aeiou]/g, "");

const solution1 = (my_string) => {
  let answer = "";
  const vowels = "aeiou";
  for (let i = 0; i < my_string.length; i++) {
    if (!vowels.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
};

const solution2 = (my_string) => {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
};

console.log(solution("bus"));
console.log(solution1("bus"));
console.log(solution2("bus"));
