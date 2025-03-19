// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
//  my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// split() 메소드를 사용하여 문자열을 나눈다. (이 때, 배열로 바뀐다.)
// num1의 문자열을 찾는다.
// num2번의 문자열을 찾는다.
// splice()메소드를 사용하여 num1의 위치를 찾은 후, 해당 문자를 삭제하고 num2의 문자열로 대체한다.
// splice()메소드를 사용하여 num2의 위치를 찾은 후, 해당 문자를 삭제하고 num1의 문자열로 대체한다.
// join()메소드를 사용하여 문자열로 변환 후 return한다.

const solution = (my_string, num1, num2) => {
  const str = my_string.split("");
  let char1 = str[num1];
  let char2 = str[num2];
  str.splice(num1, 1, char2);
  str.splice(num2, 1, char1);
  return str.join("");
};

function solution1(my_string, num1, num2) {
  // 구조분해 할당
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

console.log(solution("hello", 1, 2));
console.log(solution1("hello", 1, 2));
