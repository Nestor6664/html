document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    function validate() {
        let valid = true;

    
        if (!/^[A-Za-zА-ЯІЇЄҐа-яіїєґ\s]{2,}$/.test(fullName.value.trim())) {
            fullName.classList.add("CI-error");
            nameError.textContent = "Enter a valid name (min. 2 letters)";
            nameError.classList.add("C-error");
            nameError.style.display = "block";
            valid = false;
        } else {
            fullName.classList.remove("CI-error");
            nameError.style.display = "none";
        }

       
        if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
            email.classList.add("CI-error");
            emailError.textContent = "Enter a valid email";
            emailError.classList.add("C-error");
            emailError.style.display = "block";
            valid = false;
        } else {
            email.classList.remove("CI-error");
            emailError.style.display = "none";
        }

    
        if (!/^\+?\d{10,15}$/.test(phone.value.trim())) {
            phone.classList.add("CI-error");
            phoneError.textContent = "Enter a valid phone number (10-15 digits)";
            phoneError.classList.add("C-error");
            phoneError.style.display = "block";
            valid = false;
        } else {
            phone.classList.remove("CI-error");
            phoneError.style.display = "none";
        }

        if (message.value.trim().length < 10 || message.value.trim().length > 500) {
            message.classList.add("CI-error");
            messageError.textContent = "Message must be between 10 and 500 characters";
            messageError.classList.add("C-error");
            messageError.style.display = "block";
            valid = false;
        } else {
            message.classList.remove("CI-error");
            messageError.style.display = "none";
        }

        return valid;
    }

    fullName.addEventListener("input", validate);
    email.addEventListener("input", validate);
    phone.addEventListener("input", validate);
    message.addEventListener("input", validate);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validate()) {
            alert("Request sent successfully!");
            form.reset();
        }
    });
});