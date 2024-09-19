document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // Get user input
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  
  // Calculate BMI
  if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      
      // Determine BMI category
      let category = '';
      if (bmi < 18.5) {
          category = 'Underweight';
      } else if (bmi < 24.9) {
          category = 'Normal weight';
      } else if (bmi < 29.9) {
          category = 'Overweight';
      } else {
          category = 'Obesity';
      }
      
      // Display the result
      document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(1)} (${category})`;
  } else {
      document.getElementById('result').textContent = 'Please enter valid values for weight and height.';
  }
});
