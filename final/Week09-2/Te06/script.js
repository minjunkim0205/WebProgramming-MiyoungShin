const change = () => {
    const elements = document.getElementsByTagName("li");
    [...elements].forEach(_value => _value.style.color = (_value.className=="red"?"green":"blue"));
}
window.onload = change;