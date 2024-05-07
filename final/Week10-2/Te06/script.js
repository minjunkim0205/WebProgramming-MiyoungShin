const change = () => {
    // 버튼 요소 선택
    const checkButton = document.querySelector("input[type='button']")
    // 버튼 클릭 이벤트 핸들러 등록
    checkButton.addEventListener("click", function () {
        // 체크된 체크박스 요소들을 가져오기
        const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
        // 체크된 항목들을 담을 배열
        const checkedValues = [];
        // 체크된 체크박스 요소들의 값을 배열에 추가
        checkedCheckboxes.forEach(function (checkbox) {
            checkedValues.push(checkbox.value);
        });
        alert("체크된 항목: " + checkedValues.join(", "));
    });
}
window.onclick = change;