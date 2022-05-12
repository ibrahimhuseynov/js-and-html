let inp = document.querySelector("input");
let a = "";
inp.addEventListener("keyup", function() {
    for (let i = 0; i < this.value.length; i++) {
        if (!isNaN(this.value[i])) {
            this.remove(inp[this.value.length - 1]);

        }

    }
});