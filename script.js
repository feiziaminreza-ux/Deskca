// Update these two values before publishing your portfolio.
const SITE_CONFIG = {
  email: "YOUR_EMAIL@example.com",
  github: "YOUR_GITHUB_USERNAME"
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("email-link");
const githubLink = document.getElementById("github-link");
emailLink.href = `mailto:${SITE_CONFIG.email}`;
emailLink.textContent = SITE_CONFIG.email;
githubLink.href = `https://github.com/${SITE_CONFIG.github}`;
githubLink.textContent = `github.com/${SITE_CONFIG.github}`;

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (SITE_CONFIG.email === "YOUR_EMAIL@example.com" || !SITE_CONFIG.email.includes("@")) {
    formStatus.textContent = "Please update SITE_CONFIG.email in script.js with your real email address before using this form.";
    return;
  }

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const senderEmail = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const subject = encodeURIComponent(`Website enquiry: ${service}`);
  const body = encodeURIComponent(
    `Hello Amin,\n\nI would like to discuss a project.\n\nName: ${name}\nEmail: ${senderEmail}\nService: ${service}\n\nProject details:\n${message}\n\nSent from your portfolio website.`
  );
  formStatus.textContent = "Opening your email app with the message prepared…";
  window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
});
