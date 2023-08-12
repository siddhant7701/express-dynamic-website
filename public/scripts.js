emailjs.init("user_yourEmailJSUserID");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Send email using EmailJS
    emailjs.send("your_email_service_id", "your_email_template_id", formData)
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Thank you! Your message has been sent.");
        }, function(error) {
            console.error("Error sending email:", error);
            alert("Oops! Something went wrong. Please try again later.");
        });
});