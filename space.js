// 단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때,
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 1, split() 함수를 사용하여 " "(공백)을 기준으로 문자열을 배열하여 리턴한다.
// * split() 함수는 문자열이 배열로 전환된다.

const solution = (my_string) => {
  return my_string.split(" ");
};

console.log(solution("i love you"));
