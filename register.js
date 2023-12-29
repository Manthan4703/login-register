document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Validation flags
    let isValid = true;
    let errorMessage = "";
  
    // Get form field values
    const fullName = document.getElementById('fullname').value;
    const contact = document.getElementById('contact').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
  
    // Validate contact number
    if (!/^\d{10}$/.test(contact)) {
      errorMessage += "Contact number must be a 10-digit number.\n";
      isValid = false;
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage += "Invalid email address.\n";
      isValid = false;
    }
  
    // Show error message if validation fails
    if (!isValid) {
      alert(errorMessage);
      return;
    }
  
    // For demonstration, log validated values
    console.log('Full Name:', fullName);
    console.log('Contact:', contact);
    console.log('Date of Birth:', dob);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender);
  
    // Here you can add code to send this data to a server for registration
    // Simulating successful registration, then redirecting to login page
    alert('Registration Successful!');
    window.location.href = 'login.html'; // Redirect to the login page
  });
  