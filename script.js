/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("mobile-open");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("mobile-open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("mobile-open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const resultsSection = document.getElementById("results");

    const sectionPosition =
        resultsSection.getBoundingClientRect().top;

    const screenPosition = window.innerHeight * 0.85;

    if (sectionPosition < screenPosition) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.max(
                1,
                Math.ceil(target / 50)
            );

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                    return;

                }

                counter.textContent = current;

                requestAnimationFrame(updateCounter);

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);


/* =========================================================
   TESTIMONIAL SLIDER
========================================================= */

const testimonials = [

    {
        text:
            "The SEO strategy helped us improve our organic visibility and bring in more qualified traffic. Communication and reporting were excellent.",
        name: "John Doe",
        role: "Business Owner"
    },

    {
        text:
            "Our Meta campaigns became much more structured after the optimization. We started getting better leads while improving our advertising efficiency.",
        name: "Sarah Ahmed",
        role: "E-Commerce Founder"
    },

    {
        text:
            "The research, strategy and reporting were very professional. We finally had a clear understanding of where our digital growth was coming from.",
        name: "Michael Smith",
        role: "Marketing Director"
    }

];

let testimonialIndex = 0;

const testimonialText =
    document.getElementById("testimonialText");

const clientName =
    document.getElementById("clientName");

const clientRole =
    document.getElementById("clientRole");

function showTestimonial(index) {

    testimonialText.style.opacity = "0";

    setTimeout(() => {

        testimonialText.textContent =
            `“${testimonials[index].text}”`;

        clientName.textContent =
            testimonials[index].name;

        clientRole.textContent =
            testimonials[index].role;

        testimonialText.style.opacity = "1";

    }, 180);

}

document
    .getElementById("nextTestimonial")
    .addEventListener("click", () => {

        testimonialIndex++;

        if (testimonialIndex >= testimonials.length) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    });


document
    .getElementById("prevTestimonial")
    .addEventListener("click", () => {

        testimonialIndex--;

        if (testimonialIndex < 0) {

            testimonialIndex = testimonials.length - 1;

        }

        showTestimonial(testimonialIndex);

    });


/* =========================================================
   AUTO TESTIMONIAL
========================================================= */

setInterval(() => {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}, 7000);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please fill in all required fields.";

        formMessage.style.background =
            "rgba(255,80,80,0.08)";

        formMessage.style.color =
            "#ff7676";

        formMessage.classList.add("show");

        return;

    }


    /*
        This is currently a frontend demo.

        To receive real messages, connect this form
        to Formspree, Web3Forms, EmailJS, or your
        own backend/API.
    */


    formMessage.textContent =
        "Thanks! Your message has been prepared successfully.";

    formMessage.style.background =
        "rgba(56,210,123,0.08)";

    formMessage.style.color =
        "#56d68b";

    formMessage.classList.add("show");

    contactForm.reset();

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .case-card, .about-card, .process-item, .tool-group, .stat, .testimonial"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   SMOOTH ANCHOR OFFSET
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight =
            document.getElementById("header").offsetHeight;

        const targetPosition =
            target.offsetTop - headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   REDUCED MOTION
========================================================= */

const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior = "auto";

}