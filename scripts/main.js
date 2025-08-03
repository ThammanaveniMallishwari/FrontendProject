// Form Validation Logic
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputs = form.querySelectorAll("input");
            let valid = true;

            inputs.forEach((input) => {
                const errorMessage = input.nextElementSibling;
                if (!input.value.trim()) {
                    errorMessage.textContent = `${input.previousElementSibling.textContent} is required.`;
                    valid = false;
                } else if (input.type === "email" && !validateEmail(input.value)) {
                    errorMessage.textContent = "Please enter a valid email address.";
                    valid = false;
                } else {
                    errorMessage.textContent = "";
                }
            });

            if (valid) {
                alert("Form submitted successfully!");
                form.reset();
            }
        });
    });
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
