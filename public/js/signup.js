const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
// Select the sign-up button element
const signUpButton = document.querySelector('.buttons a[href="/signup"]');

// Check if the sign-up button element exists
if (signUpButton) {
  // Hide the sign-up button by setting its display property to 'none'
  signUpButton.style.display = 'none';
}
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);