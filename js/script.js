document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('form-messages').textContent = 'Please enter a valid phone number (10 digits).';
        return;
    }

    // Create an object to log
    const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        email: email,
        password: password
    };

    console.log(formData); // Log form data as an object

    // Clear the form
    document.getElementById('registration-form').reset();
    document.getElementById('form-messages').textContent = ''; // Clear messages
});
