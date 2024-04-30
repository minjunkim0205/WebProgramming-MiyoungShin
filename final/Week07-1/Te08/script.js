/*Main*/
function main(){
    let dim_3 = new Array("월요일", "화요일", "수요일", "목요일","금요일", "토요일", "일요일");
    // For in(사용불가)
    // For
    console.log(`첫번째 방법`);
    for(let i = 0; i < dim_3.length; i++){
        console.log(`[${i}] : ${dim_3[i]}`);
    }
    console.log(`두번째 방법`);
    // For of
    for(let e of dim_3){
        console.log(`e | ${e}`);
    }
    // Foreach
    console.log(`세번째 방법`);
    dim_3.forEach(e => {
        console.log(`e | ${e}`);
    });
}