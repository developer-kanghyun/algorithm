// 1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.

// a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
// a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
// a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
// 두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

const solution = (a, b) => {
  const aIsOdd = a % 2 !== 0;
  const bIsOdd = b % 2 !== 0;

  if (aIsOdd && bIsOdd) {
    return a ** 2 + b ** 2;
  } else if (aIsOdd || bIsOdd) {
    return 2 * (a + b);
  } else {
    return Math.abs(a - b);
  }
};

const solution1 = (a, b) => {
  return a % 2 == 1 && b % 2 == 1
    ? a ** 2 + b ** 2
    : a % 2 == 1 || b % 2 == 1
    ? 2 * (a + b)
    : Math.abs(a - b);
};

const solution2 = (a, b) => {
  const isOdd = (num) => num % 2 == 1;
  return isOdd(a) && isOdd(b)
    ? a ** 2 + b ** 2
    : a % 2 == 1 || b % 2 == 1
    ? 2 * (a + b)
    : Math.abs(a - b);
};

console.log(solution(3, 5));
console.log(solution1(3, 5));
console.log(solution2(3, 5));
