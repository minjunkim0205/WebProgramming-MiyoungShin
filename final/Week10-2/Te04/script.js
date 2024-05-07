const change = () => {
    const h1_element = document.getElementById("h1");
    h1_element.onclick = function () {
        this.style.color = "red";
    };
}

window.onload = change;