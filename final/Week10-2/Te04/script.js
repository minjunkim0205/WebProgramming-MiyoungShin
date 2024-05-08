const main = () => {
    const h1_element = document.querySelector("#h1");
    h1_element.onclick = () => {
        h1_element.style.color = "red";
    }
}
window.onload = main;