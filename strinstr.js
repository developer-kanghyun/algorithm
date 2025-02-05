// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

const solution = (str1, str2) => {
  return str1.includes(str2) ? 1 : 2;
};

// const solution = (str1, str2) => {
//   let answer = 0;
//   const replacedStr = str1.replace("str1", "");
//   if (str1 == replacedStr) {
//     answer = 1;
//   } else {
//     answer = 2;
//   }
//   return answer;
// };

// const solution = (str1, str2) => {
//   const replacedStr = str1.replace("str1", "");
//   return str1 == replacedStr ? 1 : 2;
// };

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
