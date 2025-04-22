// 정수 배열 arr가 주어집니다.
// arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.

//  1. 각 원소를 2로 나누는 메소드를 생성한다.
//  2. 각 원소를 2로 곱하는 메소드를 생성한다.
//  3. 50보다 크거나 같은 짝수일 경우, 2로 나누는 메소드로 정수 배열을 리턴한다.
//  4. 50보다 작은 홀수일 경우, 2로 곱하는 메소드로 정수 배열을 리턴한다.

const solution = (arr) => {
  return arr.map((a) =>
    a >= 50 && a % 2 === 0 ? a / 2 : a < 50 && a % 2 === 1 ? a * 2 : a
  );
};

const solution1 = (arr) => {
  return arr.map((a) => {
    if (a >= 50 && a % 2 === 0) {
      return a / 2;
    } else if (a < 50 && a % 2 === 1) {
      return a * 2;
    } else {
      return a;
    }
  });
};

console.log(solution([1, 2, 3, 100, 99, 98]));
console.log(solution1([1, 2, 3, 100, 99, 98]));
