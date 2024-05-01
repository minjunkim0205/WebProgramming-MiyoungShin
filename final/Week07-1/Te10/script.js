/*Function*/
function avgOverPass(_users){
    let temp_users = _users.map(_user => ({..._user,result: _user.ave >= 60 ? '합격' : '불합격'}));
    console.log(`${_users}`);
    console.log(`${temp_users}`);
    for(let e in temp_users){
        console.log(`{ave: ${e.ave}}, name: ${e.name}, result: ${e.result}`);
    }
    return temp_users;
}
/*Main*/
function main() {
    const users = [
        {ave:85, name:"Lee"},
        {ave:59, name:"Kim"},
        {ave:90, name:"Choi"},
        {ave:50, name:"Park"}
    ];
    avgOverPass(users);
}