function calculateBMI() {
    // Get the height and weight values from the input fields
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    // Convert height from cm to meters for BMI calculation
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Round the BMI to two decimal places
    bmi = bmi.toFixed(2);

    // Determine the BMI category
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result
    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category}).`;
}
