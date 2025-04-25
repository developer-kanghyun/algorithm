// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때,
// todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 1. filter() 함수를 사용하여 각 배열의 요소와 해당 인덱스에 접근한다.
// 2. finished[i]의 값을 확인한다.
// 3. !finished[i]가 true일 경우(아직 마치지 못한 일) 새 배열로 return한다.

const solution = (todo_list, finished) =>
  todo_list.filter((v, i) => !finished[i]);

function solution1(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (finished[i] === false) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
);
