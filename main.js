const display = document.querySelector('.js-display');
const btns = document.querySelectorAll('.js-btn');
const btnCalculate = document.querySelectorAll('.js-btn-calculate');

btns.forEach    ((item) =>{
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;

        if(itemText === "X"){
            itemText = "*";
        }

        if(itemText === "÷"){
            itemText = "/";
        }

        if(itemText === "AC"){
            display.value = '';
        }

        if(itemText === "="){
            display.value = eval(display.value);
        }

        if(itemText === "C"){
            display.value =  display.value.slice(0, -1);
        }

        if(itemText !== "C" && itemText !== "AC" &&itemText !== "="){
            display.value += itemText;
        }
    });
});

const sin = () =>{
    display.value = Math.sin(display.value);
}
btnCalculate.forEach((item) =>{
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        if(itemText === "sin"){
            sin();
        }
    });
});
const cos = () =>{
    display.value = Math.cos(display.value);
}
btnCalculate.forEach((item) =>{
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        if(itemText === "cos"){
            cos();
        }
    });
});
const tan = () =>{
    display.value = Math.tan(display.value);
}
btnCalculate.forEach((item) =>{
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        if(itemText === "tan"){
            tan();
        }
    });
});
const pow = () =>{
    display.value = Math.pow(display.value,2);
}
btnCalculate.forEach((item) =>{
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        if(itemText === "X²"){
            pow();
        }
    });
});
const sqrt = () =>{
    display.value = Math.sqrt(display.value,2);
}
btnCalculate.forEach((item) =>{
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        if(itemText === "√"){
            sqrt();
        }
    });
});
