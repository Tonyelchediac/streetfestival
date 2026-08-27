const header = document.getElementById("header");
header.innerHTML = `

        <div class="nav-container">
            <!-- LOGO -->
            <a href="#home" class="brand">
                <img src="logos/100.png" alt="Street Festivals" class="brand-logo" />
                <div class="brand-name">
                    <span> STREET </span>
                    <span> FESTIVALS </span>
                </div>
            </a>

            <!-- SHARED NAVIGATION -->
            <nav id="mainNav" class="main-nav">
                <a href="index.html" class="nav-link"> Home </a>
                <a href="event.html" class="nav-link"> Events </a>
                <a href="gallery.html" class="nav-link"> Gallery </a>
                <a href="about.html" class="nav-link"> About </a>
                <a href="contact.html" class="nav-link"> Contact </a>
                <a href="contact.html" class="nav-cta">
                    Partner With Us
                    <i data-lucide="arrow-up-right"></i>
                </a>
            </nav>

            <!-- MOBILE BUTTON -->
            <button id="menuToggle" class="menu-toggle" type="button" aria-label="Open navigation"
                aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

`;

/* SHARED RESPONSIVE NAVIGATION */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function openMenu() {
  mainNav.classList.add("open");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mainNav.classList.remove("open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  if (mainNav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

/* CLOSE AFTER NAVIGATION */
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const footer = document.getElementById("footer");
footer.innerHTML = `

        <div class="max-w-7xl mx-auto px-5 lg:px-8 py-16">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div class="lg:col-span-2">
                    <img src="logos/logo.png" alt="Street Festivals" class="w-20 h-20 object-contain" />
                    <p class="max-w-md mt-5 text-sm leading-relaxed">
                        Street Festivals Lebanon. Music, food, art and community brought
                        together in the streets.
                    </p>
                    <div class="flex gap-3 mt-7">
                        <a href="https://www.instagram.com/streetfestivall" aria-label="Instagram"
                            class="w-10 h-10 border border-white/10 grid place-items-center hover:border-white transition">
                            <i class="fa-brands fa-instagram w-4"></i>
                        </a>
                        <a href="https://wa.me/96181004420" aria-label="Whatsapp"
                            class="w-10 h-10 border border-white/10 grid place-items-center hover:border-white transition">
                            <i class="fa-brands fa-whatsapp w-4"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-5">EXPLORE</h4>
                    <div class="flex flex-col gap-3 text-sm">
                        <a href="#upcoming"> Upcoming Events </a>
                        <a href="#experience"> Experience </a>
                        <a href="#about"> About </a>
                        <a href="#contact"> Contact </a>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-5">CONTACT</h4>
                    <div class="flex flex-col gap-3 text-sm">
                        <span> Lebanon </span>
                        <a href="mailto:info@streetfestivall.com">
                            info@streetfestivall.com
                        </a>
                        <a href="contact.html"> Become a Partner </a>
                    </div>
                </div>
            </div>
            <div
                class="border-t border-white/10 mt-14 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-white/25 uppercase tracking-widest">
                <span> © 2026 Street Festivals </span>
                <span> LET THE FUN BEGIN </span>
                <div class="chedilex-footer-container"></div>
            </div>
        </div>

`;

// whatsapp button
const whatsappButton = document.createElement("a");
whatsappButton.className =
  "fixed bottom-3 right-3 w-14 h-14 grid place-items-center rounded-full z-50 bg-[#49E670] hover:bg-green-600 text-white transition shadow-lg cta-button";
whatsappButton.href = "https://wa.me/96181004420";
whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";
whatsappButton.innerHTML = `<i class="fa-brands fa-whatsapp text-2xl"></i>`;
document.body.appendChild(whatsappButton);

// back to top button
const backToTopButton = document.createElement("button");

backToTopButton.className =
  "fixed bottom-20 right-3 w-14 h-14 hidden place-items-center rounded-full z-50 bg-gray-800 hover:bg-gray-900 text-white transition shadow-lg cursor-pointer";
backToTopButton.setAttribute("aria-label", "Back to top");
backToTopButton.innerHTML = `<i class="fa-solid fa-arrow-up text-xl"></i>`;
document.body.appendChild(backToTopButton);
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
    backToTopButton.classList.add("grid");
  } else {
    backToTopButton.classList.remove("grid");
    backToTopButton.classList.add("hidden");
  }
});
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
