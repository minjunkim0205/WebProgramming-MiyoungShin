/*Function*/
function getAvg(..._users){
    let sum = _users.reduce((_acc, _cur) => _acc + _cur, 0);
    return (sum / _users.length);
}
function getAvgOver(..._users) {
    let avg = getAvg(..._users); // _users 대신 ..._users 를 넣는 이유가 궁금함.
    return (_users.filter(_num => _num > avg).length);
}
/*Main*/
function main() {
    console.log(`평균 = ${getAvg(4, 7, 6, 12, 7, 21, 24, 75)}`);
    console.log(`평균이상은 모두 ${getAvgOver(4, 7, 6, 12, 7, 21, 24, 75)}개 입니다.`);
    console.log(`평균 = ${getAvg(80, 87, 94, 92, 98, 86, 78, 90, 92)}`);
    console.log(`평균이상은 모두 ${getAvgOver(80, 87, 94, 92, 98, 86, 78, 90, 92)}개 입니다.`);
}