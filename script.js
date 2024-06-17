document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const passwordInput = form.querySelector('input[name="password"]');
    const confirmPasswordInput = form.querySelector('input[name="confirm-password"]');
    const errorText = form.querySelector('.error');

    form.addEventListener('submit', function(event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorText.style.color = 'red';
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            event.preventDefault(); // Prevent form submission
        } else {
            errorText.style.color = 'rgb(140, 140, 140)'; // Reset error text color
            passwordInput.style.borderColor = '#E5E7EB';
            confirmPasswordInput.style.borderColor = '#E5E7EB';
        }
    });

    // Optional: You can also add input event listeners to update error text color dynamically
    // as the user types to provide real-time feedback.
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorText.style.color = 'red';
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
        } else {
            errorText.style.color = 'rgb(140, 140, 140)'; // Reset error text color
            passwordInput.style.borderColor = '#E5E7EB';
            confirmPasswordInput.style.borderColor = '#E5E7EB';
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorText.style.color = 'red';
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
        } else {
            errorText.style.color = 'rgb(140, 140, 140)'; // Reset error text color
            passwordInput.style.borderColor = '#E5E7EB';
            confirmPasswordInput.style.borderColor = '#E5E7EB';
        }
    });
});
