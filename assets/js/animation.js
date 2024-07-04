document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a.animated-link");
  
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 
            const target = event.currentTarget.getAttribute("href");
            document.body.classList.remove("page-load");
            document.getElementById("page-content").classList.add("slide-out-left");
            setTimeout(() => {
                window.location.href = target;
            }, 500); 
        });
    });
  
    const hash = window.location.hash;
    if (hash) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            document.getElementById("page-content").classList.add("hidden");
            setTimeout(() => {
                document.getElementById("page-content").classList.remove("hidden");
                window.scrollTo(0, targetSection.offsetTop);
            }, 500); // Coincide con el tiempo de la animación CSS
        }
    }
  });
  