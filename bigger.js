// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123, 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// 1. String() 함수를 사용하여 두 정수를 문자로 변환한 후 더한다.
// 2. Number() 함수를 사용하여 두 문자를 정수로 변환하고 크기를 비교한다.

const solution = (a, b) => {
  let value1 = String(a) + String(b);
  let value2 = String(b) + String(a);
  return Number(value1 >= value2 ? value1 : value2);
};

const solution1 = (a, b) => {
  return Math.max(Number(`${a}${b}`, `${b}${a}`));
};

console.log(solution(9, 91));
console.log(solution1(9, 91));
