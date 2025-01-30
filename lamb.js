function solution(n, k) {
  let answer = 0;
  const lambPrice = 12000 * n;
  const drinkPrice = 2000 * k;
  const service = 2000 * Math.floor(n / 10);
  answer = lambPrice + drinkPrice - service;
  return answer;
}
