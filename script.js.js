/*=========================================
GE GREEN INDIA PVT LTD
Premium Real Estate Website
=========================================*/

// ============================
// Sticky Header
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// ============================
// Search Button
// ============================

const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        const property =
            document.querySelector(".search-box select:nth-child(1)").value;

        const city =
            document.querySelector(".search-box select:nth-child(2)").value;

        alert(
`Property Search

Property Type : ${property}

City : ${city}

(Property database will be connected later.)`
        );

    });

}

// ============================
// Reveal Animation
// ============================

const revealItems = document.querySelectorAll(
".feature-box,.about-company,.contact-section"
);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ============================
// Contact Form
// ============================

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
"Thank you for contacting GE GREEN INDIA PVT LTD.\n\nOur team will contact you shortly."
        );

        contactForm.reset();

    });

}

// ============================
// Back To Top Button
// ============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0EA75A;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 8px 20px rgba(0,0,0,.2);
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ============================
// Page Loaded
// ============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("GE GREEN INDIA PVT LTD Loaded Successfully.");

});