const HTML_EL = {
    header: () => document.querySelector("header"),
    logoFilter: () => document.querySelector("feColorMatrix"),
    menuLinksNodeList: () => document.querySelectorAll(".link"),
    btn3d: () => document.querySelector(".btn-3d__sides"),
    btnOpen: () => document.querySelector(".btn-3d__side--open"),
    btnClose: () => document.querySelector(".btn-3d__side--close"),

    mobileMenu: () => document.querySelector(".mobile-menu"),
    desktopMenu: () => document.querySelector(".desktop-nav"),

    testimonials: () => document.querySelector(".carousel__messages"),
    authors: () => document.querySelector(".authors__cointainer"),
    radioButtonsNodeList: () => document.querySelectorAll("input[name=nav-dot]"),
};

// ========================================================
// ===== CHANGE ACTIVE CLASS FOR NAVIGATION LINKS  ========
// ========================================================
(function () {

    HTML_EL.menuLinksNodeList().forEach(link => link.addEventListener("click", changeActiveClass));

    function changeActiveClass(e) {
        HTML_EL.menuLinksNodeList().forEach(link => link.classList.remove("active"));
        e.target.classList.add("active");
    }
})();

// ========================================================
// ============= CHANGE MENU APPEARANCE ===================
// ========================================================
(function () {

    document.addEventListener("scroll", change);

    function change() {

        let greetingsContainerPosition = document.querySelector(".greetings").getBoundingClientRect();

        if (greetingsContainerPosition.top <= 100) {
            HTML_EL.header().style.backgroundColor = "white";
            HTML_EL.header().style.boxShadow = "0 4px 4px -2px grey";
            HTML_EL.desktopMenu().style.color = "black";
            HTML_EL.desktopMenu().style.setProperty("--white", "black");
            HTML_EL.desktopMenu().style.setProperty("--bottom", "-1rem");
            HTML_EL.btnOpen().style.color = "black";
            HTML_EL.btnOpen().style.borderColor = "black"
            HTML_EL.logoFilter().attributes.values.value = "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0";
        } else {
            HTML_EL.header().style.backgroundColor = "transparent";
            HTML_EL.header().style.boxShadow = "none";
            HTML_EL.desktopMenu().style.color = "white";
            HTML_EL.desktopMenu().style.setProperty("--white", "white");
            HTML_EL.desktopMenu().style.setProperty("--bottom", "-3.05rem");
            HTML_EL.btnOpen().style.borderColor = "white"
            HTML_EL.btnOpen().style.color = "white";
            HTML_EL.logoFilter().attributes.values.value = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0";
        }
    }
})();

// ========================================================
// ============== OPEN-CLOSE MOBILE MENU ==================
// ========================================================
(function () {
    
    HTML_EL.btnOpen().addEventListener("click", openMobileMenu);
    HTML_EL.btnClose().addEventListener("click", closeMobileMenu);

    function openMobileMenu() {
        HTML_EL.btn3d().style.transform = "rotateY(-90deg)";
        HTML_EL.mobileMenu().style.transform = "translate(0,0)";
        HTML_EL.mobileMenu().style.opacity = 1;
    }
    function closeMobileMenu() {
        HTML_EL.btn3d().style.transform = "rotateY(0deg)";
        HTML_EL.mobileMenu().style.transform = "translate(25rem,0)";
    }
})();


// =============================================================
// =================TESTIMONIALS ANIMATION =====================
// =============================================================
(function () {

    let index = 0;
    let duration = 5000;
    let interval = setInterval(autoChange, duration);

    HTML_EL.radioButtonsNodeList().forEach(btn => btn.addEventListener("click", slide));

    function slide(e) {

        clearInterval(interval);
        //uses the ID of the radio button
        index = e.target.id - 1;

        HTML_EL.testimonials().style.left = index * -100 + "%";
        HTML_EL.authors().style.left = index * -100 + "%";

        interval = setInterval(autoChange, duration);
    }

    function autoChange() {

        index === 2 ? index = 0 : index++;

        HTML_EL.radioButtonsNodeList()[index].checked = true
        HTML_EL.testimonials().style.left = index * -100 + "%";
        HTML_EL.authors().style.left = index * -100 + "%";
    }
})();
