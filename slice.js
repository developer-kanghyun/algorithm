// // 정수 배열 numbers

// 와 정수 num1, num2가 매개변수로
//  주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열
//  을 return 하도록 solution 함수를 완성해보세요.

// 배열 = numbers
// 매개변수 = num1, num2
// 배열안의 num1번째 인덱스넘버 ~ num2번째 인덱스넘버 배열 return

function solution1(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

function solution2(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}

function solution3(numbers, num1, num2) {
  var answer = [];

  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }

  return answer;
}

console.log(solution1([1, 2, 3, 4, 5], 1, 3));
console.log(solution2([1, 2, 3, 4, 5], 1, 3));
console.log(solution3([1, 2, 3, 4, 5], 1, 3));
