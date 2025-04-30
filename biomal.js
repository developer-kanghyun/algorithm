// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const [aStr, op, bStr] = binomial.split(" ");

  const a = Number(aStr);
  const b = Number(bStr);

  return operations[op](a, b);
}

const solution1 = (binomial) => {
  const arr = binomial.split(" ");

  const a = Number(arr[0]);
  const op = arr[1];
  const b = Number(arr[2]);

  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else {
    return a * b;
  }
};

console.log("43 + 12");
