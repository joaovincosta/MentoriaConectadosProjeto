function mask(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout(execmask, 1);
}

function execmask() {
    v_obj.value = v_fun(v_obj.value);
}

function maskcep(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/,'$1-$2');
    return v;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cep').addEventListener('input', function() {
        console.log("input")
        this.value = maskcep(this.value);
    });
    document.getElementById('cep').addEventListener('blur', function() {
        console.log("blur")
        this.value = maskcep(this.value);
    });
});

function idcss(el) {
    return document.getElementById(el);
}