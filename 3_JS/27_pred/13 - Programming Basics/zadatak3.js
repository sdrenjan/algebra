(function calculateBMI() {
    let result;
    let person = prompt('Please enter your name: ');
    let height = prompt(`What is your height (in m), ${person}: `);
    let weight = prompt(`What is your weight (in kg), ${person}: `);

    result = weight / height ** 2;
    console.log(result);

    switch (true) {
        case (result < 18.5):
            alert(`${person}, your BMI is: ${result.toFixed(2)} - Underweight`);
            break;
        case (result >= 18.5 && result < 25):
            alert(`${person}, your BMI is: ${result.toFixed(2)} - Normal weight`);
            break;
        case (result >= 25 && result < 30):
            alert(`${person}, your BMI is: ${result.toFixed(2)} - Overweight`);
            break;
        case (result >= 30):
            alert(`${person}, your BMI is: ${result.toFixed(2)} - Obese`);
            break;
        default:
            alert('BMI could not be calculated');
            break;
    }
})();