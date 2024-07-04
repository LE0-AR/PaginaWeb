

/*Menu productos */
document.addEventListener('DOMContentLoaded', function() {
    const submenuLinks = document.querySelectorAll('.has-submenu');

    submenuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Cerrar cualquier submenú abierto
            submenuLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.parentElement.classList.remove('active');
                }
            });

            // Abrir el submenú del elemento clicado
            const parentLi = this.parentElement;
            parentLi.classList.toggle('active');
        });
    });

    // Cerrar submenús al hacer clic fuera de ellos
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.categories');
        if (!isClickInside) {
            submenuLinks.forEach(link => {
                const parentLi = link.parentElement;
                parentLi.classList.remove('active');
            });
        }
    });
});

/*Secciones*/
function showSection(sectionId) {
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = "block";
    }
}

function checkHash() {
    var hash = window.location.hash;
    if (hash) {
        showSection(hash.substring(1));
    } else {
        showSection("section1");
    }
}

window.onhashchange = function () {
    checkHash();
};

document.addEventListener('DOMContentLoaded', function () {
    checkHash();
});


/*Codsigo muestra de productos detalles */