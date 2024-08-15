document.addEventListener("DOMContentLoaded", function () {
    const maisAppsLink = document.querySelector(".mais a");

    maisAppsLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Oculta todas as seções, exceto o header, aplicativos e footer
        const mainSections = document.querySelectorAll("main > section");
        mainSections.forEach(section => {
            section.style.display = "none";
        });

        // Mostra a seção de aplicativos
        const appSection = document.querySelector(".Aplicativos");
        if (appSection) {
            appSection.style.display = "flex";
        }

        // Mostra o footer
        const footer = document.querySelector("footer");
        if (footer) {
            footer.style.display = "block";
        }
    });
});
