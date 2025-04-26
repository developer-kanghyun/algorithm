// 최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 리스트 names가 주어질 때,
// 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트를 return하도록 solution 함수를 완성해주세요.
// 마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

// 1. slice()를 사용하여문자열 리스트 names 안의 원소를 5개씩 나누어 새로운 배열에 저장한다.
// 2. 각 배열의 맨 앞의 이름들을 리턴하며, 배열의 요소가 5개 이하여도 맨 앞의 이름을 리턴한다.

const solution = (names) => {
  let answer = [];
  for (let i = 0; i < names.length; i += 5) {
    const newArr = names.slice(i, i + 5);
    answer.push(newArr[0]);
  }
  return answer;
};

const solution1 = (names) => {
  let answer = [];
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer;
};

function solution2(names) {
  let result = [];

  for (let i = 0; i < names.length; i++) {
    if (i % 5 == 0) {
      result.push(names[i]);
    }
  }

  return result;
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);

console.log(
  solution1(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);

console.log(
  solution2(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
