// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// 1. 피자의 조각 = 7
// 2. 나눠 먹을 사람 = n
// 3. 나눠 먹을 사람 / 피자의 조각
// 4. Math.ceil() 함수를 사용하여 올림처리한다 (나머지가 있으면 한 판을 더 시켜야하므로)

const solution = (n) => {
  return Math.ceil(n / 7);
};

function solution1(n) {
  return n % 7 === 0 ? n / 7 : Math.floor(n / 7) + 1;
}

function solution2(n) {
  let pizzas = 0;
  while (pizzas * 7 < n) {
    pizzas++;
  }
  return pizzas;
}

console.log(solution(7));
console.log(solution1(7));
console.log(solution2(7));
