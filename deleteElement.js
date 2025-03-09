// 정수 배열 arr과 delete_list가 있습니다.
//  arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

// 1. arr의 원소에서 delete_list의 원소를 포함한다면, arr배열에 추가하지 않는다.
// 2. arr 배열을 return
const solution = (arr, delete_list) => {
  return arr.filter((x) => !delete_list.includes(x));
};

const solution1 = (arr, delete_list) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!delete_list.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
console.log(solution1([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
