function hsl() {
    try {
        clr(eval(document.getElementById("display").value))
    }
    catch (hsl) {
        clr('Error')
    }
}

function oper(val) {
    document.getElementById("display").value += val;
}

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.slice(0, -1);
}

function clr(val) {
    document.getElementById("display").value=val;
}