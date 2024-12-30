document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");
    const submitButton = form.querySelector("input[type='submit']");

    function checkFormValidity() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener("input", checkFormValidity);
    });

    checkFormValidity(); // Initial check
});