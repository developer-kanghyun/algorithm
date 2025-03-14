// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

const solution = (my_string) => {
  return my_string
    .replaceAll(/[a-zA-Z]/g, "")
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
};

const solution1 = (my_string) => {
  return (my_string.match(/\\d/g) || []).reduce(
    (sum, digit) => sum + +digit,
    0
  );
};

function solution2(my_string) {
  let sum = 0;
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    if (char >= "0" && char <= "9") {
      sum += parseInt(char);
    }
  }
  return sum;
}
console.log(solution("aAb1B2cC34oOp"));
console.log(solution1("aAb1B2cC34oOp"));
console.log(solution2("aAb1B2cC34oOp"));
