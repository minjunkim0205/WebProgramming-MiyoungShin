const change = () => {
    const checkButton = document.querySelector("input[type='button']")
    checkButton.addEventListener("click", function () {
        const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
        const checkedValues = [];
        checkedCheckboxes.forEach(function (checkbox) {
            checkedValues.push(checkbox.value);
        });
        alert("체크된 항목: " + checkedValues.join(", "));
    });
}
window.onclick = change;