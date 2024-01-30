const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Few Checks
    if (height === '' || height < 0 || isNaN(height)) {
        // For valid height
        results.innerHTML = `Please enter a valid height : ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        // For valid weight
        results.innerHTML = `Please enter a valid weight : ${weight}`;
    } else {
        // Both the values are accurate
        // Let's calculate the BMI
        // 1m = 100cm
        // 1cm = 1/100m;
        const bmi = (weight / ((height * height) / (100 * 100))).toFixed(2);

        if (bmi < 18.6) {
            results.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`
        } else if (bmi === 18.6 || bmi < 24.9) {
            results.innerHTML = `<span>Your BMI is ${bmi}. You are in Normal Range.</span>`
        }
        if (bmi > 24.9) {
            results.innerHTML = `<span>Your BMI is ${bmi}. You are Overweight.</span>`
        }
    }
});