document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        
        document.querySelectorAll(".faq-answer").forEach(el => {
            if (el !== answer) {
                el.style.maxHeight = null;
                el.previousElementSibling.querySelector(".icon").textContent = "+";
            }
        });

    
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "-";
        }
    });
});