//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// for문을 이용하여 반복처리
function solution(strList) {
  let answer = [];
  for (let i = 0; i < strList.length; i++) {
    answer[i] = strList[i].length;
  }
  return answer;
}
// map method를 이용하여 배열에 대한 반복처리.
let solution = (strList) => {
  return strList.map((el) => el.length);
};
