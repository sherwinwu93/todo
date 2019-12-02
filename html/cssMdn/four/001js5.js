var changeBg = function (event) {
    console.log("method called");
    console.log(event)
    var me = event.target
    var square = document.getElementById('square');
    square.style.backgroundColor = '#ffaa44';
    me.setAttribute("disabled", "disabled");
    setTimeout(function () {
        clearDemo(me)
    }, 2000);
}

function clearDemo(button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.removeAttribute("disabled");
}

window.onload = function () {
    var button = document.querySelector("button");
    button.addEventListener("click", changeBg)
    console.log(button);
}
