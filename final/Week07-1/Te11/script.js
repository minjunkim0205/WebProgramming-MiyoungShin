/*Function*/
function avg(..._users){
    let sum = _users.reduce((_acc, _cur) => _acc + _cur, 0);
    return (sum / _users.length);
}
function avgOver(..._users) {
    let avg = avg(_users);
    return (_users.filter(_num => _num > avg).length);
}
/*Main*/
function main() {
    console.log(`평균 = ${avg(4, 7, 6, 12, 7, 21, 24, 75)}`);
    //console.log(`평균이상은 모두 ${avgOver(4, 7, 6, 12, 7, 21, 24, 75)}개 입니다.`);
    console.log(`평균 = ${avg(80, 87, 94, 92, 98, 86, 78, 90, 92)}`);
    //console.log(`평균이상은 모두 ${avgOver(80, 87, 94, 92, 98, 86, 78, 90, 92)}개 입니다.`);
}