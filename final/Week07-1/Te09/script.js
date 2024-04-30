/*Function*/
function genRandomInt(_min, _max){
    return (Math.floor(Math.random()*(_max - _min + 1))+_min);
}
/*Main*/
function main(){
    var array = Array.from({length:10}, () => genRandomInt(10, 20));
    console.log(`중복 요소 제거 전 : ${array}`);
    array = array.filter((_value, _index) => array.indexOf(_value) === _index);
    console.log(`중복 요소 제거 후 : ${array}`);
}