/*Function*/
const sum = (_students) => {
    let total = 0;
    _students.forEach(_element => {total += _element[1]});
    return (total);
}

const insert = () =>{
    console.log(`===== insert() 함수 실행 =====`);
    const NUMBER_OF_DATA = 3;
    let students = [];
    for(let i = 0; i < NUMBER_OF_DATA; i++){
        let temp = prompt("이름과 성적을 공백을 기준으로 나눠 입력해 주세요.", "").split(' ');
        students.push([temp[0], parseInt(temp[1])]);
        console.log(`${students[i][0]}, ${students[i][1]}`);
    }
    return (students);
}
const display = (_students) =>{
    console.log(`===== display() 함수 실행 =====`);
    _students.forEach(_element => { console.log(`name : ${_element[0]}, score = ${_element[1]}`) });
}
/*Main*/
const main = () => {
    let student = insert();
    display(student);
    console.log(`sum = ${sum(student)}`);
}
window.onload = main;