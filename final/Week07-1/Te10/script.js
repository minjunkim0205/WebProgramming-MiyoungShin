/*Function*/
function avgOverPass(..._users){
    _users.map(_user => {
        const _result = _user.ave >= 60 ? "합격" : "불합격";
        return {..._user, _result};
    });
    return _users;
}
/*Main*/
function main() {
    const users = [
        { ave: 85, name: 'Lee' },
        { ave: 59, name: 'Kim' },
        { ave: 90, name: 'Choi' },
        { ave: 50, name: 'Park' }
    ];
    console.log(`${avgOverPass(users)}`);
}