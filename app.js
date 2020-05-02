
window.addEventListener("load", () => {
    ul = document.querySelector('ul');
    input = document.querySelector('input');

    arr = ['osama', 'ahmed', 'adel', 'ali','harmosh','mohamed'];

    arr.forEach(element => {
        li = document.createElement("li");
        li.innerHTML = element;
        ul.appendChild(li);
    });

    input.addEventListener('keyup', (e) => {
        input_value = e.target.value.toLowerCase();
        lis = document.querySelectorAll('li');
        Array.from(lis).forEach((r) => {
            arraylist = r.textContent.toLowerCase();
            split = arraylist.indexOf(input_value);
            if (split != -1) {
                r.style.display = "list-item";
                console.log(r);
            } else {
                r.style.display = "none";
            }
        });
    });

});