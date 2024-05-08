/*Function*/
/*
function spread(_obj) {
    console.log(`프로퍼티 출력 : firstName=${_obj.first_name}, lastName=${_obj.last_name}`);
}
*/
function spread({first_name, last_name}){
    console.log(`프로퍼티 출력 : firstName=${first_name}, lastName=${last_name}`);
}
/*Main*/
function main() {
    const array_1 = new Array('a', 'b', 'c', 'd');
    const array_2 = new Array('f', 'g');
    //arr2에 2번째 요소부터 arr1의 원소로 채워 넣은 후 콘솔로 출력
    //arr1을 복사하여 arr3에 저장
    array_2.splice(1, 0, array_1);
    console.log(`채워넣기 : ${array_2}`);
    const array_3 = new Array(array_1);
    console.log(`복사하기 : ${array_3}`);

    const obj = {first_name:"Ungmo", last_name:"Lee"};
    //객체 리터럴 obj를 디스트럭처링 할당하여 함수 spread() 매개변수로 전달하여 출력
    spread(obj);
}

window.onload = main;