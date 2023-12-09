const btn_submit = document.getElementById('submit-button');
const btn_reset = document.getElementById('reset-button');
const par = document.getElementById('par');

btn_submit.addEventListener('click', () => {
    validate();
})

btn_reset.addEventListener('click', () => {
    reset();
})

function calculate(height, weight) {
    let number = weight / (height * height);
    let result = number * 10000;
    return Math.floor(result);
}

function validate() {
    let h_inp = document.getElementById('h-inp');
    let w_inp = document.getElementById('w-inp');
    let result = calculate(h_inp.value, w_inp.value);
    let str = '';

    if(result < 16 ) str = 'severely underweight';
    if(result >= 16 && result <= 16.9) str = 'moderately underweight';
    if(result >= 17 && result <= 18.4) str = 'mildly underweight';
    if(result >= 18.5 && result <= 24.9) str = 'healthy';
    if(result >= 25 && result <= 29.9) str = 'overweight';
    if(result >= 30 && result <= 34.9) str = 'overweight in class I';
    if(result >= 35 && result <= 39.9) str = 'overweight in class II';
    if(result > 40) str = 'overweight in class III';

    par.textContent = `Your BMI is ${result}, you are ${str}`;
    console.log(result);
}

function reset() {
    document.getElementById('h-inp').value = '';
    document.getElementById('w-inp').value = '';
    par.textContent = ''
    console.clear();
}

