document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const btnScrollToTop = document.getElementById("btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        btnScrollToTop.classList.add("show");
    } else {
        btnScrollToTop.classList.remove("show");
    }
});

const visitorCountElement = document.getElementById("visitorCount");

if (localStorage.getItem("visitorCount")) {
    visitorCountElement.textContent = localStorage.getItem("visitorCount");
} else {
    visitorCountElement.textContent = "0";
}

const currentVisitorCount = parseInt(visitorCountElement.textContent) + 1;
visitorCountElement.textContent = currentVisitorCount;
localStorage.setItem("visitorCount", currentVisitorCount);



document.addEventListener("DOMContentLoaded", function() {
    const navbarMenu = document.querySelector("#navbarMenu");

    navbarMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const navbarToggler = document.querySelector(".navbar-toggler");
            navbarToggler.click();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem("visitorCount") || 0; // Verifica se há um valor salvo, senão inicia em 0
    count++; // Incrementa o contador
    localStorage.setItem("visitorCount", count); // Salva o novo valor no armazenamento local
    document.getElementById("visitorCount").textContent = count; // Atualiza o contador na página
});
