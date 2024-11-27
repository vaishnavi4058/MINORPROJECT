document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents the form from submitting normally

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple client-side validation
            if (name && email && message) {
                // You can send data via AJAX to a backend, or show a success message
                alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
                
                // Optionally, clear the form after submission
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
