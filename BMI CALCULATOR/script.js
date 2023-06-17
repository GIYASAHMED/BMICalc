const form = document.querySelector('form');
// 

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the results
        if (bmi < 18.6) {
            results.innerHTML = `you are under weight <span>${bmi}</span>`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `your are normal weight ${bmi}`
        } else if (bmi > 24.9) {
            results.innerHTML = `you are over Weight ${bmi}`
        }
        
    }
})

