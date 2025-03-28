//  머쓱이는 추운 날에도 아이스 아메리카노만 마십니다.
//  아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
//  머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution1 = (money) => {
  coffee = 0;
  leftOver = 0;
  coffee = parseInt(money / 5500);
  leftOver = parseInt(money % 5500);

  return [coffee, leftOver];
};

const solution2 = (money) => {
  return [parseInt(money / 5500), parseInt(money % 5500)];
};

function solution3(money) {
  let answer = [];

  answer.push(parseInt(money / 5500));
  answer.push(money % 5500);

  return answer;
}

function solution4(money) {
  return [Math.floor(money / 5500), money % 5500];
}

console.log(solution1(5500));
console.log(solution2(5500));
console.log(solution3(5500));
console.log(solution4(5500));
