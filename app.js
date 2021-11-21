// select the elements
var toggle_btn = document.querySelector(".toogle-btn");
var big_wrapper = document.querySelector(".big-wrapper");
const main = document.querySelector("main");

function toggleAnimation() {
    // clone the wrapper
    let clone = big_wrapper.cloneNode();
    main.appendChild(clone);
}

toggle_btn.addEventListener("click", toggleAnimation);
