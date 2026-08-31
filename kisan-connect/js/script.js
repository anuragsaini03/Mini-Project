// KisanConnect Frontend

document.addEventListener("DOMContentLoaded", () => {

    console.log("KisanConnect loaded successfully");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

    });

});