document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form field values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validation flag
    let isValid = true;
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      alert('Invalid email address.');
      return;
    }
  
    // For demonstration, log validated values
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Here you can add code to authenticate this data with a server
    // Simulating successful login, do something here instead of alert
    alert('Login Successful!');
    // No redirection after successful login for demonstration

    window.location.reload();

  });
  