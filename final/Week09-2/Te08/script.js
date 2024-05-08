const main = () => {
    let class_hallym = document.querySelectorAll(".hallym");
    class_hallym.forEach(_element => {_element.style.width = "100px"});
}
window.onload = main;