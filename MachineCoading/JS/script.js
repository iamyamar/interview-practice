let btn = document.querySelector('.btn');
let count = document.querySelector('.count');
let num = 0;
count.textContent = num;

const increment = () => {
    count.textContent = ++num;
};

btn.addEventListener('click', increment);
