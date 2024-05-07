const change = () => {
    // h1 요소를 선택
    const h1Element = document.getElementById("h1");
    // 마우스가 요소 안으로 이동할 때의 이벤트 핸들러 등록
    h1Element.addEventListener("mouseover", function () {
        this.style.backgroundColor = "coral";
    });
    // 마우스가 요소 밖으로 이동할 때의 이벤트 핸들러 등록
    h1Element.addEventListener("mouseout", function () {
        this.style.backgroundColor = "yellow";
    });
}
window.onclick = change;
